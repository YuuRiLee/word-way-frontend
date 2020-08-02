import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { ArrayParam, useQueryParams } from 'use-query-params';

import SearchBox from '../components/molecules/searchBox';
import Card from '../components/molecules/card';

import { request } from '../utils/requests';
import { CardModel } from '../utils/types';

type WordResponse = {
  id: string;
  contents: string;
  part: string;
  related_pronunciations: string[];
};

type PronunciationResponse = {
  id: string;
  pronunciation: string;
  words: WordResponse[];
  related_pronunciations: string[];
};

interface WordListProps {
  searchWord: string;
}

const WordListPage: React.FC<RouteComponentProps<WordListProps>> = (props) => {
  const [cards, setCards] = useState<CardModel[] | undefined>();
  const [query, _] = useQueryParams({
    words: ArrayParam,
  });

  const gotoDetail = () => {
    const url = '/detail';
    props.history.push(url);
  };

  const onSearch = (word: string) => {
    console.log('update query string');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await request('/api/words/', 'get');
        const cardResponses: CardModel[] = res.data.map((data: PronunciationResponse) => {
          const words = data.words.map((wordData) => {
            return {
              id: wordData.id,
              contents: wordData.contents,
              part: wordData.part,
              relatedPronunciations: wordData.related_pronunciations,
            };
          });
          return {
            words,
            id: data.id,
            pronunciation: data.pronunciation,
            relatedPronunciations: data.related_pronunciations,
          };
        });
        setCards(cardResponses);
      } catch {
        props.history.push('/'); // FIXME 실패시 모달을 띄워줘야 함.
      }
    };
    fetchData();
  }, [props.history]);

  return (
    <div>
      <SearchBox onSearch={onSearch} />
      검색어: <div onClick={gotoDetail}> {query.words} </div>
      {cards ? cards.map((card) => <Card data={card} />) : <div>로딩중</div>}
    </div>
  );
};

export default WordListPage;
