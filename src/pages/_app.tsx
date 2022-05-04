import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { EmotionCache } from '@emotion/react';
import Providers from '../hooks';

type NextPageWithLayout<P = unknown> = NextPage<P> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps, emotionCache }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Providers emotionCache={emotionCache}>{getLayout(<Component {...pageProps} />)}</Providers>
  );
}

export default MyApp;
