'use client';

import { useState } from 'react';
import styles from './CategoryFilter.module.css';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className={styles.filterContainer} role="group" aria-label="Filtrar por categoria">
      <button
        className={`${styles.filterButton} ${selectedCategory === '' ? styles.active : ''}`}
        onClick={() => onCategoryChange('')}
        aria-pressed={selectedCategory === ''}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
          onClick={() => onCategoryChange(category)}
          aria-pressed={selectedCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
