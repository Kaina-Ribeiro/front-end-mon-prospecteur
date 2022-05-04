import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { searchApi } from '../../services/searchApi';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [search, setSearch] = useState([]);

  useEffect(() => {});

  const handleChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;

    setSearchValue(target.value);
  };

  const handleSearch = async () => {
    const response = await searchApi.search('Chemin');
    setSearch(response);
  };

  return (
    <S.Wrapper>
      <Typography variant="h3" gutterBottom>
        Address Search
      </Typography>

      <S.Search>
        <S.InputSearch type="text" name="search" value={searchValue} onChange={handleChange} />
        <S.IconWrapper type="button" onClick={() => handleSearch()}>
          <SearchIcon />
        </S.IconWrapper>
      </S.Search>

      <strong>{search.length} resultados encontrados</strong>
      {search.length &&
        search.map((item) => {
          return (
            <>
              <p>{item.address}</p>
            </>
          );
        })}
    </S.Wrapper>
  );
};

export default SearchForm;
