import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// request.service.ts
@Injectable({
    providedIn: 'root',
  })
  export class BranchRequestService {
    constructor(private http: HttpClient) {}
    
    getRequestDetails(id: number): Observable<any> {
      return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
    }
    
    getAllProducts(): Observable<any[]> {
      return this.http.get<any[]>(`https://fakestoreapi.com/products`);
    }
    removeFromCart(productId: any) {
        return this.http.delete(`https://fakestoreapi.com/products`);
    }
  }
  