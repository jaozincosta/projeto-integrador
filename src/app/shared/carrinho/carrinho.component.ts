import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { Produto } from '../../services/types/types';
import { Observable } from 'rxjs';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produto[] = [];
  total$: Observable<number>;
  showPopup = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.total$ = this.carrinhoService.getTotal();
  }

  ngOnInit(): void {
    this.carrinhoService.getItens().subscribe((itens: Produto[]) => {
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
      this.carrinho = [];
      this.mostrarPopup();
    });
  }

  mostrarPopup(): void {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }

  trackById(index: number, item: Produto): number {
    return item.id!;
  }
}
