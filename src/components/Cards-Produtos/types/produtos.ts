// util.produtos.ts
export interface Product {
  id: number;
  image: string;
  title: string;
  tag: string;
  oldPrice: string;
  currentPrice: string;
  category: 'Fones de Ouvido' | 'computers' | 'accessories';
  link: string;
}