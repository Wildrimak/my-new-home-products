import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component'

@Component({
  selector: 'app-produto',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutoComponent implements OnInit {

  private _nome: string;
  private _imagem: string;
  private _preco: Number;
  private _descricao: string
  private _usuario: UsuarioComponent

  constructor(nome: string, imagem: string, preco: Number, usuario: UsuarioComponent) {
    this._nome = nome;
    this._imagem = imagem;
    this._preco = preco;
    this._usuario = usuario;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get imagem(): string {
    return this.imagem;
  }

  public set imagem(imagem: string) {
    this.imagem = imagem;
  }

  public get preco(): Number {
    return this._preco;
  }

  public set preco(preco: Number) {
    this._preco = preco;
  }

  public get descricao(): string {
    return this.descricao;
  }

  public set descricao(descricao: string) {
    this._descricao = descricao;
  }

  public get usuario(): UsuarioComponent {
    return this.usuario;
  }

  public set usuario(usuario: UsuarioComponent) {
    this._usuario = usuario;
  }
  ngOnInit() {
  }

}