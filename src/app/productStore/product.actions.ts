import { createAction, props } from "@ngrx/store";

export const loadProducts = createAction(
  "[Product] Load Products");
  
export const loadProductsSuccess = createAction(
  "[Product] Load Products Success",
  props<{ products: any[] }>()
);

export const loadProductsFailure = createAction(
  "[Product] Load Products Failure",
  props<{ error: any }>()
);

export const addToCart = createAction(
  "[Product] Add To Cart",
  props<{ product: any }>()
);
export const removeFromCart = createAction(
  "[Product] Remove From Cart",
  props<{ productId: number }>()
);