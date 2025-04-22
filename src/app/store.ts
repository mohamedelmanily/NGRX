import { Action, createReducer, on } from "@ngrx/store"
import { decrement, increment } from "./store/counter.actions";
// interface StoreInterface{
//     counter:Counter
// }
// interface Counter {
//     n:number
// }

// let intialState={
//     n:0
// }
// export function counterReducer(state=intialState,action:Action){
//     switch (action.type) {
//         case "increase":
//             return{
//                 n:state.n+1
//             }
//         case "decrease":
//             return{
//                 n:state.n-1
//             }
    
//         default:
//             return state;
//     }
// }
// ==============================================================================================
// ==============================================================================================
// export const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => state + 1),
//   on(decrement, (state) => state - 1)
// );