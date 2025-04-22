import { createAction, props } from '@ngrx/store';
// import { RequestDetails } from '../models/request.model';

export const loadRequestDetails = createAction(
  '[Request] Load Details',
  props<{ requestId: number }>()
);

export const loadRequestDetailsSuccess = createAction(
  '[Request] Load Details Success',
  props<{ data: any }>()
);

export const loadRequestDetailsFailure = createAction(
  '[Request] Load Details Failure',
  props<{ error: any }>()
);

