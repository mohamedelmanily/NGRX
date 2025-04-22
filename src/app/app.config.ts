import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart.reduces';
import { counterReducer } from './store/counter.reducer';
import { requestReducer } from './store/request.reducers';
import { provideEffects } from '@ngrx/effects';
import { RequestEffects } from './store/request.effects';
import { provideHttpClient } from '@angular/common/http';
import { ProductEffects } from './productStore/product.effects';
import { productReducer } from './productStore/product.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideEffects(RequestEffects,ProductEffects),
    provideStore({
      // count: counterReducer,
      // cart: cartReducer,
      request: requestReducer,
      product:productReducer
    }),
  ],
};
