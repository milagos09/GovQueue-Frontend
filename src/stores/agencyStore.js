import { create } from "zustand";

export default create((set) => ({
    agencies: [],
    setAgencies: (updatedAgencies) => set(() => ({ agencies: updatedAgencies })),
}));
