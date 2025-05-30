import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-mais-vendidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.css'],
})
export class MaisVendidosComponent implements OnInit {
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
      this.produtostenis = data.slice(-3);
    });
  }
}
