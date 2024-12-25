import axios from 'axios';

export const fetchProducts = async ({ category = null, search = null, page }) => {

    let url = `/api/products?page=${page}`;

    if (category !== null) {
        url += `&category=${category}`;
    }

    if (search !== null) {
        url += `&search=${search}`;
    }

    const response = await axios.get(url);

    return {
        products: response.data.data,
        meta: {
            current_page: response.data.current_page,
            last_page: response.data.last_page,
            from: response.data.from,
            to: response.data.to,
            total: response.data.total
        },
    };
};

export const fetchCategories = async () => {
    const response = await axios.get('/api/categories');
    return response.data.data;
};
