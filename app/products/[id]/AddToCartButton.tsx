'use client';

import { Product } from '@/types/product';
import { useCartStore } from '@/store/cart';
import styles from './AddToCartButton.module.css';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <button className={styles.button} onClick={handleAddToCart}>
      Adicionar ao Carrinho
    </button>
  );
}
