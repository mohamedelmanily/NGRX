// request.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as RequestActions from './request.actions';

export interface RequestState {
  details: any | null;
  loading: boolean;
  error: any;
}

const initialState: RequestState = {
  details: null,
  loading: false,
  error: null,
};

export const requestReducer = createReducer(
  initialState,
  on(RequestActions.loadRequestDetails, (state) => ({...state,loading: true})),
  on(RequestActions.loadRequestDetailsSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    details: data
  })),
  on(RequestActions.loadRequestDetailsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
