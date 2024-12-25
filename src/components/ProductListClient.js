// src/components/ProductListClient.js
'use client';

import React, { useState } from 'react';
import ProductList from '@/components/ProductList';

const ProductListClient = ({ initialProducts, categories, selectedCategory, currentPage }) => {
    const [products, setProducts] = useState(initialProducts);
    const [category, setCategory] = useState(selectedCategory);
    const [page, setPage] = useState(currentPage);

    const handleCategoryChange = (categorySlug) => {
        setCategory(categorySlug);
        setPage(1);

        // Actualizar la URL y recargar la página en el servidor
        // window.location.href = `/category/${categorySlug}`;
    };

    return (
        <ProductList
            products={products}
            categories={categories}
            selectedCategory={category}
            currentPage={page}
            onCategoryChange={handleCategoryChange}
        />
    );
};

export default ProductListClient;
