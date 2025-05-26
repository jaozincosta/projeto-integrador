import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  termoBusca: string = '';

  constructor(private router: Router) {}

  buscar() {
    if (this.termoBusca.trim()) {
      this.router.navigate(['/pesquisar'], {
        queryParams: { q: this.termoBusca },
      });
    }
  }
}
