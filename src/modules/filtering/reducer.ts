import { FilteringState, FilteringAction } from './types';
import { createReducer } from 'typesafe-actions';
import { SEARCHAGAIN, SEL_SPEECH, ADD_KEYWORD, DEL_KEYWORD, TOGGLE_EXCLUDE_KEYWORD } from './actions';

const initialState: FilteringState = {
  searchAgainFlag: false,
  ExcludeKeywordFlag: false,
  selSpeechs: [],
  exceptKeyword: [],
};

const filtering = createReducer<FilteringState, FilteringAction>(initialState, {
  [SEARCHAGAIN]: (state, action) => {
    state.searchAgainFlag = action.payload.target.checked;
    return state;
  },
  [SEL_SPEECH]: (state, action) => {
    return state;
  },
  [TOGGLE_EXCLUDE_KEYWORD]: (state, action) => {
    const a = action.payload;
    return {
      ...state,
      ExcludeKeywordFlag: a,
    };
  },
  [ADD_KEYWORD]: (state, action) => {
    return state;
  },
  [DEL_KEYWORD]: (state, { payload: id }) =>
    state,
});
export default filtering;
