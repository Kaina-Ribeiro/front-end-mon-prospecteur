import Head from 'next/head';
import { ReactElement, useCallback, useState } from 'react';
import FormSign from '../components/FormSign';
import LoginLayout from '../components/LoginLayout';
import { useAuth } from '../hooks/Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleChangeEmail = useCallback(async (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setEmail(String(e.currentTarget.value));
  }, []);

  const handleChangePassword = useCallback(
    async (e: React.InputHTMLAttributes<HTMLInputElement>) => {
      setPassword(String(e.currentTarget.value));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      signIn({ email, password });
    },
    [email, password, signIn],
  );

  return (
    <>
      <FormSign
        email={email}
        password={password}
        onChangeEmail={handleChangeEmail}
        onChangePassword={handleChangePassword}
        onClick={handleSubmit}
      />
    </>
  );
};

Login.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginLayout>{page}</LoginLayout>
    </>
  );
};

export default Login;
