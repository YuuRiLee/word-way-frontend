import React from 'react';
import { RouteComponentProps } from 'react-router';
import Button from '../components/button';
import Modal from '../components/organisms/modal';
import useModal from '../hooks/useModal';

const HomePage: React.FC<RouteComponentProps> = (props) => {
  function searchWord() {
    const url = 'search';
    props.history.push(url);
  }

  const { onToggleModal} = useModal();
  return (
    <>
      <form>
        <input />
        <Button onClick={searchWord}>검색</Button>
      </form>
      <Button onClick={onToggleModal}>필터링</Button>
      <Modal></Modal>
    </>
  );
};

export default HomePage;
