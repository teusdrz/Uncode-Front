import styles from './ProductCardSkeleton.module.css';

export default function ProductCardSkeleton() {
    return (
        <article className={styles.card} aria-hidden="true">
            <div className={`${styles.image} ${styles.skeleton}`} />
            <div className={styles.content}>
                <div className={`${styles.title} ${styles.skeleton}`} />
                <div className={`${styles.category} ${styles.skeleton}`} />
                <div className={`${styles.price} ${styles.skeleton}`} />
                <div className={`${styles.button} ${styles.skeleton}`} />
            </div>
        </article>
    );
}
