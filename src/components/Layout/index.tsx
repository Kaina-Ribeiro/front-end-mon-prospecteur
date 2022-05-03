import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav>Navbar</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
