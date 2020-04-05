import { createAction } from 'typesafe-actions';

// 액션 type
export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';

// 액션 생성 함수
export const toggleModal = createAction(TOGGLE_MODAL)();
