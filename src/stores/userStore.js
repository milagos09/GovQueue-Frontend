import { create } from "zustand";

export default create((set) => ({
  loggedIn: true,
  setLoggedIn: (loggedIn) => set(() => ({ loggedIn: loggedIn })),
  visitorCount: 0,
  setVisitorCount: (count) => set(() => ({ visitorCount: count })),
}));
