import Button from '../../atoms/button';

import React, { useState } from 'react';

interface SearchBoxProp {
  onSearch: (word: string) => void;
}

const SearchBox = (props: SearchBoxProp) => {
  const { onSearch } = props;
  const [word, setWord] = useState<string>('');

  const changeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  return (
    <form>
      <input onChange={changeSearchInput} defaultValue={word} />
      <Button onClick={() => onSearch(word)}>검색</Button>
    </form>
  );
};

export default SearchBox;
