import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

@Component({
  selector: 'app-manutencao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css'],
})
export class ManutencaoComponent implements OnInit {
  produtos: Produto[] = [];
  novoProduto: Produto = this.resetProduto();
  editandoId: number | null = null;
  idCounter = 1;

  ngOnInit(): void {
    const produtosSalvos = localStorage.getItem('produtos');
    if (produtosSalvos) {
      this.produtos = JSON.parse(produtosSalvos);
      const ids = this.produtos.map((p) => p.id);
      this.idCounter = ids.length > 0 ? Math.max(...ids) + 1 : 1;
    }
  }

  adicionarOuAtualizarProduto() {
    if (this.editandoId !== null) {
      const index = this.produtos.findIndex((p) => p.id === this.editandoId);
      if (index !== -1) {
        this.produtos[index] = { ...this.novoProduto, id: this.editandoId };
      }
    } else {
      this.novoProduto.id = this.idCounter++;
      this.produtos.push({ ...this.novoProduto });
    }

    this.salvarProdutos();
    this.novoProduto = this.resetProduto();
    this.editandoId = null;
  }

  editar(produto: Produto) {
    this.novoProduto = { ...produto };
    this.editandoId = produto.id;
  }

  excluir(id: number) {
    this.produtos = this.produtos.filter((p) => p.id !== id);
    this.salvarProdutos();

    if (this.editandoId === id) {
      this.novoProduto = this.resetProduto();
      this.editandoId = null;
    }
  }

  salvarProdutos() {
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }

  resetProduto(): Produto {
    return { id: 0, nome: '', preco: null as any, estoque: null as any };
  }
}
