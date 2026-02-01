import { Product } from '@/types/product';
import products from '@/products.json';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export async function getProducts(): Promise<Product[]> {
  if (typeof window === 'undefined') {
    return products as Product[];
  }
  
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function getProductById(id: number): Promise<Product> {
  if (typeof window === 'undefined') {
    const product = products.find((p) => p.id === id);
    if (!product) throw new Error('Product not found');
    return product as Product;
  }
  
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
}
