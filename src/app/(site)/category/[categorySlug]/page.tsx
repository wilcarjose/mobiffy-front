// src/app/category/[categorySlug]/page.tsx
import React from 'react';
import ProductList from '@/components/ProductList';
import { fetchProducts, fetchCategories } from '@/lib/api';

// Esta función obtiene los datos del servidor en el momento de la solicitud
export default async function CategoryPage({ params, searchParams }) {
    const { categorySlug } = params;
    const { search, page = 1 } = searchParams;

    // Obtén los datos de productos y categorías desde la API
    const products = await fetchProducts({ category: categorySlug, search, page });
    const categories = await fetchCategories();

    return (
        <ProductList
            initialProducts={products}
            categories={categories}
            selectedCategory={categorySlug}
            searchTerm={search}
            currentPage={parseInt(page, 10)}
        />
    );
}
