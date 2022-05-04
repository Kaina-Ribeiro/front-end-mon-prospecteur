import styled from '@emotion/styled';
import { Button, TextField, Typography } from '@mui/material';

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 3rem;
`;

export const InputStyled = styled(TextField)({
  width: '100%',
});

export const ButtonLogin = styled(Button)`
  width: 100%;
`;

export const ForgotPass = styled(Typography)`
  align-self: flex-end;
  cursor: pointer;

  transition: color 0.2s;
  :hover {
    color: #00adb5;
  }
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2rem;
  width: 100%;
  /* align-items: center; */
  justify-content: space-between;
`;
