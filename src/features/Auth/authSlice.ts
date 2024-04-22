import { create } from "zustand";

type Auth = {
  username: string;
  role: string;
  setUsernameAuth: (value: string) => void;
  setRoleAuth: (value: string) => void;
};

export const useAuth = create<Auth>()((set) => ({
  username: "",
  setUsernameAuth: (value) => set(() => ({ username: value })),
  role: "",
  setRoleAuth: (value) => set(() => ({ role: value })),
}));
