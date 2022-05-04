import Router from 'next/router';
import api from './baseApi';

type LoginReturnProps = {
  token: string;
  refresh_token: string;
  user: { name: string; email: string };
};

export const authApi = {
  login: async (email: string, password: string) => {
    try {
      const { status, data } = await api.post<LoginReturnProps>('/login', {
        email,
        password,
      });

      if (status === 400) {
        alert(data.message);
        return;
      }

      return data;
    } catch {
      alert('Não foi possível fazer a conexão');
      return;
    }
  },

  createUser: async (email: string, password: string, redirect?: string) => {
    try {
      const response = await api.post('/login', { email, password });

      if (redirect) {
        Router.push(redirect);
      }
      return response;
    } catch {
      return false;
    }
  },
};
