import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Produto } from '../../services/types/types';
import { ProdutosService } from '../../services/produtos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  imports: [HeaderComponent,RouterModule,CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  favoritos: Produto[] = [];

  constructor(private produtosservice: ProdutosService) { }

  ngOnInit(): void {
    this.produtosservice.listarFavoritos().subscribe((dados) => {
      this.favoritos = dados;
    });
  }
}
