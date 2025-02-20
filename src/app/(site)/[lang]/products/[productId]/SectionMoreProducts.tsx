import React from 'react';

import ProductCard from '@/components/products/ProductCard';
import { shoes } from '@/data/content';
import Heading from '@/components/ui/commons/Heading/Heading';

const SectionMoreProducts = () => {
  return (
    <div>
      <Heading className="mb-0">Explore more products</Heading>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {shoes.slice(4, 13).map((shoe) => (
          <ProductCard
            key={shoe.shoeName}
            product={shoe}
            className="border-neutral-300"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionMoreProducts;
