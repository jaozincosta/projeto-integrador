import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductCardComponent } from './shared/card-produto/card-produto.component';
import { CategoriasComponent } from './shared/categorias/categorias.component';
import { MaisVendidosComponent } from './shared/mais-vendidos/mais-vendidos.component';
import { FavoritosComponent } from './shared/favoritos/favoritos.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    CategoriasComponent,
    MaisVendidosComponent,
    FavoritosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rotasEscondidas = [
    '/entrar',
    '/manutencao',
    '/registrar',
    '/favoritos',
    '/pagamento',
    '/produtostenis',
  ];

  constructor(private router: Router) {}

  isLayoutVisible(): boolean {
    return !this.rotasEscondidas.some((r) => this.router.url.startsWith(r));
  }

  public produtos = Array(10).fill({
    nome: 'Tênis Asics Gel',
    imagem: 'assets/img/asics.png',
    precoOriginal: 599.99,
    precoAtual: 379.99,
    parcelas: 'ou 6x de R$ 66,67',
    desconto: 33,
    freteGratis: true,
  });
}
