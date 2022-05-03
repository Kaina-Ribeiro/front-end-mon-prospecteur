import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;

  border: 1px solid black;
  height: 35px;
  padding-left: 0.5rem;
`;

export const InputSearch = styled.input`
  border: none;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const IconWrapper = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;
  background: #ff5722;
  border: none;
  width: 3rem;
  height: 100%;
  color: white;

  cursor: pointer;

  transition: all 0.2s;

  :hover {
    background-color: rgb(178, 60, 23);
  }

  :active {
    filter: opacity(0.8);
  }
`;
