import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  nome: string;
  imagem: string;
  precoOriginal: number;
  precoAtual: number;
  parcelas: string;
  desconto: number;
  destaque?: string;
  freteGratis?: boolean;
}

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class ProductCardComponent {
  @Input() produto!: Produto;
}
