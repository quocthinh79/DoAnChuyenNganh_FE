import { create } from "zustand";
import { persist } from "zustand/middleware";

const createRememberMeSlice = (set: any, get: any) => ({
  rememberMe: true,
  setRememberMe: (state: boolean) => set(() => ({ rememberMe: state })),
});

export const useStorageRememberMe = create(
  persist(createRememberMeSlice, {
    name: "rememberMe",
  })
);
