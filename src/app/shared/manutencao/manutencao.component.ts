import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../services/types/types';

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

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.listar().subscribe((data) => {
      this.produtos = data;
    });
  }

  adicionarOuAtualizarProduto(): void {
    if (this.editandoId !== null) {
      this.produtosService
        .atualizar(this.editandoId, this.novoProduto)
        .subscribe(() => {
          this.carregarProdutos();
          this.novoProduto = this.resetProduto();
          this.editandoId = null;
        });
    } else {
      this.produtosService.criar(this.novoProduto).subscribe(() => {
        this.carregarProdutos();
        this.novoProduto = this.resetProduto();
      });
    }
  }

  editar(produto: Produto): void {
    this.novoProduto = { ...produto };
    this.editandoId = produto.id;
  }

  excluir(id: number): void {
    this.produtosService.deletar(id).subscribe(() => {
      this.carregarProdutos();
      if (this.editandoId === id) {
        this.novoProduto = this.resetProduto();
        this.editandoId = null;
      }
    });
  }

  resetProduto(): Produto {
    return {
      id: 0,
      nome: '',
      descricao: '',
      preco: 0,
      preco_antigo: 0,
      avaliacao: '',
      genero: '',
      estoque: 0,
      imagem: '',
    };
  }
}
