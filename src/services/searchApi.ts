import api from './baseApi';

export const searchApi = {
  search: async (address: string) => {
    try {
      const response = await api.get(`/address/${address}`);

      return response.data;
    } catch {
      return false;
    }
  },
};
