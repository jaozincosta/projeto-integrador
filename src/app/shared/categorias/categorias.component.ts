import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent {
  categorias = [
    { nome: 'Tênis', imagem: 'assets/img/.png' },
    { nome: 'Masculino', imagem: 'assets/img/.png' },
    { nome: 'Feminino', imagem: 'assets/img/.png' },
    { nome: 'Infantil', imagem: 'assets/img/.png' },
    { nome: 'Esporte', imagem: 'assets/img/.png' },
    { nome: 'Casual', imagem: 'assets/img/.png' },
    { nome: 'Social', imagem: 'assets/img/.png' },
  ];
}
