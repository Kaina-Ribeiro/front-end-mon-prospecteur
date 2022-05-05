import Cookies from 'js-cookie';
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
  signIn: (credentials: CredentialsProps) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = Cookies.get(process.env.TOKEN_MON as string) || '';
    const refresh_token = Cookies.get(process.env.REFRESH_TOKEN_MON as string) || '';
    const name = Cookies.get(process.env.USER_MON as string) || '';
    const email = Cookies.get(process.env.EMAIL_MON as string) || '';

    return {
      token,
      refresh_token,
      user: {
        name,
        email,
      },
    };
  });

  useEffect(() => {
    Cookies.set(process.env.TOKEN_MON as string, data.token || '');
    Cookies.set(process.env.REFRESH_TOKEN_MON as string, data.refresh_token || '');
    Cookies.set(process.env.USER_MON as string, data.user?.name || '');
    Cookies.set(process.env.EMAIL_MON as string, data.user?.email || '');
  }, [data]);

  const signIn = useCallback(async ({ email, password }: CredentialsProps) => {
    const userInfo = await authApi.login(email, password);

    if (!userInfo) {
      alert('Não foi possível fazer o login');
      return;
    }

    setData({
      token: userInfo.token || '',
      refresh_token: userInfo.refresh_token || '',
      user: {
        name: userInfo.user.name || '',
        email: userInfo.user.email || '',
      },
    });
  }, []);

  const signOut = useCallback(() => {
    Cookies.remove(process.env.TOKEN_MON as string);
    Cookies.remove(process.env.REFRESH_TOKEN_MON as string);
    Cookies.remove(process.env.USER_MON as string);
    Cookies.remove(process.env.EMAIL_MON as string);
    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, user: data.user, signIn, signOut }}>
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
