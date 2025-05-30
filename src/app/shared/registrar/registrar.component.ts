import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
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

  onSubmit(form: NgForm) {
  if (form.invalid) {
    return;
  }

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
