import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "./cart.actions";
import { Product } from "../models/Product";


export const initialState: Product[] = [];

export const cartReducer = createReducer(
  initialState,

  on(addToCart, (state, { product }) => {
    const existing = state.find(p => p.id === product.id);
    if (existing) {
      // زوّد الكمية
      return state.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p
      );
    } else {
      // أضف جديد
      return [...state, product];
    }
  }),

  on(removeFromCart, (state, { productId }) =>
    state.filter(p => p.id !== productId)
  )
);