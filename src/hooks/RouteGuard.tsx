import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from './Auth';

function RouteGuard({ children }) {
  const router = useRouter();
  const { token } = useAuth();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  function authCheck(url: string) {
    const publicPaths = ['/login'];
    const path = url.split('?')[0];

    if (!token && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
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
