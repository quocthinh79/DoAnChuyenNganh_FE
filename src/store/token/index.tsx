import { create } from "zustand";
import { persist } from "zustand/middleware";

const createTokenSlice = (set: any, get: any) => ({
  token: "",
  setToken: (token: string) => set({ token }),
  isValid: () => get().token.length > 0,
});

export const useStorageToken = create(
  persist(createTokenSlice, {
    name: "token",
  })
);
