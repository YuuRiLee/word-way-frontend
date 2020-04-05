import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { toggleSearchAgain, selSpeech, addKeyword, toggleExcludeKeyword } from '../modules/filtering';
import { useCallback } from 'react';

export default function useFiltering() {
  const FilteringState = useSelector((state: RootState) => state.filtering);
  const dispatch = useDispatch();

  const onToggleSearchAgain = useCallback((e) => dispatch(toggleSearchAgain(e)), [dispatch]);
  const onSelSpeech = useCallback((i: number) => dispatch(selSpeech(i)), [dispatch]);
  const onAddKeyword = useCallback((diff: number) => dispatch(addKeyword(diff)), [dispatch]);
  const onToggleExcludeKeyword = useCallback((flag) => dispatch(toggleExcludeKeyword(flag)), [dispatch]);

  return {
    FilteringState,
    onToggleSearchAgain,
    onToggleExcludeKeyword,
    onSelSpeech,
    onAddKeyword,
  };
}
