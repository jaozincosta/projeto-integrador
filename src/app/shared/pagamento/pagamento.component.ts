import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css'],
})
export class PagamentoComponent {
  metodoPagamento: string = '';
  valor: number = 0;
  pago: boolean = false;

  realizarPagamento() {
    if (this.valor > 0 && this.metodoPagamento) {
      this.pago = true;
    }
  }

  resetarFormulario() {
    this.metodoPagamento = '';
    this.valor = 0;
    this.pago = false;
  }
}
