// types/product.ts
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  specifications: Record<string, string>;
}