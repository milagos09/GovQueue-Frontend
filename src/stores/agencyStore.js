import { create } from "zustand";

export default create((set) => ({
    agencies: [],
    setAgencies: (updatedAgencies) => set(() => ({ agencies: updatedAgencies })),
    updateAgency: (updatedAgency) =>
        set((state) => {
            const index = state.agencies.findIndex((a) => a.agency_id === updatedAgency.agency_id);
            if (index !== -1) {
                // Replace the item at the found index with updatedQueue
                state.agencies[index] = updatedAgency;
            }
            return { agencies: [...state.agencies] };
        }),
}));
