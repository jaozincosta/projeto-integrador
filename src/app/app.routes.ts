import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ManutencaoComponent } from './shared/manutencao/manutencao.component';
import { RegistrarComponent } from './shared/registrar/registrar.component';
import { PagamentoComponent } from './shared/pagamento/pagamento.component';
import { ProductComponent } from './components/product/product.component';
import { FavoritosComponent } from './shared/favoritos/favoritos.component';
import { ProdutostenisComponent } from './shared/produtostenis/produtostenis.component';
import { CarrinhoComponent } from './shared/carrinho/carrinho.component';

export const routes: Routes = [
  { path: 'entrar', component: LoginComponent },
  { path: 'manutencao', component: ManutencaoComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'produtostenis/:genero', component: ProdutostenisComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'produto', component: ProductComponent }
];

