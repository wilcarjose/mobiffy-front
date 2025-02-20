import React from 'react';
import ProductPage from '@/components/products/ProductPage';
import { fetchProducts } from '@/lib/api/api';

export default async function CategoryPage({ params, searchParams }) {
  const { categorySlug } = params;
  const { brand, search, specs, page = 1 } = searchParams;

  const { products, aggregations, meta } = await fetchProducts({
    category: categorySlug,
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
      selectedCategory={categorySlug}
      selectedBrand={brand}
      searchTerm={search}
      currentPage={parseInt(page, 10)}
    />
  );
}
