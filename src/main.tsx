import '@fontsource/inter';
import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './app/store.ts';
import './index.css';
import 'maplibre-gl/dist/maplibre-gl.css';

const theme = extendTheme({
  radius: {
    xs: '10px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider defaultMode="system" modeStorageKey="dark-mode-pref" disableNestedContext theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </CssVarsProvider>
  </StrictMode>,
);
