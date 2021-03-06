import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const Wrapper = styled.div`
  width: 600px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const InputStyled = styled(TextField)({
  width: '100%',
});

export const ButtonLogin = styled(Button)`
  width: 100%;
`;

export const CreateAccount = styled.a`
  font-size: 0.8rem;
  align-self: flex-end;
  cursor: pointer;

  transition: color 0.2s;
  :hover {
    color: #00adb5;
  }
`;
