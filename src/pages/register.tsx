import { SelectChangeEvent } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import LoginLayout from '../components/LoginLayout';
import RegisterForm from '../components/RegisterForm';
import { authApi } from '../services/authApi';
import { useRouter } from 'next/router';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [scholarity, setScholarity] = useState('');
  const router = useRouter();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(String(e.currentTarget.value));
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(String(e.currentTarget.value));
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const onChangeGender = (event: SelectChangeEvent) => {
    setGender((event.target as HTMLInputElement).value);
  };

  const onChangeScholarity = (event: SelectChangeEvent) => {
    setScholarity(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await authApi.createUser(name, password, email, scholarity, gender);

    if (response.status === 400) {
      alert(response.data.message);
      return;
    }

    if (response.status !== 200 && response.status !== 201) {
      alert('Erro inesperado');
      return;
    }

    alert('Usuário criado com sucesso!');

    router.push({
      pathname: '/',
    });
  };

  return (
    <>
      <RegisterForm
        name={name}
        password={password}
        email={email}
        scholarity={scholarity}
        gender={gender}
        onChangeName={onChangeName}
        onChangeGender={onChangeGender}
        onChangeScholarity={onChangeScholarity}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Register;

Register.getLayout = (page: React.ReactElement) => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <LoginLayout>{page}</LoginLayout>
    </>
  );
};
