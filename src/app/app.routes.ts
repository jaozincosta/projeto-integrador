import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ManutencaoComponent } from './shared/manutencao/manutencao.component';
import { RegistrarComponent } from './shared/registrar/registrar.component';

export const routes: Routes = [
  { path: 'entrar', component: LoginComponent },
  { path: 'manutencao', component: ManutencaoComponent },
  { path: 'registrar', component: RegistrarComponent },
];
