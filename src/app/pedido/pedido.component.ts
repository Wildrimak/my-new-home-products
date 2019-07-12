import { Component, OnInit } from '@angular/core';
import {ProdutoComponent} from '../produtos/produtos.component'
import {UsuarioComponent} from '../usuario/usuario.component'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  private _produto : ProdutoComponent;
  private _usuario_comprador : UsuarioComponent;
  private _usuario_vendedor : UsuarioComponent;
  private _data_da_compra : Date;
  private _foi_pago : Boolean

  constructor(produto : ProdutoComponent, comprador : UsuarioComponent,   vendedor : UsuarioComponent) {
    this._produto = produto;
    this._usuario_comprador = comprador;
    this._usuario_vendedor = vendedor;
    this._foi_pago = false;
   }

  public get produto(): ProdutoComponent {
     return this._produto;
  }

  public get usuario_comprador(): UsuarioComponent {
     return this._usuario_comprador;
  }

  public get usuario_vendedor(): UsuarioComponent {
     return this._usuario_vendedor;
  }

  public get data_da_compra(): Date {
    return this._data_da_compra;
  }

  public get foi_pago(): Boolean {
    return this._foi_pago;
  }

  public set foi_pago(foi_pago : Boolean){
    this._foi_pago = foi_pago;
  }

  ngOnInit() {
  }

}