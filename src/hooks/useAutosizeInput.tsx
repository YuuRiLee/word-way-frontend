import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { changeValue, changeWidth } from '../modules/autosizeInput';

export default function useAutosizeInput() {
  const AutosizeInputState = useSelector((state: RootState) => state.autosizeInput);
  const dispatch = useDispatch();

  const onChangeValue = useCallback((obj) => dispatch(changeValue(obj)), [dispatch]);
  const onChangeWidth = useCallback((obj) => dispatch(changeWidth(obj)), [dispatch]);
  return {
    AutosizeInputState,
    onChangeValue,
    onChangeWidth,
  };
}
