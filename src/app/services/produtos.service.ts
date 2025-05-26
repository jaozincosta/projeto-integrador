import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './types/types';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private readonly API = 'http://localhost:3000/produtos';
  private readonly FAVORITOS_API = 'http://localhost:3000/favoritos';
  private USUARIO_API = 'http://localhost:3000/usuarios';
  private apiUrl = 'http://localhost:3000/usuarios';
  private CARRINHO_API = 'http://localhost:3000/carrinho';
  

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API);
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.API}/${id}`);
  }

  criar(produto: Omit<Produto, 'id'>): Observable<Produto> {
    return this.http.post<Produto>(this.API, produto);
  }

  atualizar(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.API}/${id}`, produto);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  listarFavoritos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.FAVORITOS_API);
  }

  removerFavorito(id: number): Observable<any> {
    return this.http.delete(`${this.FAVORITOS_API}/${id}`);
  }

  adicionarAosFavoritos(produto: any): Observable<any> {
  return this.http.post(this.FAVORITOS_API, produto);
}
  
  criarConta(usuario: any): Observable<any> {
    return this.http.post(this.USUARIO_API, usuario);
  }

  verificarUsuario(username: string, password: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.USUARIO_API}?usuario=${username}&senha=${password}`);
}
 getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  listarCarrinho(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.CARRINHO_API);
  }

  adicionarAoCarrinho(item: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.CARRINHO_API, item);
  }

  atualizarCarrinho(id: string, item: Partial<Produto>): Observable<Produto> {
    return this.http.patch<Produto>(`${this.CARRINHO_API}/${id}`, item);
  }

  removerDoCarrinho(id: string): Observable<void> {
    return this.http.delete<void>(`${this.CARRINHO_API}/${id}`);
  }

  buscarItemCarrinhoPorId(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.CARRINHO_API}/${id}`);
  }

}
