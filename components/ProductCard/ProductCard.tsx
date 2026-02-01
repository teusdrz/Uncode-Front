'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/cart';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product);
    
    setTimeout(() => {
      setIsAdding(false);
      toggleCart();
    }, 300);
  };

  return (
    <article className={styles.card}>
      <Link href={`/products/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </Link>

      <div className={styles.content}>
        <Link href={`/products/${product.id}`}>
          <h3 className={styles.title}>{product.name}</h3>
        </Link>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>{formatPrice(product.price)}</p>

        <button 
          className={`${styles.button} ${isAdding ? styles.adding : ''}`}
          onClick={handleAddToCart}
          disabled={isAdding}
        >
          {isAdding ? '✓ Adicionado!' : 'Adicionar ao Carrinho'}
        </button>
      </div>
    </article>
  );
}
