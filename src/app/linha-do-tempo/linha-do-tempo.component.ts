import { Component, OnInit } from '@angular/core';
import { produtos } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  produtos_pra_venda = produtos;

  addToCart(produto) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(produto);
  }

  ngOnInit() {
  }

}