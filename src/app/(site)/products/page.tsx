// src/app/(site)/products/page.tsx
import React from 'react';
import ProductList from '@/components/ProductList';
import { fetchProducts, fetchCategories } from '@/lib/api';

export default async function Home({ searchParams }) {
    const { search, page = 1 } = searchParams;

    // Obtén los datos de productos y categorías desde la API
    const { products, aggregations, meta, filters } = await fetchProducts({ search, page });
    const categories = await fetchCategories();

    return (
        <ProductList
            initialProducts={products}
            aggregations={aggregations}
            categories={categories}
            searchTerm={search}
            currentPage={parseInt(page, 10)}
        />
    );
}
