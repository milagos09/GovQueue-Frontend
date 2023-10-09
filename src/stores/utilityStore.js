import { create } from "zustand";

export default create((set) => ({
    isLoading: false,
    setIsLoading: (loading) => set(() => ({ isLoading: loading })),
    toggleLoading: () => set(() => ({ isLoading: !this.isLoading })),
}));
