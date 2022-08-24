import { atom } from 'recoil';

import { AUTH } from '@/constants/common';

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: any) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const authState = atom({
  key: 'authState',
  default: {
    id: '',
  },
  effects: [localStorageEffect(AUTH)],
});
