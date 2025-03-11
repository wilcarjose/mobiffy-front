// types/filters.ts
export interface ProductFilter {
  name: string;
  values: FilterValue[];
}

export interface FilterValue {
  value: string;
  count: number;
  uom?: string;
}