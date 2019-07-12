import { Component, OnInit } from '@angular/core';
import {ProdutoComponent} from '../produtos/produtos.component'

enum Role {
  Comprador, Vendedor
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  private _nome: String;
  private _imagem: String;
  private _email: String;
  private _senha: String;
  private _role: Role;
  private _produtos_comprados: Array<ProdutoComponent>;
  private _produtos_para_venda: Array<ProdutoComponent>;

  constructor(nome: String, email: String, senha: String) {
    this._nome = nome;
    this._email = email;
    this._senha = senha;
    this._role = Role.Comprador;
    this._produtos_comprados = [];
    this._produtos_para_venda = [];
  }

  public get nome(): String {
    return this._nome;
  }

  public set nome(nome: String) {
    this._nome = nome;
  }

  public get imagem() : String {
    return this.imagem;
  }

  public set imagem(imagem: String){
    this.imagem = imagem;
  }

  public get email(): String {
    return this._email;
  }

  public set email(email: String) {
    this._email = email;
  }

  public get senha(): String {
      return this._senha;
  }

  public set senha(senha: String) {
    this._senha = senha;
  }

  public get role(): Role {
      return this._role;
  }

  public set role(role: Role) {
    this._role = role;
  }

  public get produtos_comprados() : Array<ProdutoComponent> {
    return this._produtos_comprados;
  }

  public adicionar_produto_comprado(produto : ProdutoComponent) {
    this._produtos_comprados.push(produto);
  }

  public get produtos_para_venda() : Array<ProdutoComponent> {
    return this._produtos_para_venda;
  }

  public adicionar_produto_para_venda(produto : ProdutoComponent) {
    this._produtos_para_venda.push(produto);
  }

  ngOnInit() {
  }

}