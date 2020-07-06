import { Reducer } from 'react';
import { StoreState, StoreAction } from './types';

export const initialState: StoreState = {
  posts: undefined,
  users: undefined, 
  categories: undefined
};

export const reducer: Reducer<StoreState, StoreAction> = (state: StoreState = initialState, action: StoreAction) => {
  switch(action.type) {      
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload
      }

    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      }

    default:
      return state;
  }
}