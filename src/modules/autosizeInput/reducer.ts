import { AutosizeInputState, AutosizeInputAction } from './types';
import { createReducer } from 'typesafe-actions';
import { CHANGE_VALUE, CHANGE_WIDTH } from './actions';

const initialState: AutosizeInputState = {
  value: '',
  inputWidth: 40,
};

const AutosizeInput = createReducer<AutosizeInputState, AutosizeInputAction>(initialState, {
  [CHANGE_VALUE]: (state, action) => {
    return {
      ...state,
      value: action.payload.value,
    };
  },
  [CHANGE_WIDTH]: (state, action) => {
    return {
      ...state,
      inputWidth: action.payload.inputWidth,
    };
  },
});
export default AutosizeInput;
