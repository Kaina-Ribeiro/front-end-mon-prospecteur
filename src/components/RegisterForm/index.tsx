import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

import * as S from './styes';

interface IRegisterProps {
  name: string;
  password: string;
  email: string;
  scholarity: string;
  gender: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeGender: (e: SelectChangeEvent) => void;
  onChangeScholarity: (e: SelectChangeEvent) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = ({
  name,
  password,
  email,
  scholarity,
  gender,
  onChangeName,
  onChangeGender,
  onChangeScholarity,
  onChangeEmail,
  onChangePassword,
  handleSubmit,
}: IRegisterProps) => {
  return (
    <S.Wrapper>
      <Typography variant="h2" gutterBottom>
        Register
      </Typography>
      <S.Form onSubmit={handleSubmit}>
        <S.InputStyled
          required
          type="text"
          label="Full Name"
          variant="standard"
          value={name}
          onChange={onChangeName}
        />

        <S.InputsWrapper>
          <S.InputStyled
            required
            type="email"
            label="E-mail"
            variant="standard"
            onChange={onChangeEmail}
            value={email}
          />

          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel>Scholarity</InputLabel>
            <Select value={scholarity} onChange={onChangeScholarity} label="Age">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'elementary'}>elementary</MenuItem>
              <MenuItem value={'high'}>high </MenuItem>
              <MenuItem value={'middle'}>middle </MenuItem>
            </Select>
          </FormControl>
        </S.InputsWrapper>

        <FormControl>
          <FormLabel required>Gender</FormLabel>

          <RadioGroup row name="controlled-radio" value={gender} onChange={onChangeGender}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <S.InputsWrapper>
          <S.InputStyled
            required
            type="password"
            label="Password"
            variant="standard"
            onChange={onChangePassword}
            value={password}
          />
        </S.InputsWrapper>

        <S.ButtonLogin type="submit" variant="contained" color="primary">
          Register
        </S.ButtonLogin>
      </S.Form>
    </S.Wrapper>
  );
};

export default RegisterForm;
