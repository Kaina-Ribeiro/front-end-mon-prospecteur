import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from './Auth';

function RouteGuard({ children }) {
  const router = useRouter();
  const { token } = useAuth();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ['/login'];
    const path = url.split('?')[0];
    if (!token && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath },
      });
    } else if (token && path == '/login') {
      setAuthorized(false);
      router.push({
        pathname: '/',
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}

export { RouteGuard };
