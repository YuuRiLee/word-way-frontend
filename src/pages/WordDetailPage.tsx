import React from 'react';
import { RouteComponentProps } from 'react-router';

interface WordDetailProps {
  wordId: string;
}

const WordDetailPage: React.FC<RouteComponentProps<WordDetailProps>> = (props) => {
  const { wordId } = props.match.params;
  return <div>WordDetail Page {wordId}</div>;
};

export default WordDetailPage;
