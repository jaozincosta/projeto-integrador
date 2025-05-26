export interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;

  precoOriginal?: number;
  precoAtual?: number;
  parcelas?: string;
  desconto?: number;
  freteGratis?: boolean;
  imagem?: string;
  estrelas?: number;
}
