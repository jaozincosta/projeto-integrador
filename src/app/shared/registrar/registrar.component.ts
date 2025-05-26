import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  nomeCompleto: string = '';
  usuario: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  errorMsg: string = '';

  constructor(private service: ProdutosService, private router: Router) {}

  onSubmit() {
    if (this.senha !== this.confirmarSenha) {
      this.errorMsg = 'As senhas não coincidem.';
      return;
    }

    const novoUsuario = {
      nomeCompleto: this.nomeCompleto,
      usuario: this.usuario,
      senha: this.senha,
    };

    this.service.criarConta(novoUsuario).subscribe(() => {
      alert('Conta criada com sucesso!');
      this.router.navigate(['/login']);
    });
  }
}
