import { ReactNode } from 'react';
import * as S from './styles';

interface ILoginLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: ILoginLayoutProps) => {
  return (
    <S.Layout>
      <S.Title variant="h2">Login</S.Title>
      <main>{children}</main>
    </S.Layout>
  );
};

export default LoginLayout;
