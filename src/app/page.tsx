// src/app/page.tsx
import React from 'react';
import ProductPage from '@/components/products/ProductPage';
import { fetchProducts } from '@/lib/api/api';

export default async function Home({ searchParams }) {
  const { brand, search, specs,page = 1 } = searchParams;

  const { products, aggregations, meta, filters } = await fetchProducts({
    brand: brand,
    search,
    specs,
    page
  });

  return (
    <ProductPage
      initialProducts={products}
      aggregations={aggregations}
      meta={meta}
      selectedBrand={brand}
      searchTerm={search}
      currentPage={parseInt(page, 10)}
    />
  );
}
