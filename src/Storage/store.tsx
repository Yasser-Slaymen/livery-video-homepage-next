import { create } from "zustand";
export type State = {
  count1: number;

  count2: number;
  count3: number;
  setCount1: (count: number) => void;
  setCount2: (count: number) => void;
  setCount3: (count: number) => void;
};

const useStore = create<State>((set) => ({
  count1: 1,
  count2: 1,
  count3: 100,
  setCount1: (count: number) => set({ count1: count }),
  setCount2: (count: number) => set({ count2: count }),
  setCount3: (count: number) => set({ count3: count }),
}));

export default useStore;
