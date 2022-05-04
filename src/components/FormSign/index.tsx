import * as S from './styles';

interface FormSignProps {
  email: string;
  password: string;
  onChangeEmail: (e: React.InputHTMLAttributes<HTMLInputElement>) => void;
  onChangePassword: (e: React.InputHTMLAttributes<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormSign = ({ email, password, onChangeEmail, onChangePassword, onClick }: FormSignProps) => {
  return (
    <S.Wrapper>
      <S.Form>
        <S.InputStyled
          type="email"
          label="E-mail"
          variant="standard"
          value={email}
          onChange={onChangeEmail}
        />
        <S.InputStyled
          type="password"
          label="Password"
          variant="standard"
          value={password}
          onChange={onChangePassword}
        />

        <S.ForgotPass variant="caption">Forgot password?</S.ForgotPass>

        <S.ButtonLogin variant="contained" color="secondary" onClick={onClick}>
          LOGIN
        </S.ButtonLogin>
      </S.Form>
    </S.Wrapper>
  );
};

export default FormSign;
