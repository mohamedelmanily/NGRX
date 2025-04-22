import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../models/ProductState";

export const selectProductState = createFeatureSelector<ProductState>('product');

export const selectProducts=createSelector(
    selectProductState,
    (state) => state.products
)

export const selectCart=createSelector(
    selectProductState,
    (state) => state.cart
)
