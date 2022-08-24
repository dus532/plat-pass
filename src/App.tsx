import { useEffect } from 'react';

import Login from '@/pages/Login';

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
    );
  }, [window]);
  return <Login />;
}

export default App;
