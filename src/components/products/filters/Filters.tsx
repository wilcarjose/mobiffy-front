// components/products/Filters.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

import ChecklistFilter from '@/components/products/filters/ChecklistFilter';
import SpecFilter from '@/components/products/filters/SpecFilter';
import Heading from '@/components/ui/commons/Heading/Heading';

const Filters = ({ aggregations }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMounted = useRef(false);

  const handleCategoryClick = (slug) => {
  //  setPage(1);

    const currentParams = new URLSearchParams(searchParams.toString());

    if (slug === 'all') {
      currentParams.delete('category');
      const newUrl = currentParams.toString() ? `/?${currentParams.toString()}` : '/';
      router.push(newUrl);
    } else {
      const basePath = `/category/${slug}`;
      const newUrl = currentParams.toString() ? `${basePath}?${currentParams.toString()}` : basePath;
      router.push(newUrl);
    }
  };

  const handleBrandClick = (brandKey: string) => {
    const currentBrands = searchParams.get('brands')?.split(',') || [];
    const newBrands = currentBrands.includes(brandKey)
      ? currentBrands.filter(b => b !== brandKey)
      : [...currentBrands, brandKey];

    const newParams = new URLSearchParams(searchParams.toString());
    
    if (newBrands.length > 0) {
      newParams.set('brands', newBrands.join(','));
    } else {
      newParams.delete('brands');
    }

    const replacedParams = `?${newParams.toString()}`
      .replace(/%3A/g, ':')
      .replace(/%2C/g, ',')
      .replace(/%7C/g, '|');

      console.log('replacedParams', replacedParams)

    router.replace(replacedParams);
  };

  const handleSpecClick = (specKey: string, valueKey: string) => {
    const currentSpecs = searchParams.get('specs');
    const specMap = new Map<string, Set<string>>();
  
    // Parsear specs existentes
    currentSpecs?.split(',').forEach(spec => {
      const [key, values] = spec.split(':');
      if (key && values) {
        specMap.set(key, new Set(values.split('|')));
      }
    });
  
    // Actualizar valores
    const currentValues = specMap.get(specKey) || new Set();
    if (currentValues.has(valueKey)) {
      currentValues.delete(valueKey);
    } else {
      currentValues.add(valueKey);
    }
  
    // Eliminar entrada si no hay valores
    if (currentValues.size > 0) {
      specMap.set(specKey, currentValues);
    } else {
      specMap.delete(specKey);
    }
  
    // Construir nuevo parámetro
    const newSpecs = Array.from(specMap)
      .map(([key, values]) => `${key}:${Array.from(values).join('|')}`)
      .join(',');
  
    const newParams = new URLSearchParams(searchParams.toString());
    
    if (newSpecs) {
      newParams.set('specs', newSpecs);
    } else {
      newParams.delete('specs');
    }

    const replacedParams = `?${newParams.toString()}`
      .replace(/%3A/g, ':')
      .replace(/%2C/g, ',')
      .replace(/%7C/g, '|');
  
    router.replace(replacedParams);
  };

  const transformedCategories = aggregations?.categories?.map(category => ({
    name: category.name,
    key: category.key,
    selected: category.selected,
    count: category.count
  })) || [];

  // Transformar marcas recibidas de la API
  const transformedBrands = aggregations?.brands?.map(brand => ({
    key: brand.key,
    name: brand.name,
    count: brand.count,
    selected: brand.selected
  })) || [];

  return (
    <div className="top-28 lg:sticky">
      <Heading className="mb-0">Filter products</Heading>
      <div className="divide-y divide-neutral-300">
        <ChecklistFilter
          title="Categories"
          items={transformedCategories}
          onSelect={handleCategoryClick}
        />

        <ChecklistFilter
          title="Brands"
          items={transformedBrands}
          onSelect={handleBrandClick}
          showCount={true}
        />

        {aggregations?.specs?.map((spec) => (
          <SpecFilter
            key={spec.key}
            spec={spec}
            onSelect={handleSpecClick}
          />
        ))}

      </div>
    </div>
  );
};

export default Filters;