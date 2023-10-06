import { create } from "zustand";

export default create((set) => ({
    loggedIn: false,
    setLoggedIn: (loggedIn) => set(() => ({ loggedIn: loggedIn })),
}));
