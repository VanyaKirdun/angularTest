import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { catsReducer, ICatState } from './filter.reducer';

export interface State {
  catsData: ICatState
}

export const reducers: ActionReducerMap<State> = {
  catsData: catsReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
