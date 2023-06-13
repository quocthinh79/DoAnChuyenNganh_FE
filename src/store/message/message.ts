import { create } from "zustand";

export const useMessageStorage = create((set) => ({
  messages: "This is messenger",
  setMessage: (messages: string) => set({ messages }),
}));
