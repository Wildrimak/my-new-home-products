import { Component, OnInit } from '@angular/core';
import { produtos } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  produtos_pra_venda: any[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private http: HttpClient
  ) {
      this.produtos_pra_venda = this.cartService.getItems();
   }

  addToCart(produto) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(produto);
  }

  ngOnInit() {
    this.http.get('https://www.mocky.io/v2/5d28f6c62c0000cd2f3edce3')
      .subscribe(data => {
        this.produtos_pra_venda = data['results'];
      });
  }

}