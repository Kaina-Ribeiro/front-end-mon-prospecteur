import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as S from './styles';
import { useState } from 'react';
import { searchApi } from '../../services/searchApi';

interface ISearchProps {
  address: string;
}

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [search, setSearch] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target;

    setSearchValue(target.value);
  };

  const handleSearch = async () => {
    if (searchValue) {
      const response = await searchApi.search(searchValue);
      setSearch(response);
    } else {
      alert('You need to write something!');
    }
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

      <S.SearchItems>
        {search.length > 0 && <S.SearchResults>{search.length} results </S.SearchResults>}
        {search.length > 0 &&
          search.map((item: ISearchProps) => {
            return (
              <>
                <p>{item.address}</p>
              </>
            );
          })}
      </S.SearchItems>
    </S.Wrapper>
  );
};

export default SearchForm;
