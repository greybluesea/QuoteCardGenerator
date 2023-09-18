import { create } from "zustand";

interface Store {
  modalIsOpen: boolean;
  totalQuotes: number;
  openModal: () => void;
  closeModal: () => void;
  TotalQuotesAddOne: () => void;
}

const useStore = create<Store>((set) => ({
  modalIsOpen: false,
  totalQuotes: 0,
  openModal: () => set({ modalIsOpen: true }),
  closeModal: () => set({ modalIsOpen: false }),
  TotalQuotesAddOne: () =>
    set((state) => ({ totalQuotes: state.totalQuotes + 1 })),
}));

export default useStore;
