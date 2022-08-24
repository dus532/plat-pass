import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import RequireAuth from '@/components/organisms/common/RequireAuth';
import Login from '@/pages/Login';
import My from '@/pages/My';

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
    );
  }, [window]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth isAuthPath="my">
            <Login />
          </RequireAuth>
        }
      />
      <Route
        path="/my"
        element={
          <RequireAuth>
            <My />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
