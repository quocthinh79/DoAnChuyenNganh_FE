import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RolesProps {
  roles: string[];
  setRoles: (roles: string[]) => void;
  isAdmin: () => boolean;
}

const createRolesSlice = (set: any, get: any): RolesProps => ({
  roles: [""],
  setRoles: (roles: string[]) => set({ roles }),
  isAdmin: () => {
    return get()?.roles.includes("ADMIN");
  },
});

export const useStorageRoles = create<RolesProps>()(
  persist(createRolesSlice, {
    name: "roles",
  })
);
