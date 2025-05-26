import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { Produto } from '../../services/types/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produto[] = [];
  total$: Observable<number>;

  constructor(private carrinhoService: CarrinhoService) {
    this.total$ = this.carrinhoService.getTotal();
  }

  ngOnInit(): void {
    this.carrinhoService.getItens().subscribe((itens) => {
      this.carrinho = itens;
    });
  }

  alterarQuantidade(id: number, delta: number): void {
    this.carrinhoService.alterarQuantidade(id, delta).subscribe();
  }

  removerItem(id: number): void {
    this.carrinhoService.remover(id).subscribe();
  }

  finalizarCompra(): void {
    this.carrinhoService.limparCarrinho().subscribe(() => {
      alert('Compra finalizada com sucesso!');
      this.carrinho = [];
    });
  }

  trackById(index: number, item: Produto): number {
    return item.id;
  }
}
