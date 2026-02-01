'use client';

import { useEffect, useState, useMemo } from 'react';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductCardSkeleton from '@/components/ProductCard/ProductCardSkeleton';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Cart from '@/components/Cart/Cart';
import SearchBar from '@/components/SearchBar/SearchBar';
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import styles from './page.module.css';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = useMemo(() => {
        const uniqueCategories = new Set(products.map((p) => p.category));
        return Array.from(uniqueCategories).sort();
    }, [products]);

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

    useEffect(() => {
        let filtered = products;

        if (selectedCategory) {
            filtered = filtered.filter((p) => p.category === selectedCategory);
        }

        if (searchQuery.trim()) {
            const lowercaseQuery = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (product) =>
                    product.name.toLowerCase().includes(lowercaseQuery) ||
                    product.description.toLowerCase().includes(lowercaseQuery) ||
                    product.category.toLowerCase().includes(lowercaseQuery)
            );
        }

        setFilteredProducts(filtered);
    }, [searchQuery, selectedCategory, products]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Header />
            <Cart />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Produtos em Destaque</h1>

                    <SearchBar onSearch={handleSearch} />

                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />

                    {loading ? (
                        <div className={styles.grid}>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>
                    ) : filteredProducts.length === 0 ? (
                        <div className={styles.empty} role="status" aria-live="polite">
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
            <ScrollToTop />
        </>
    );
}
