// context/FilterContext.tsx
'use client';

import { createContext, useContext, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type FilterContextType = {
  activeFilters: string[];
  toggleFilter: (filterKey: string, value: string) => void;
  clearFilters: () => void;
};

const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export const FilterProvider = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeFilters = Array.from(searchParams.entries())
    .filter(([key]) => key.startsWith('filter_'))
    .map(([key, value]) => `${key}=${value}`);

  const updateFilters = useCallback((newFilters: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(newFilters).forEach(([key, value]) => {
      value ? params.set(key, value) : params.delete(key);
    });
    
    router.push(`?${params.toString()}`);
  }, [searchParams, router]);

  const toggleFilter = useCallback((filterKey: string, value: string) => {
    const paramKey = `filter_${filterKey}`;
    updateFilters({ [paramKey]: value });
  }, [updateFilters]);

  const clearFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    Array.from(params.keys())
      .filter(key => key.startsWith('filter_'))
      .forEach(key => params.delete(key));
    router.push(`?${params.toString()}`);
  }, [searchParams, router]);

  return (
    <FilterContext.Provider value={{ activeFilters, toggleFilter, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
