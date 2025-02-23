// components/products/Filters.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilters = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(newParams).forEach(([key, value]) => {
      value ? params.set(key, value) : params.delete(key);
    });
    
    router.push(`?${params.toString()}`);
  };

  const debouncedUpdate = useDebouncedCallback(updateFilters, 300);

  // Implementación de controles de filtrado...
};

export default Filters;