import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { Produto } from '../card-produto/card-produto.component';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
carrinho: any;
  constructor(public carrinhoService: CarrinhoService) {}

  alterarQuantidade(id: number, delta: number): void {
    this.carrinhoService.alterarQuantidade(id, delta);
  }

  removerItem(id: number): void {
    this.carrinhoService.remover(id);
  }

  finalizarCompra(): void {
    this.carrinhoService.limparCarrinho();
    alert('Compra finalizada com sucesso!');
  }

  // get carrinho() {
  //   return this.carrinhoService.;
  // }

  get total() {
    return this.carrinhoService.total;
  }
}