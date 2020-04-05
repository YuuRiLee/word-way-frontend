import { createAction } from 'typesafe-actions';

// 액션 type
export const CHANGE_VALUE = 'autosizeInput/CHANGE_VALUE';
export const CHANGE_WIDTH = 'autosizeInput/CHANGE_WIDTH';

// 액션 생성 함수
export const changeValue = createAction(CHANGE_VALUE)<any>();
export const changeWidth = createAction(CHANGE_WIDTH)<any>();
