import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../services/types/types'; 

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produto[] = [];
  quantidade: Produto [] = []
  total: number = 0;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho() {
    this.produtosService.listarCarrinho().subscribe(dados => {
      this.carrinho = dados;
      this.calcularTotal();
    });
  }

  alterarQuantidade(id: number, delta: number): void {
    const item = this.carrinho.find(p => p.id === id);
    if (!item) return;

    const novaQuantidade = item.quantidade + delta;

    if (novaQuantidade <= 0) {
      this.removerItem(id);
    } else {
      this.produtosService.atualizarCarrinho(id, { quantidade: novaQuantidade }).subscribe(() => {
        item.quantidade = novaQuantidade;
        this.calcularTotal();
      });
    }
  }

  removerItem(id: string): void {
    this.produtosService.removerDoCarrinho(id).subscribe(() => {
      this.carregarCarrinho();
    });
  }

  calcularTotal(): void {
    this.total = this.carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  }
}
