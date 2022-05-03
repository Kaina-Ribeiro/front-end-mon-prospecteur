import * as S from './styles';

const FormSign = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <S.InputStyled label="E-mail" variant="standard" />
        <S.InputStyled label="Password" variant="standard" />

        <S.ForgotPass variant="caption">Forgot password?</S.ForgotPass>

        <S.ButtonLogin variant="contained" color="secondary">
          LOGIN
        </S.ButtonLogin>
      </S.Form>
    </S.Wrapper>
  );
};

export default FormSign;
