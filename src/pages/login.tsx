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
      <LoginLayout>{page}</LoginLayout>
    </>
  );
};

export default Login;
