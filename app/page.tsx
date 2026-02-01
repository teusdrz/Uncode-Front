'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard/ProductCard';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Cart from '@/components/Cart/Cart';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from './page.module.css';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Header />
      <Cart />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Produtos em Destaque</h1>
          
          <SearchBar onSearch={handleSearch} />

          {loading ? (
            <div className={styles.loading}>Carregando produtos...</div>
          ) : filteredProducts.length === 0 ? (
            <div className={styles.empty}>
              <p>Nenhum produto encontrado</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
