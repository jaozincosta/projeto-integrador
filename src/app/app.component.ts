import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
>>>>>>> e539be40f9d46802624fba7987bdf09af03dcb45
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductCardComponent } from './shared/card-produto/card-produto.component';
import { CategoriasComponent } from './shared/categorias/categorias.component';
import { MaisVendidosComponent } from './shared/mais-vendidos/mais-vendidos.component';
import { NgIf } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    HeaderComponent,
    FooterComponent,
    ElementComponent
],
    ProductCardComponent,
    CategoriasComponent,
    MaisVendidosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarLayout = true;

<<<<<<< HEAD
  isLayoutVisible(): boolean {
  const rotasEscondidas = ['/entrar', '/manutencao', '/registrar', '/favoritos', '/produtostenis', '/carrinho'];
  return !rotasEscondidas.some(r => this.router.url.startsWith(r));
}
=======
  rotasEscondidas = ['/entrar', '/manutencao', '/registrar', '/pagamento'];

  produtos = Array(10).fill({
    nome: 'Tênis Asics Gel',
    imagem: 'assets/img/asics.png',
    precoOriginal: 599.99,
    precoAtual: 379.99,
    parcelas: 'ou 6x de R$ 66,67',
    desconto: 33,
    freteGratis: true,
  });

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.mostrarLayout = !this.rotasEscondidas.includes(
          event.urlAfterRedirects
        );
      });
  }
>>>>>>> e539be40f9d46802624fba7987bdf09af03dcb45
}
