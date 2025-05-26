import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosService } from './../services/produtos.service';
import { Produto } from '../services/types/types';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  produtostenis1: Produto[] = [];
  produtostenis2: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}
quantidadeMaxima = 4;

ngOnInit(): void {
  this.produtosService.listar().subscribe((dados) => {
    this.produtostenis1 = dados.slice(0, 4); 
    this.produtostenis2 = dados.slice(4, 8); 
  });
}


}