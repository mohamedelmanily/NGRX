import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BranchRequestService } from "../services/BranchRequestService";
import { loadProducts, loadProductsFailure, loadProductsSuccess, removeFromCart } from "./product.actions";
import { catchError, map, mergeMap, Observable, of } from "rxjs";


@Injectable()
export class ProductEffects {
    loadProducts$: any;
    removeFromCart$: any;
    constructor(private actions$: Actions, private productService: BranchRequestService) {

            this.loadProducts$ = createEffect(() =>
                this.actions$.pipe(
                ofType(loadProducts),
                mergeMap(() =>
                    this.productService.getAllProducts().pipe(
                    map(products => loadProductsSuccess({ products })),
                    catchError(error => of(loadProductsFailure({ error })))
                    )
                )
                )
            );
            this.removeFromCart$ = createEffect(() =>
                this.actions$.pipe(
                ofType(removeFromCart),
                mergeMap((action:any) =>
                    this.productService.removeFromCart(action.productId).pipe(
                    map(() => ({ type: '[Cart] Remove Success' })),
                    catchError(error => of(loadProductsFailure({ error })))
                    )
                )
                ))
            
            }
        
}