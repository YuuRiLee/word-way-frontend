import { combineReducers } from 'redux';
import filtering from './filtering';
import modal from './modal';
import autosizeInput from './autosizeInput';

const rootReducer = combineReducers({
  filtering,
  modal,
  autosizeInput,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
