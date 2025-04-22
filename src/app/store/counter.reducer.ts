import { createReducer, on } from '@ngrx/store';
import { increment, decrement, multiply, action } from './counter.actions';

export const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, { amount }) => state + amount),
  on(decrement, (state, { amount }) => state - amount),
  on(multiply, (state, { amount }) => state * amount),
  on(action, (state, { mm }) => state + mm)
);

