import { Typography } from '@mui/material';
import Link from 'next/link';
import * as S from './styles';

interface FormSignProps {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: any) => void;
}

const FormSign = ({ email, password, onChangeEmail, onChangePassword, onClick }: FormSignProps) => {
  return (
    <S.Wrapper>
      <Typography variant="h2" gutterBottom>
        Login
      </Typography>
      <S.Form onSubmit={onClick}>
        <S.InputStyled
          required
          type="email"
          label="E-mail"
          variant="standard"
          value={email}
          onChange={onChangeEmail}
        />
        <S.InputStyled
          required
          type="password"
          label="Password"
          variant="standard"
          value={password}
          onChange={onChangePassword}
        />

        <Link href="/register">
          <S.CreateAccount>Create an accout?</S.CreateAccount>
        </Link>
        <S.ButtonLogin type="submit" variant="contained" color="primary">
          LOGIN
        </S.ButtonLogin>
      </S.Form>
    </S.Wrapper>
  );
};

export default FormSign;
