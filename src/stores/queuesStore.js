import { create } from "zustand";

export default create((set) => ({
    queues: [],
    setQueues: (updatedQueues) => set(() => ({ queues: updatedQueues })),
}));
