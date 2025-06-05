// store/atom/counter.js
import { atom } from 'recoil';

export const counterAtom = atom({
  key: 'counterAtomUnique_v1', // ← Give it a versioned, unique name
  default: 0,
});
