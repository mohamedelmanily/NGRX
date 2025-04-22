import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { selectCart } from '../productStore/product.selectors';
import { removeFromCart } from '../productStore/product.actions';
// import { removeFromCart, updateQuantity } from '../productStore/product.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart$: Observable<any[]>;

  constructor(private store: Store) {
    this.cart$ = this.store.select(selectCart);
  }
  
  removeItem(productId: number): void {
    this.store.dispatch(removeFromCart({ productId }));
    console.log('Product removed from cart:', productId);
    
    // this.cart$ = this.store.select(selectCart);
  }

  // updateQuantity(productId: number, change: number): void {
  //   this.store.dispatch(updateQuantity({ productId, change }));
  // }

  calculateTotal(items: any[]): number {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}