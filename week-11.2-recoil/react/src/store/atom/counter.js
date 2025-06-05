// store/atom/counter.js
import { atom, selector } from 'recoil';

export const counterAtom = atom({
  key: 'counterAtomUnique_v1', // ← Give it a versioned, unique name
  default: 0,
});


export const evenSelector = selector({
  key:"isEvenSelector",
  get: function({get}){
    const currentCount = get(counterAtom)
    const isEven = currentCount % 2 == 0;
    return isEven;
  }
})