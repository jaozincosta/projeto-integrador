import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CarrosselComponent } from './shared/carrossel/carrossel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ElementComponent } from './element/element.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    HeaderComponent,
    CarrosselComponent,
    FooterComponent,
    ElementComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public router: Router) {}

  isLayoutVisible(): boolean {
    const rotasEscondidas = ['/entrar', '/manutencao', '/registrar'];
    return !rotasEscondidas.includes(this.router.url);
  }
}
