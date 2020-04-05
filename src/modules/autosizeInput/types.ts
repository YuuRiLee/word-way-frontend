import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AutosizeInputAction = ActionType<typeof actions>;

export interface AutosizeInput {
  value: string;
  inputWidth: number;
}

export type AutosizeInputState = AutosizeInput;
