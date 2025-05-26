export interface Produto {
  id: number;
  nome: string;
  imagem: string;
  preco: number;

  quantidade: number;
  cor?: string;

  estoque: number;
  descricao: string;
  preco_antigo: number;
  avaliacao: string;
  genero: string;

  precoOriginal?: number;
  precoAtual?: number;
  parcelas?: string;
  desconto?: number;
  freteGratis?: boolean;
  estrelas?: number;
}
