// components/products/FilterOption.tsx
'use client';

import { CheckIcon } from '@heroicons/react/24/solid';

interface FilterOptionProps {
  option: {
    value: string;
    count: number;
    uom?: string;
  };
  isActive: boolean;
  onChange: (value: string) => void;
}

const FilterOption = ({ option, isActive, onChange }: FilterOptionProps) => (
  <button
    onClick={() => onChange(option.value)}
    className={`filter-option rounded-lg py-1 border border-red-300 ${isActive ? 'active' : ''}`}
  >
    <span className="option-content">
      {option.value}
      {option.uom && <span className="uom">{option.uom}</span>}
      <span className="count  text-sm text-neutral-400">({option.count})</span>
    </span>
    
    {isActive && <CheckIcon className="check-icon" />}
  </button>
);

export default FilterOption;
