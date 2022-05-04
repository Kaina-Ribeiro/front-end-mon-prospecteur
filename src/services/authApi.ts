import Router from 'next/router';
import { AxiosResponse } from 'axios';
import api from './baseApi';

interface ILoginReturnProps extends AxiosResponse {
  data: {
    token: string;
    refresh_token: string;
    user: { name: string; email: string };
  };
  status: 200;
}

interface IErrorReturnProps extends AxiosResponse {
  data: {
    message: string;
    status: string;
  };
  status: 400;
}

export const authApi = {
  login: async (email: string, password: string, redirect?: string) => {
    try {
      const response = await api.post<ILoginReturnProps | IErrorReturnProps>('/login', {
        email,
        password,
      });

      if (redirect) {
        Router.push(redirect);
      }

      return response;
    } catch {
      return false;
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
