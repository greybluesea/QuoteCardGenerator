import { create } from "zustand";

interface ModalStore {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useModal = create<ModalStore>((set) => ({
  modalIsOpen: false,
  openModal: () => set({ modalIsOpen: true }),
  closeModal: () => set({ modalIsOpen: false }),
}));

export default useModal;
