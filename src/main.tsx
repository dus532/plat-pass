import './index.css';
import 'minireset.css';

import { defaultTheme, ThemeProvider, Preflight } from '@xstyled/emotion';
import ReactDOM from 'react-dom/client';

import App from './App';

const theme = {
  ...defaultTheme,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <Preflight />
    <App />
  </ThemeProvider>,
);
