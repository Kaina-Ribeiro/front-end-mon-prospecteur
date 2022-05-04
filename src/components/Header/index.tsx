import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../../hooks/Auth';
import * as S from './styles';

const Header = () => {
  const { signOut } = useAuth();

  return (
    <S.Wrapper>
      <S.WrapperImg>
        <Image src="/logo.png" alt="Logo" width={125} height={33} quality={100} />
      </S.WrapperImg>

      <S.NavLinks>
        <li>
          <Link href="#">
            <S.NavLink>Home</S.NavLink>
          </Link>
        </li>
        <li>
          <Link href="#">
            <S.NavLink>Projects</S.NavLink>
          </Link>
        </li>
        <li>
          <Link href="#">
            <S.NavLink>Services</S.NavLink>
          </Link>
        </li>
        <li>
          <Link href="#">
            <S.NavLink>Contact</S.NavLink>
          </Link>
        </li>
      </S.NavLinks>
      <Button variant="contained" color="primary" onClick={() => signOut()}>
        Logout
      </Button>
    </S.Wrapper>
  );
};

export default Header;
