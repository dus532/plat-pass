import { useLocation, Navigate } from 'react-router-dom';

import { getAuth } from '@/utils/auth';

export default function RequireAuth({
  children,
  isAuthPath,
}: {
  children: JSX.Element;
  isAuthPath?: string;
}) {
  const location = useLocation();
  const auth = getAuth();

  if (!auth && !isAuthPath) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (auth && isAuthPath) {
    return <Navigate to={isAuthPath} state={{ from: location }} replace />;
  }

  return children;
}
