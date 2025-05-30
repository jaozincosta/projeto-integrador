import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categoria-carousel.component.html',
  styleUrls: ['./categoria-carousel.component.css'],
})
export class CategoriaCarouselComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  categorias = [
    {
      nome: 'MASCULINO',
      imagem: 'assets/img/masculino.jpg',
      link: '/produtostenis/masculino',
    },
    {
      nome: 'FEMININO',
      imagem: 'assets/img/feminino.jpg',
      link: '/produtostenis/feminino',
    },
    {
      nome: 'INFANTIL',
      imagem: 'assets/img/infantil.jpg',
      link: '/produtostenis/infantil',
    },
  ];

  scrollEsquerda() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollDireita() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
