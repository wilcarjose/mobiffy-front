// lib/api/api.ts
import axios from 'axios';

export const fetchProducts = async ({
  category = null,
  brand= null,
  search = null,
  specs = null,
  page = 1
}) => {

  let url = `/api/products?page=${page}`;

  if (category !== null) {
    url += `&category=${category}`;
  }

  if (brand !== null) {
    url += `&brand=${brand}`;
  }

  if (search !== null) {
    url += `&search=${search}`;
  }

  if (specs !== null) {
    url += `&specs=${specs}`;
  }

  //await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await axios.get(url);

  return {
    products: response.data.data,
    aggregations: response.data.aggregations,
    meta: response.data.meta,
    filters: response.data.filters,
  };
};

export const fetchCategories = async () => {
  const response = await axios.get('/api/categories');
  return response.data.data;
};
