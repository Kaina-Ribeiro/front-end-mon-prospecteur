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
    } catch {
      return false;
    }
  },
};
