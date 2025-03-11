// src/app/(site)/[lang]/products/page.tsx
import { Metadata } from 'next';
import { fetchProducts } from '@/lib/api/products';
import ProductListingPage from '@/components/products/ProductListingPage';
import { ProductFilters } from '../../../../types/product';

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Catálogo completo de productos electrónicos',
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: ProductFilters;
}) {

  const initialData = await fetchProducts(searchParams);

  return (
      <ProductListingPage
        initialData={initialData}
        searchParams={searchParams}
      />
  );
}
