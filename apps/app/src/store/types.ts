import { Dispatch } from 'react';

export interface StoreAction {
  type: string;
  payload?: any
}

export interface StoreState {
  posts?: Array<any>;
  users?: Array<any>;
  categories?: Array<any>;
}