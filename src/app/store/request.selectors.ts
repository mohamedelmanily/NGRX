// request.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RequestState } from './request.reducers';

export const selectRequestState = createFeatureSelector<RequestState>('request');

export const selectRequestDetails = createSelector(
  selectRequestState,
  (state) => state.details
);

export const selectRequestLoading = createSelector(
  selectRequestState,
  (state) => state.loading
);
export const selectRequestError= createSelector(
  selectRequestState,
  (state) => state.error
);
