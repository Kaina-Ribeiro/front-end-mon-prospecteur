import { ReactNode } from 'react';
import * as S from './styles';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <S.Layout>
      <nav>Navbar</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </S.Layout>
  );
};

export default Layout;