import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  nome: string;
  imagem: string;
  precoOriginal: number;
  precoAtual: number;
  parcelas: string;
  desconto: number;
  estrelas: number;
  freteGratis?: boolean;
}

@Component({
  selector: 'app-mais-vendidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.css'],
})
export class MaisVendidosComponent {
  produtos: Produto[] = [
    {
      nome: 'Tênis Adidas Breaknet Feminino',
      imagem: 'assets/img/tenis1.png',
      precoOriginal: 349.99,
      precoAtual: 199.99,
      parcelas: 'ou 3x de R$ 66,66',
      desconto: 42,
      estrelas: 4.5,
      freteGratis: true,
    },
    {
      nome: 'Tênis Nike Air Zoom Upturn Masculino',
      imagem: 'assets/img/tenis2.png',
      precoOriginal: 649.99,
      precoAtual: 436.99,
      parcelas: 'ou 7x de R$ 65,71',
      desconto: 29,
      estrelas: 4.5,
      freteGratis: true,
    },
    {
      nome: 'Tênis Adidas Adizero Drive Rc Masculino',
      imagem: 'assets/img/tenis3.png',
      precoOriginal: 809.99,
      precoAtual: 809.99,
      parcelas: 'ou 10x de R$ 90,00',
      desconto: 0,
      estrelas: 4.5,
      freteGratis: true,
    },
  ];
}
