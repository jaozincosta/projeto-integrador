import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  sidebarActive = false;
  quantity = 0;

  product = {
    name: 'Adidas Adizero Takumi Sen',
    image: 'assets/img/tenis2.png',
    company: 'SNEAKER COMPANY',
    description: 'O Adidas Adizero Takumi Sen 10 é um tênis leve (185g no tamanho 40) que combina a agilidade de modelos clássicos com o retorno de energia dos tênis modernos com placa, sem perder sua leveza e perfil baixo.',
    oldPrice: 980.00,
    price: 490.00,
    color: 'Preto'
  };

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }


  formatPrice(value: number): string {
    return `R$ ${value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }
}
