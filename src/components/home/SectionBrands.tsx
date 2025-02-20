import React from 'react';

import BrandCard from '@/components/ui/BrandCard';
import { brandsSection } from '@/data/content';
import ButtonPrimary from '@/components/ui/commons/Button/ButtonPrimary';
import Heading from '@/components/ui/commons/Heading/Heading';

const SectionBrands = () => {
  return (
    <div className="container">
      <Heading desc={brandsSection.description} isCenter isMain>
        {brandsSection.heading}
      </Heading>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {brandsSection.brands.map((brand) => (
          <BrandCard key={brand.brandName} {...brand} />
        ))}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <ButtonPrimary>View More</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionBrands;
