import { create } from "zustand";

export default create((set) => ({
    queues: [],
    setQueues: (updatedQueues) => set(() => ({ queues: updatedQueues })),
    updateQueue: (updatedQueue) =>
        set((state) => {
            const index = state.queues.findIndex((q) => q.queue_id === updatedQueue.queue_id);
            if (index !== -1) {
                // Replace the item at the found index with updatedQueue
                state.queues[index] = updatedQueue;
            }
            return { queues: [...state.queues] };
        }),
}));
