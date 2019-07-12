import { Injectable } from '@angular/core';
import { ProdutoComponent } from './produtos/produtos.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items = Array<ProdutoComponent>();

  constructor(
    private http: HttpClient
  ) { 

  }

  addToCart(produto : ProdutoComponent) {
    this.items.push(produto);    
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('http://www.mocky.io/v2/5d28c9d32c00005d693edc1c');
  }

}
