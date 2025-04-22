import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment', props<{ amount: number }>());
export const decrement = createAction('[Counter] Decrement', props<{ amount: number }>());
export const multiply = createAction("multiply", props<{ amount: number }>())



export const action = createAction('actionType', props<{ mm: number }>())