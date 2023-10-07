import { create } from "zustand";

export default create((set) => ({
    loggedIn: false,
    setLoggedIn: (loggedIn) => set(() => ({ loggedIn: loggedIn })),
    user: null,
    setUser: (userValue) => set(() => ({ user: userValue })),
    agency: null,
    setAgency: (agencyValue) => set(() => ({ agency: agencyValue })),
}));
