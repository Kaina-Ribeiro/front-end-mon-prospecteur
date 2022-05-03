import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100px;

  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

export const WrapperImg = styled.div`
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin-right: 1rem;
`;

export const NavLink = styled.a`
  cursor: pointer;

  transition: all 0.2s;
  :hover {
    color: #2ea3f2;
  }
`;
