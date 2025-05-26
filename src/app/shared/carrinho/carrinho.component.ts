import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { Produto } from '../../services/types/types'; // ajuste para o tipo correto

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produto[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinhoService.getItens().subscribe((itens) => {
      this.carrinho = itens;
    });

    this.carrinhoService.getTotal().subscribe((valor) => {
      this.total = valor;
    });
  }

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

  trackById(index: number, item: Produto): number {
    return item.id;
  }
}
