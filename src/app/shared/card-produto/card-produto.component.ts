import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  preco: number;
  id: any;
  quantidade: any;
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
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() produto!: Produto;
}
