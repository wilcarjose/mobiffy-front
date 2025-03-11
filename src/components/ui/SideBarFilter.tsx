// src/components/ui/SideBarFilter.tsx
'use client';

import 'rc-slider/assets/index.css';

import { pathOr } from 'ramda';
import Slider from 'rc-slider';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MdSearch } from 'react-icons/md';

import Heading from '@/components/ui/commons/Heading/Heading';
import Input from '@/components/ui/commons/Input/Input';

const locations = [
  'New York',
  'Canada',
  'Bangladesh',
  'Indonesia',
  'San Francisco',
];

const PRICE_RANGE = [1, 500];
//
const SidebarFilters = ({ aggregations, selectedCategory, selectedBrand }) => {
  const [rangePrices, setRangePrices] = useState([100, 500]);
  const [activeLocation, setActiveLocation] = useState('New York');

  const router = useRouter();
  const searchParams = useSearchParams();
  const brandParam = searchParams.get('brand');
  const categoryParam = searchParams.get('category');
  const [activeSpecs, setActiveSpecs] = useState({});
  const [activeCategory, setActiveCategory] = useState(() => categoryParam || null);
  const [activeBrand, setActiveBrand] = useState(() => brandParam || null);
  const [currentPath, setCurrentPath] = useState('');

  const [page, setPage] = useState(1);

  selectedBrand = brandParam ? brandParam : 'all';
  selectedCategory = selectedCategory ? selectedCategory : 'all';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname + window.location.search);
    }
  }, []);

  const handleCategoryClick = (category) => {
    const slug = category.slug;
    setActiveCategory(slug);
    setPage(1);

    const currentParams = new URLSearchParams(searchParams.toString());

    if (slug === 'all') {
      // Eliminar la categoría de la URL y conservar el parámetro 'brand' si existe
      currentParams.delete('category');
      const newUrl = currentParams.toString() ? `/?${currentParams.toString()}` : '/';
      router.push(newUrl);
    } else {
      // Agregar la nueva categoría a la URL y conservar el parámetro 'brand' si existe
      const basePath = `/category/${slug}`;
      const newUrl = currentParams.toString() ? `${basePath}?${currentParams.toString()}` : basePath;
      router.push(newUrl);
    }
  };

  const handleBrandClick = (brand) => {
    const slug = brand.slug;
    setActiveBrand(slug);
    setPage(1);

    const currentParams = new URLSearchParams(searchParams.toString());
    if (slug === 'all') {
      currentParams.delete('brand');
    } else {
      currentParams.set('brand', slug);
    }

    currentParams.delete('page');

    if (currentPath) {
      router.push(`${currentPath.split('?')[0]}?${currentParams.toString()}`);
    } else {
      console.error('Unable to determine the current path');
    }
  };

  const handleSpecClick = (specName, specValue) => {
    setActiveSpecs((prevSpecs) => ({
      ...prevSpecs,
      [specName]: specValue,
    }));

    const currentParams = new URLSearchParams(searchParams.toString());
    const specsParams = new URLSearchParams();

    Object.entries({ ...activeSpecs, [specName]: specValue }).forEach(([key, value]) => {
      specsParams.append(`specs`, `${key}:${value}`);
    });

    if (currentPath) {
      router.push(`${currentPath.split('?')[0]}?${currentParams.toString()}&${specsParams.toString()}`);
    } else {
      console.error('Unable to determine the current path');
    }
  };

  const renderTabsCategoriesMain = () => {
    return !aggregations.categories || aggregations.categories.length === 0 ? (
      ''
    ) : (
      <div className="relative flex flex-col space-y-4 pb-8">
        <h3 className="mb-2.5 text-xl font-medium">Categories</h3>
        <div>
          {aggregations.categories.map((category) => (
            <div key={category.slug} className="grid grid-cols-1 my-1">
            <button
              key={category.slug}
              type="button"
              onClick={() => handleCategoryClick(category)}
              className={`rounded-lg py-2 ${
                  selectedCategory === category.slug ? 'bg-primary text-white' : 'bg-gray'
              }`}
            >
              {category.title.en}
            </button>
            {category.children.length > 0 && (selectedCategory === category.slug || category.childSlugs.includes(selectedCategory)) && (
              <div className="grid grid-cols-2 gap-2 mt-2 ml-3">
                {category.children.map((child) => (
                  <button
                    key={child.slug}
                    type="button"
                    onClick={() => handleCategoryClick(child)}
                    className={`rounded-lg py-1 border border-red-300 ${
                        selectedCategory === child.slug ? 'bg-primary text-white' : 'bg-red'
                    }`}
                  >
                    {child.title.en}
                  </button>
                ))}
              </div>
              )}
          </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTabsCategories = () => {
    return !aggregations.categories || aggregations.categories.length === 0 ? (
      ''
    ) : (
      <div className="relative flex flex-col space-y-4 py-8">
        <h3 className="mb-2.5 text-xl font-medium">Categories</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            key="all"
            type="button"
            onClick={() => handleCategoryClick({ slug: 'all' })}
            className={`rounded-lg py-1 border border-red-300 ${
              selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-gray'
            }`}
          >
            All
          </button>
          {aggregations.categories.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => handleCategoryClick(item)}
              className={`rounded-lg py-1 border border-red-300 ${
                selectedCategory === item.slug ? 'bg-primary text-white' : 'bg-gray'
              }`}
            >
              <p>
                {item.title} <span className="text-sm text-neutral-400">({item.count})</span>
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  };
  const renderTabsBrands = () => {
    return !aggregations.brands || aggregations.brands.length === 0 ? (
      ''
    ) : (
      <div className="relative flex flex-col space-y-4 py-8">
        <h3 className="mb-2.5 text-xl font-medium">Brands</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            key="all"
            type="button"
            onClick={() => handleBrandClick({ slug: 'all' })}
            className={`rounded-lg py-1 border border-red-300 ${
              selectedBrand === 'all' ? 'bg-primary text-white' : 'bg-gray'
            }`}
          >
            All
          </button>
          {aggregations.brands.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => handleBrandClick(item)}
              className={`rounded-lg py-1 border border-red-300 ${
                selectedBrand === item.slug ? 'bg-primary text-white' : 'bg-gray'
              }`}
            >
              <p>
              {item.name} <span className="text-sm text-neutral-400">({item.count})</span>
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderTabsSpecs = () => {
    return !aggregations.specs || aggregations.specs.length === 0 ? (
      ''
    ) : (
      <div className="relative flex flex-col space-y-4 py-8">
        <h3 className="mb-2.5 text-xl font-medium">Specifications</h3>
        {aggregations.specs.map((spec) => (
          <div key={spec.name} className="space-y-2">
            <h4 className="font-semibold">{spec.name}</h4>
            <div className="grid grid-cols-2 gap-4">
              <button
                key={'all'}
                type="button"
                onClick={() => handleSpecClick(spec.key, 'all')}
                className={`rounded-lg py-1 border border-red-300 ${
                  activeSpecs[spec.name] === 'all' ? 'bg-primary text-white' : 'bg-gray'
                }`}
              >
                <p>
                  All
                </p>
              </button>
              {spec.values.map((value) => (
                <button
                  key={value.value}
                  type="button"
                  onClick={() => handleSpecClick(spec.key, value.val)}
                  className={`rounded-lg py-1 border border-red-300 ${
                    activeSpecs[spec.name] === value.value ? 'bg-primary text-white' : 'bg-gray'
                  }`}
                >
                  <p>
                    {value.value}{spec.uom} <span className="text-sm text-neutral-400">({value.count})</span>
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // OK
  const renderTabsPriceRage = () => {
    return (
      <div className="relative flex flex-col space-y-5 py-8 pr-3">
        <div className="space-y-5">
          <span className="font-semibold">Price range</span>
          <Slider
            range
            min={PRICE_RANGE[0]}
            max={PRICE_RANGE[1]}
            step={1}
            defaultValue={[
              pathOr(0, [0], rangePrices),
              pathOr(0, [1], rangePrices),
            ]}
            allowCross={false}
            onChange={(_input: number | number[]) =>
              setRangePrices(_input as number[])
            }
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
                name="minPrice"
                disabled
                id="minPrice"
                className="block w-32 rounded-full border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm"
                value={rangePrices[0]}
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
                name="maxPrice"
                id="maxPrice"
                className="block w-32 rounded-full border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm"
                value={rangePrices[1]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // OK
  const renderTabsLocation = () => {
    return (
      <div className="relative flex flex-col space-y-4 py-8">
        <h3 className="mb-2.5 text-xl font-medium">Location</h3>
        <div className="mb-2 flex items-center gap-2 space-y-3 rounded-full border border-neutral-300 px-4 md:flex md:space-y-0">
          <MdSearch className="text-2xl text-neutral-500" />
          <Input
            type="password"
            rounded="rounded-full"
            placeholder="Search..."
            sizeClass="h-12 px-0 py-3"
            className="border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {locations.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveLocation(item)}
              className={`rounded-lg py-4 ${
                activeLocation === item ? 'bg-primary text-white' : 'bg-gray'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="top-28 lg:sticky">
      <Heading className="mb-0">Filter products</Heading>
      <div className="divide-y divide-neutral-300">
        {renderTabsCategories()}
        {renderTabsBrands()}
        {renderTabsSpecs()}
        {renderTabsPriceRage()}
        {renderTabsLocation()}
      </div>
    </div>
  );
};

export default SidebarFilters;
