export interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  descricao: string;
  preco_antigo: number;
  avaliacao: string;
  genero: string;
  imagem: string;

  precoOriginal?: number;
  precoAtual?: number;
  parcelas?: string;
  desconto?: number;
  freteGratis?: boolean;
  estrelas?: number;
}
