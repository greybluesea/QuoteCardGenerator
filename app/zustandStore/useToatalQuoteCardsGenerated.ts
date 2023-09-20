import { create } from "zustand";

interface TotalQuoteCardsStore {
  totalQuoteCards: number;
  setTotalQuoteCards: (totalQuoteCards: number) => void;
  TotalQuoteCardsAddOne: () => void;
}

const useTotalQuoteCardsGenerated = create<TotalQuoteCardsStore>((set) => ({
  totalQuoteCards: 0,
  setTotalQuoteCards: (totalQuoteCards) => set({ totalQuoteCards }),
  TotalQuoteCardsAddOne: () =>
    set((state) => ({ totalQuoteCards: state.totalQuoteCards + 1 })),
}));

export default useTotalQuoteCardsGenerated;
