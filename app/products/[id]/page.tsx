import { getProductById, getProducts } from '@/lib/api';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Cart from '@/components/Cart/Cart';
import AddToCartButton from './AddToCartButton';
import { formatPrice } from '@/lib/utils';
import styles from './page.module.css';

export async function generateStaticParams() {
    const products = await getProducts();
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const productId = parseInt(params.id);

    try {
        const product = await getProductById(productId);

        return {
            title: `${product.name} - Uncode Store`,
            description: product.description,
            keywords: [product.name, product.category, 'comprar', 'online'],
            openGraph: {
                title: product.name,
                description: product.description,
                images: [product.image],
                type: 'website',
            },
        };
    } catch {
        return {
            title: 'Produto não encontrado - Uncode Store',
        };
    }
}

export default async function ProductPage({
    params,
}: {
    params: { id: string };
}) {
    const productId = parseInt(params.id);
    let product;

    try {
        product = await getProductById(productId);
    } catch {
        notFound();
    }

    return (
        <>
            <Header />
            <Cart />
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.product}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={600}
                                height={600}
                                className={styles.image}
                                priority
                            />
                        </div>

                        <div className={styles.info}>
                            <span className={styles.category}>{product.category}</span>
                            <h1 className={styles.title}>{product.name}</h1>
                            <p className={styles.price}>{formatPrice(product.price)}</p>
                            <p className={styles.description}>{product.description}</p>

                            <div className={styles.stock}>
                                {product.stock > 0 ? (
                                    <span className={styles.inStock}>
                                        ✓ {product.stock} unidades em estoque
                                    </span>
                                ) : (
                                    <span className={styles.outOfStock}>Fora de estoque</span>
                                )}
                            </div>

                            <AddToCartButton product={product} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
