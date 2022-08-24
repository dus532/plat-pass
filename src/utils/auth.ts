import { AUTH } from '@/constants/common';

export function getAuth() {
  const savedValue = localStorage.getItem(AUTH);
  if (savedValue != null) {
    return JSON.parse(savedValue) as { id: string };
  }

  return null;
}
