// components/ui/products/filters/PriceRangeFilter.tsx
'use client';

import Slider from 'rc-slider';
import React from 'react';
import { PRICE_RANGE } from '@/lib/constants';

interface PriceRangeFilterProps {
  value: number[];
  onChange: (value: number[]) => void;
}

const PriceRangeFilter = ({ value, onChange }: PriceRangeFilterProps) => {
  return (
    <div className="relative flex flex-col space-y-5 py-8 pr-3">
      <div className="space-y-5">
        <span className="font-semibold">Price range</span>
        <Slider
          range
          min={PRICE_RANGE[0]}
          max={PRICE_RANGE[1]}
          step={1}
          value={value}
          allowCross={false}
          onChange={onChange}
        />
      </div>

      <div className="flex justify-between space-x-5">
        <div>
          <div className="block text-sm font-medium">Min price</div>
          <div className="relative mt-1 rounded-md">
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
              $
            </span>
            <input
              type="text"
              disabled
              value={value[0]}
              className="block w-32 rounded-full border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm"
            />
          </div>
        </div>
        
        <div>
          <div className="block text-sm font-medium">Max price</div>
          <div className="relative mt-1 rounded-md">
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
              $
            </span>
            <input
              type="text"
              disabled
              value={value[1]}
              className="block w-32 rounded-full border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;