import { ModalState, ModalAction } from './types';
import { createReducer } from 'typesafe-actions';
import { TOGGLE_MODAL } from './actions';

const initialState: ModalState = {
  show: true,
};

const Modal = createReducer<ModalState, ModalAction>(initialState, {
  [TOGGLE_MODAL]: (state) => ({ show: !state.show }),
});
export default Modal;
