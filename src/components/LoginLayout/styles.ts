import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const Layout = styled(Container)`
  height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;
