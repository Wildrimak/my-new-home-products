import { Injectable } from '@angular/core';
import { ProdutoComponent } from './produtos/produtos.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items = Array<ProdutoComponent>();

  constructor() { 

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

}
