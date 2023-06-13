import { create } from "zustand";
import { persist } from "zustand/middleware";

const createTotalCartItemSlice = (set: any) => ({
  totalCartItems: 0,
  setTotalCartItems: (totalCartItems?: number) => set({ totalCartItems }),
});

export const useStorageTotalCartItems = create(
  persist(createTotalCartItemSlice, {
    name: "totalCartItems",
  })
);
