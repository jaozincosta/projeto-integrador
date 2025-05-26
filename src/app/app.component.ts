import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductCardComponent } from './shared/card-produto/card-produto.component';
import { CategoriasComponent } from './shared/categorias/categorias.component';
import { MaisVendidosComponent } from './shared/mais-vendidos/mais-vendidos.component';
import { NgIf } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  precoOriginal: number;
  precoAtual: number;
  parcelas: string;
  desconto: number;
  freteGratis: boolean;
  imagem: string;
  quantidade: number;
}

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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private rotasEscondidas = [
    '/entrar',
    '/manutencao',
    '/registrar',
    '/favoritos',
    '/pagamento',
    '/produtostenis',
    '/carrinho'
  ];

  mostrarLayout = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event.constructor.name === 'NavigationEnd'))
      .subscribe(() => {
        this.mostrarLayout = this.isLayoutVisible();
      });
  }

  isLayoutVisible(): boolean {
    return !this.rotasEscondidas.some((r) =>
      this.router.url.startsWith(r)
    );
  }

  produtos: Produto[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    nome: 'Tênis Asics Gel',
    precoOriginal: 599.99,
    precoAtual: 379.99,
    parcelas: 'ou 6x de R$ 66,67',
    desconto: 33,
    freteGratis: true,
    imagem: 'assets/img/asics.png',
    quantidade: 1,
  }));
}
