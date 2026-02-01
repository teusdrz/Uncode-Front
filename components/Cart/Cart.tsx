'use client';

import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import styles from './Cart.module.css';

export default function Cart() {
    const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice } = useCartStore();
    const total = getTotalPrice();

    if (!isOpen) return null;

    return (
        <>
            <div
                className={styles.overlay}
                onClick={toggleCart}
                role="presentation"
                aria-hidden="true"
            />
            <aside
                className={styles.cart}
                role="dialog"
                aria-label="Carrinho de compras"
                aria-modal="true"
            >
                <div className={styles.header}>
                    <h2 className={styles.title} id="cart-title">Carrinho</h2>
                    <button
                        className={styles.closeButton}
                        onClick={toggleCart}
                        aria-label="Fechar carrinho"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className={styles.empty}>
                        <p>Seu carrinho está vazio</p>
                    </div>
                ) : (
                    <>
                        <div className={styles.items}>
                            {items.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.itemImage}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                        />
                                    </div>

                                    <div className={styles.itemInfo}>
                                        <h3 className={styles.itemName}>{item.name}</h3>
                                        <p className={styles.itemPrice}>{formatPrice(item.price)}</p>

                                        <div className={styles.itemActions}>
                                            <div className={styles.quantity}>
                                                <button
                                                    className={styles.quantityButton}
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    aria-label="Diminuir quantidade"
                                                >
                                                    −
                                                </button>
                                                <span className={styles.quantityValue}>{item.quantity}</span>
                                                <button
                                                    className={styles.quantityButton}
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    aria-label="Aumentar quantidade"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                className={styles.removeButton}
                                                onClick={() => removeItem(item.id)}
                                                aria-label="Remover item"
                                            >
                                                Remover
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.total}>
                                <span className={styles.totalLabel}>Total:</span>
                                <span className={styles.totalValue}>{formatPrice(total)}</span>
                            </div>
                        </div>
                    </>
                )}
            </aside>
        </>
    );
}
