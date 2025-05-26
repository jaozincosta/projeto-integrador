import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private router: Router, private service: ProdutosService) {}

  onSubmit() {
    this.service
      .verificarUsuario(this.username, this.password)
      .subscribe((usuarios) => {
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
