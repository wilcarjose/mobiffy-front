// src/app/page.tsx
import React from 'react';
import ProductList from '@/components/ProductList';
import { fetchProducts } from '@/lib/api';

export default async function Home({ searchParams }) {
  const { brand, search, specs,page = 1 } = searchParams;

  const { products, aggregations, meta, filters } = await fetchProducts({
    brand: brand,
    search,
    specs,
    page
  });

  return (
    <ProductList
      initialProducts={products}
      aggregations={aggregations}
      meta={meta}
      selectedBrand={brand}
      searchTerm={search}
      currentPage={parseInt(page, 10)}
    />
  );
}
