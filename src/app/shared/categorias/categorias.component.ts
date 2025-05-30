import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent {
  categorias = [
    { nome: 'Masculino', imagem: 'assets/img/tenisnike.png' },
    { nome: 'Feminino', imagem: 'assets/img/tenis6.png' },
    { nome: 'Infantil', imagem: 'assets/img/tenis12.png' }
  ];
}
