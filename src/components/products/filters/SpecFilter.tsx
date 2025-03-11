// components/ui/products/filters/SpecFilter.tsx
'use client';

import React from 'react';
import ChecklistFilter from './ChecklistFilter';

interface SpecFilterProps {
  spec: {
    name: string;
    key: string;
    uom?: string;
    values: Array<{
      name: string;
      key: string;
      selected: boolean;
      count: number;
    }>;
  };
  onSelect: (specKey: string, value: string) => void;
}

const SpecFilter = ({ spec, onSelect }: SpecFilterProps) => {
  const items = spec.values.map(value => ({
    key: value.key,
    name: `${value.name}${spec.uom ? ` ${spec.uom}` : ''}`,
    count: value.count,
    selected: value.selected
  }));

  return (
    <ChecklistFilter
      title={spec.name}
      items={items}
      onSelect={(valueKey) => onSelect(spec.key, valueKey)}
      gridColumns="grid-cols-2"
    />
  );
};

export default SpecFilter;