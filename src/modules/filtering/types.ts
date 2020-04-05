import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type FilteringAction = ActionType<typeof actions>;
type WordType = 'Noun' | 'Verb' | 'Adjective' | 'Article' | 'Pronoun' | 'Interjection' | 'Adverb' | 'Preposition';
type WordTypeKR = '명사' | '동사' | '형용사' | '관사' | '대명사' | '감탄사' | '부사' | '전치사';

export interface Filtering {
  searchAgainFlag: boolean;
  ExcludeKeywordFlag: boolean;
  selSpeechs: WordType[];
  exceptKeyword: string[];
}

export type FilteringState = Filtering;
