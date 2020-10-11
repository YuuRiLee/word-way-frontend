import IconButton from '../../atoms/iconButton';
import { ReactComponent as SearchIc } from '../../../assets/icons/search.svg';

import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

interface SearchBoxProp {
  className?: string;
  onSearch: (word: string) => void;
}

const SearchBox = (props: SearchBoxProp) => {
  const { onSearch, className } = props;
  const theme = useContext(ThemeContext);
  const [word, setWord] = useState<string>('');

  const changeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  return (
    <form className={className}>
      <StyledInput onChange={changeSearchInput} defaultValue={word} />
      {/* TODO: Icon을 변경해야 합니다. */}
      <IconButton icon={<SearchIc />} color={theme.colors.blue} variant="text" size="medium" />
      <IconButton
        icon={<SearchIc />}
        color={theme.colors.blue}
        variant="text"
        size="medium"
        onClick={() => onSearch(word)}
      />
    </form>
  );
};

const StyledSearchBox = styled(SearchBox)`
  display: flex;
  background: ${(props) => props.theme.colors.white};
  height: 40px;
  padding: 0 20px;
  border-radius: 48px;
  box-shadow: 0px 0px 16px 0px rgba(84, 84, 84, 0.1);
  color: ${(props) => props.theme.colors.g500};
  button {
    padding-right: 0;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  color: inherit;
  &:focus {
    outline: none;
  }
`;

export default StyledSearchBox;
