import React from 'react';
import { RouteComponentProps } from 'react-router';

import SearchBox from '../components/molecules/searchBox';

const HomePage: React.FC<RouteComponentProps> = (props) => {
  const searchWord = (word: string) => {
    props.history.push(`/search?words=${word}`);
  };

  return <SearchBox onSearch={searchWord} />;
};

export default HomePage;
