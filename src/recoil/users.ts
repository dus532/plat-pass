import { atom } from 'recoil';

export const getUserFilterState = atom({
  key: 'getUserFilterState',
  default: { name: '', phoneNumber: '' },
});
