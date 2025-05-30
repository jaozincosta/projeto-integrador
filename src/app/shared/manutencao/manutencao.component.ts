import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
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
  formSubmitAttempted: boolean | undefined;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }



  carregarProdutos(): void {
    this.produtosService.listar().subscribe((data) => {
      this.produtos = data;
    });
  }

  adicionarOuAtualizarProduto(form: NgForm): void {
    this.formSubmitAttempted = true;
    
    if (form.invalid) return;
    if (this.editandoId !== null) {
      this.produtosService
        .atualizar(this.editandoId, this.novoProduto)
        .subscribe(() => {
          this.carregarProdutos();
          this.novoProduto = this.resetProduto();
          this.editandoId = null;
          this.formSubmitAttempted = false;
        });
    } else {
      this.produtosService.criar(this.novoProduto).subscribe(() => {
        this.carregarProdutos();
        this.novoProduto = this.resetProduto();
        this.formSubmitAttempted = false;
      });
    }
  }

  editar(produto: Produto): void {
    this.novoProduto = { ...produto };
    this.editandoId = produto.id!;
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
      nome: '',
      descricao: '',
      preco: null,
      precoOriginal: null,
      precoAtual: null,
      preco_antigo: null,
      avaliacao: '★ ★ ★ ★ ★',
      genero: '',
      estoque: null,
      imagem: '',
      parcelas: '',
      desconto: null,
      freteGratis: false,
      estrelas: null,
      quantidade: 1,
    };
  }
}
