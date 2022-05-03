import styled from '@emotion/styled';
import { Button, TextField, Typography } from '@mui/material';

export const Wrapper = styled.div`
  width: 400px;
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
  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
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
