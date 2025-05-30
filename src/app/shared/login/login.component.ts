import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private router: Router, private service: ProdutosService) {}

onSubmit(form: NgForm) {
  if (form.invalid) {
    this.errorMsg = 'Preencha todos os campos corretamente.';
    return;
  }

  this.service.verificarUsuario(this.usuario, this.password).subscribe((usuarios) => {
    if (usuarios.length > 0) {
      const usuarioLogado = usuarios[0];
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

      if (usuarioLogado.tipo === 'admin') {
        this.router.navigate(['/manutencao']);
      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.errorMsg = 'Usuário ou senha inválidos!';
    }
  });
}
}
