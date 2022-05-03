import { ReactNode } from 'react';
import Header from '../Header';
import * as S from './styles';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <S.Layout>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </S.Layout>
  );
};

export default Layout;
