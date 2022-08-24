import './index.css';
import './animation.css';
import 'minireset.css';

import { defaultTheme, ThemeProvider, Preflight } from '@xstyled/emotion';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';

import App from './App';

initThinBackend({
  // This url is different for each backend, this one points to 'plat-pass'
  host: 'https://plat-pass.thinbackend.app',
});

const theme = {
  ...defaultTheme,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThinBackend>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Preflight />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </ThinBackend>,
);
