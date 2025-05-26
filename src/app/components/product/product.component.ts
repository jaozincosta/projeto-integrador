import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarrinhoService } from '../../services/carrinho.service';
import { Produto } from '../../services/types/types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  sidebarActive = false;
  quantity = 0;

  product = {
    id: 1,
    name: 'Adidas Adizero Takumi Sen',
    image: 'assets/img/tenis2.png',
    company: 'SNEAKER COMPANY',
    description: 'O Adidas Adizero Takumi Sen 10 é um tênis leve (185g no tamanho 40)...',
    oldPrice: 980.00,
    price: 490.00,
    color: 'Preto'
  };

  constructor(private carrinhoService: CarrinhoService) {}

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  adicionarAoCarrinho() {
    if (this.quantity > 0) {
      const produto: Produto = {
        id: this.product.id,
        nome: this.product.name,
        imagem: this.product.image,
        preco: this.product.price,
        quantidade: this.quantity,
        cor: this.product.color,
        estoque: 0,
        descricao: '',
        preco_antigo: 0,
        avaliacao: '',
        genero: ''
      };

      this.carrinhoService.adicionar(produto);
      this.quantity = 0; // Resetar após adicionar, opcional
      alert('Produto adicionado ao carrinho!');
    }
  }

  formatPrice(value: number): string {
    return `R$ ${value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }
}
