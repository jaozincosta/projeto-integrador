import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class ProdutostenisComponent implements OnInit {
  produtostenis: any[] = [];

  constructor(
    private http: HttpClient,
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  calcularDesconto(precoAntigo: number, precoNovo: number): number {
  const desconto = ((precoAntigo - precoNovo) / precoAntigo) * 100;
  return Math.round(desconto);
}

  carregarProdutos(): void {
  this.produtosService.listar().subscribe((data) => {
    this.produtostenis = data.slice(0, 5);
  });


}
}
