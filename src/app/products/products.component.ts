import { Component, OnInit } from '@angular/core';
import { BranchRequestService } from '../services/BranchRequestService';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectProducts, selectProductState } from '../productStore/product.selectors';
import { Observable } from 'rxjs';
import { addToCart, loadProducts } from '../productStore/product.actions';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  {
  products!:Observable<any[]>;

  constructor(private store:Store) {
    this.store.dispatch(loadProducts());
    this.products=  this.store.select(selectProducts)
  }

  getStarRating(rate: number): number {
    return Math.round(rate);
  }
  
  addToCart(product: any) {
    this.store.dispatch(addToCart({ product }));
    console.log('Product added to cart:', product);
    
  }

}
