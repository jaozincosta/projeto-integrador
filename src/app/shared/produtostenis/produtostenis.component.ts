import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ProdutosService } from '../../services/produtos.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-produtostenis',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule, FooterComponent],
  templateUrl: './produtostenis.component.html',
  styleUrls: ['./produtostenis.component.css'],
})
export class ProdutostenisComponent implements OnInit {
  produtostenis: any[] = [];
  genero: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.genero = params.get('genero') || '';
      this.carregarProdutos();
    });
  }

  carregarProdutos() {
    this.http.get<any[]>('http://localhost:3000/produtos').subscribe((data) => {
      this.produtostenis = data.filter((p) => p.genero === this.genero);
    });
  }

  adicionarAosFavoritos(produto: any): void {
    this.produtosService.adicionarAosFavoritos(produto).subscribe(() => {
      alert(`${produto.nome} foi adicionado aos favoritos!`);
    });
  }

  adicionarAoCarrinho(produto: any): void {
    this.carrinhoService.adicionar(produto);
    this.router.navigate(['/carrinho']);
  }
}
