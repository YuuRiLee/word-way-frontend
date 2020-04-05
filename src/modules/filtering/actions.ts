import { createAction } from 'typesafe-actions';

// 액션 type
export const SEARCHAGAIN = 'filtering/SEARCHAGAIN';
export const SEL_SPEECH = 'filtering/SEL_SPEECH';
export const ADD_KEYWORD = 'filtering/ADD_KEYWORD';
export const DEL_KEYWORD = 'filtering/DEL_KEYWORD';
export const TOGGLE_EXCLUDE_KEYWORD = 'filtering/TOGGLE_EXCLUDE_KEYWORD';

// 액션 생성 함수
export const toggleSearchAgain = createAction(SEARCHAGAIN)<any>();
export const selSpeech = createAction(SEL_SPEECH)<number>();
export const addKeyword = createAction(ADD_KEYWORD)<number>();
export const delKeyword = createAction(DEL_KEYWORD)<number>();
export const toggleExcludeKeyword = createAction(TOGGLE_EXCLUDE_KEYWORD)<boolean>();
