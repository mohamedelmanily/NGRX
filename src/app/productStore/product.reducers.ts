import { createReducer, on } from '@ngrx/store';
import { ProductState } from '../models/ProductState';
import {
    loadProducts,
    loadProductsFailure,
    loadProductsSuccess,
    addToCart,
    removeFromCart
} from './product.actions';

const initialState: ProductState = {
    products: [],
    cart: [],
    loading: false,
    error: null,
};
export const productReducer = createReducer(
    initialState,
    on(loadProducts, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),

    on(loadProductsSuccess, (state, { products }) => ({
        ...state,
        products,
        loading: false,
        error: null,
    })),

    on(loadProductsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),

    on(addToCart, (state, { product }) => ({ ...state, cart: [...state.cart, product] })),
    on(removeFromCart, (state, { productId }) => ({
        ...state,
        cart: state.cart.filter((product) => product.id !== productId),
    }))


);
