import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Produto } from './types/types';


@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: Produto[] = [];
  private carrinhoSubject = new BehaviorSubject<Produto[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  total: any;

  constructor() {}

  getItens(): Observable<Produto[]> {
    return this.carrinhoSubject.asObservable();
  }

  getTotal(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  adicionar(produto: Produto): void {
    const itemExistente = this.carrinho.find(p => p.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade = (itemExistente.quantidade || 1) + 1;
    } else {
      this.carrinho.push({ ...produto, quantidade: 1 });
    }

    this.atualizarCarrinho();
  }

  alterarQuantidade(id: number, delta: number): Observable<void> {
    const produto = this.carrinho.find(p => p.id === id);

    if (produto) {
      produto.quantidade = (produto.quantidade || 1) + delta;

      if (produto.quantidade <= 0) {
        this.remover(id);
      } else {
        this.atualizarCarrinho();
      }
    }

    return of();
  }

  remover(id?: number): Observable<void> {
    this.carrinho = this.carrinho.filter(p => p.id !== id!);
    this.atualizarCarrinho();
    return of();
  }

  limparCarrinho(): Observable<void> {
    this.carrinho = [];
    this.atualizarCarrinho();
    return of();
  }

  private atualizarCarrinho(): void {
    this.carrinhoSubject.next(this.carrinho);
    const total = this.carrinho.reduce(
      (acc, p) => acc + (p.preco || 0) * (p.quantidade || 1),
      0
    );
    this.totalSubject.next(total);
  }
}
