import { create } from "zustand";

export default create((set) => ({
    search: "",
    setSearch: (newSearch) => set(() => ({ search: newSearch })),
    showSearch: false,
    setShowSearch: (show) => set(() => ({ showSearch: show })),
}));
