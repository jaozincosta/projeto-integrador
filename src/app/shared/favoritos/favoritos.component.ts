import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Produto } from '../../services/types/types';
import { ProdutosService } from '../../services/produtos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  imports: [HeaderComponent, RouterModule, CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  favoritos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarFavoritos();
  }

  carregarFavoritos(): void {
    this.produtosService.listarFavoritos().subscribe((dados) => {
      this.favoritos = dados;
    });
  }

  removerFavorito(id: number): void {
    this.produtosService.removerFavorito(id).subscribe(() => {
      this.favoritos = this.favoritos.filter(p => p.id !== id);
    });
  }
}
