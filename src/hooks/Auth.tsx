import { useRouter } from 'next/router';
import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { authApi } from '../services/authApi';

interface CredentialsProps {
  email: string;
  password: string;
}

interface UserData {
  name: string;
  email: string;
}

interface AuthData {
  token: string;
  refresh_token: string;
  user: UserData;
}

interface AuthContextData {
  token: string;
  user: UserData;
  signIn: (credentials: CredentialsProps, path?: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [data, setData] = useState<AuthData>(() => {
    if (typeof window !== 'undefined' && 'localStorage' in window && localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user') || '{}');
    }
    return {} as AuthData;
  });

  useEffect(() => {
    if ('localStorage' in window) {
      localStorage.setItem('user', JSON.stringify(data));
    }
  }, [data]);

  const signIn = useCallback(async ({ email, password }: CredentialsProps, path?: string) => {
    const response = await authApi.login(email, password, path);

    if (!response) {
      alert('Não foi possível logar');
      return;
    }

    if (response.status === 400) {
      alert(response.data.message);
      return;
    }

    setData({
      token: response.data.token,
      refresh_token: response.data.refresh_token,
      user: response.data.user,
    });

    window.location.href = path || '';
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
