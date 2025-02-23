// src/app/(site)/[lang]/products/page.tsx
import React from 'react';
import ProductPage from '@/components/products/ProductPage';
import { fetchProducts, fetchCategories } from '@/lib/api/api';

export default async function Home({ searchParams }) {
    const { search, page = 1 } = searchParams;

    // Obtén los datos de productos y categorías desde la API
    const { products, aggregations, meta, filters } = await fetchProducts({ search, page });
    const categories = await fetchCategories();

    return (
        <ProductPage
            initialProducts={products}
            aggregations={aggregations}
            categories={categories}
            searchTerm={search}
            currentPage={parseInt(page, 10)}
        />
    );
}
