import { create } from "zustand";

export const usePathname = create((set) => ({
  pathname: "",
  setPathname: (pathname: string) => set({ pathname }),
}));
