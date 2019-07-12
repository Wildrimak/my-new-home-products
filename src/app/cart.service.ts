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
    var url: string = 'http://www.mocky.io/v2/5d28dd972c0000cf2f3edc88';
    
     this.http.get(url).subscribe(res => {
     window.alert(res); 
  });
  }

}
