import { AxiosResponse } from 'axios';
import api from './baseApi';

type LoginReturnProps = {
  token: string;
  refresh_token: string;
  user: { name: string; email: string };
};

type ErrorReturnProps = {
  status: string;
  message: string;
};

export const authApi = {
  login: async (email: string, password: string) => {
    try {
      const { data } = await api.post<LoginReturnProps>('/login', {
        email,
        password,
      });

      return data;
    } catch {
      return;
    }
  },

  createUser: async (
    name: string,
    password: string,
    email: string,
    scholarity: string,
    gender: string,
  ) => {
    try {
      const response = await api.post('/users', { name, password, email, scholarity, gender });

      return response;
    } catch (err: any) {
      return err.response as AxiosResponse<ErrorReturnProps>;
    }
  },
};
