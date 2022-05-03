import Head from 'next/head';
import { ReactElement } from 'react';
import FormSign from '../components/FormSign';
import LoginLayout from '../components/LoginLayout';

const Login = () => {
  return (
    <>
      <FormSign />
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
