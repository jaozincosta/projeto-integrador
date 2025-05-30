export interface Produto {
  quantidade: number;
  id?: number;
  nome: string;
  preco: number | null;
  estoque: number | null;
  descricao: string;
  preco_antigo: number | null;
  avaliacao: string;
  genero: string;
  imagem: string;

  precoOriginal?: number | null;
  precoAtual?: number | null;
  parcelas?: string;
  desconto?: number | null;
  freteGratis?: boolean;
  estrelas?: number | null;
}
