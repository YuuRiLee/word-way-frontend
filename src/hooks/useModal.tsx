import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { toggleModal } from '../modules/modal';

export default function useModal() {
  const ModalState = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const onToggleModal = useCallback(() => dispatch(toggleModal()), [dispatch]);

  return {
    ModalState,
    onToggleModal,
  };
}
