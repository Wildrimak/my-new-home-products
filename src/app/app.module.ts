import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProdutoComponent } from './produtos/produtos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LinhaDoTempoComponent},
      {path: 'produtos', component: ProdutoComponent},
      {path: 'usuarios', component: UsuarioComponent},
      {path: 'pedidos', component: PedidoComponent},
      { path: 'cart', component: CartComponent}
    ])
  ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    UsuarioComponent,
    ProdutoComponent,
    PedidoComponent,
    LinhaDoTempoComponent,
    CartComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }
