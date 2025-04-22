import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { action, decrement, increment, multiply } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BranchRequestsComponent } from "./branch-requests/branch-requests.component";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, BranchRequestsComponent, ProductsComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment({amount:5}));
  }

  decrement() {
    this.store.dispatch(decrement({amount:5}));
  }
  multiply(){
    this.store.dispatch(multiply({amount:100}))
  }
  operation(){
    this.store.dispatch(action({mm:88}))
  }
}
