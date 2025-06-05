import { create } from 'zustand';

const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;

const usePortfolioStore = create((set, get) => ({
  portfolios: [],
  portfolio: null,
  loading: false,
  error: null,
  fetchPortfolios: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${backendUri}/portfolios`);
      if (!res.ok) throw new Error('Failed to fetch portfolios');
      const data = await res.json();
      set({ portfolios: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  fetchPortfolioById: async (id) => {
    // Prevent repeated fetch for same id
    const state = get();
    if (state.portfolio && state.portfolio._id === id) return;
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${backendUri}/portfolio/id/${id}`);
      if (!res.ok) throw new Error('Failed to fetch portfolio');
      const data = await res.json();
      set({ portfolio: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default usePortfolioStore;