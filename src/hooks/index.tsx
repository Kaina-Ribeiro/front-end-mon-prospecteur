import { ReactNode } from 'react';
import { CacheProvider, EmotionCache, Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../themes/theme';
import { GlobalStyles } from '../styles/global';
import createEmotionCache from '../styles/createEmotionCache';
import { AuthProvider } from './Auth';
import { RouteGuard } from './RouteGuard';

interface IGlobalContextProps {
  emotionCache?: EmotionCache;
  children: ReactNode;
}

const clientSideEmotionCache = createEmotionCache();

const GlobalContext = ({
  children,
  emotionCache = clientSideEmotionCache,
}: IGlobalContextProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <CssBaseline />
        <AuthProvider>
          <RouteGuard>{children}</RouteGuard>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default GlobalContext;
