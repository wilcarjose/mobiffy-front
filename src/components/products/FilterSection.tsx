// components/products/FilterSection.tsx
'use client';

import { useCallback } from 'react';
import { useFilterContext } from '@/context/FilterContext';
import { ProductFilter } from '../../types/filters';
import { FilterOption } from './FilterOption';

interface FilterSectionProps {
  title: string;
  filters: ProductFilter[];
}

const FilterSection = ({ title, filters }: FilterSectionProps) => {
  const { activeFilters, toggleFilter } = useFilterContext();

  const handleFilterChange = useCallback((filterKey: string, value: string) => {
    toggleFilter(filterKey, value);
  }, [toggleFilter]);

  return (
    <div className="filter-section relative flex flex-col space-y-4 py-8">
      <h3 className="filter-title mb-2.5 text-xl font-medium">{title}</h3>
      <div className="filter-options grid grid-cols-2 gap-4">
        {filters.map((filter) => (
          <FilterOption
            key={filter.name}
            filter={filter}
            isActive={activeFilters.includes(filter.name)}
            onChange={handleFilterChange}
          />
        ))}
      </div>
    </div>
  );
};