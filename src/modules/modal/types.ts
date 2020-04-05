import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ModalAction = ActionType<typeof actions>;

export interface Modal {
  show: boolean;
}

export type ModalState = Modal;
