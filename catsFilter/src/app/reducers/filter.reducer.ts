import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { ICat } from "../module/cat";

export interface ICatState {
  catsData: ICat[],
}

export const getCatData = createAction('[FILTER] getCatData', props<{payload: {catsData: ICat[]}}>())

export const initialState: ICatState = {
  catsData: [],
}

export const catsReducer = createReducer(initialState,
  on(getCatData, (state, action)=>({
    ...state,
    catsData: action.payload.catsData,
  })
))

export const featureSelector = createFeatureSelector<ICatState>('catsData')

export const catsSelector = createSelector(featureSelector, state => Object.values(state.catsData));


