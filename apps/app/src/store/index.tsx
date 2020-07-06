import { Reducer } from 'react';
import { useReducerAsync, AsyncActionHandlers } from 'use-reducer-async';

import { StoreState, StoreAction } from './types';
import { initialState, reducer } from './reducer';

export const useStore = 
  (asyncHandlers: AsyncActionHandlers<Reducer<StoreState, StoreAction>, any>) => 
    useReducerAsync(reducer, initialState, asyncHandlers);