import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as S from './styles';
import { useState } from 'react';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;

    setSearchValue(target.value);
  };
  return (
    <S.Wrapper>
      <Typography variant="h3" gutterBottom>
        Address Search
      </Typography>

      <S.Search>
        <S.InputSearch type="text" name="search" value={searchValue} onChange={handleChange} />
        <S.IconWrapper type="button" onClick={() => console.log(searchValue, 'searchvalue')}>
          <SearchIcon />
        </S.IconWrapper>
      </S.Search>
    </S.Wrapper>
  );
};

export default SearchForm;
