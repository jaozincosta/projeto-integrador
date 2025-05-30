import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './types/types';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private readonly API_PRODUTOS = 'http://localhost:3000/produtos';
  private readonly API_FAVORITOS = 'http://localhost:3000/favoritos';
  private readonly API_USUARIOS = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API_PRODUTOS);
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.API_PRODUTOS}/${id}`);
  }

  criar(produto: Omit<Produto, 'id'>): Observable<Produto> {
    return this.http.post<Produto>(this.API_PRODUTOS, produto);
  }

  atualizar(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.API_PRODUTOS}/${id}`, produto);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_PRODUTOS}/${id}`);
  }

  listarFavoritos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API_FAVORITOS);
  }

  adicionarAosFavoritos(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API_FAVORITOS, produto);
  }

  removerFavorito(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_FAVORITOS}/${id}`);
  }

  verificarUsuario(usuario: string, senha: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.API_USUARIOS}?usuario=${usuario}&senha=${senha}`);
  }

  criarConta(usuario: any): Observable<any> {
    return this.http.post<any>(this.API_USUARIOS, usuario);
  }
}
