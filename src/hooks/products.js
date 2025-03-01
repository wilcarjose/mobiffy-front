
import useSWR from 'swr';
import axios from '@/lib/utils/axios';
import { useSearchParams } from 'next/navigation';

export const useProducts = ({ category, initialData }) => {
    const searchParams = useSearchParams();

    const buildUrl = () => {
        let page = searchParams.get('page') || 1;
        let url = `/api/products?page=${page}&`;

        if (category) {
            url += `category=${category}&`;
        }

        searchParams.forEach((value, key) => {
            if (key !== 'page' && key !== 'category') {
                url += `${key}=${value}&`;
            }
        });

        return url.slice(0, -1); // Eliminar último '&'
    };

    const url = buildUrl();

    const fetcher = (url) => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(url || null, fetcher, { initialData });

    const isLoading = !data && !error;

    return {
        products: data?.data,
        brands: data?.brands,
        categories: data?.categories,
        isLoading,
        isError: !!error,
        meta: {
            current_page: data?.current_page,
            last_page: data?.last_page,
            from: data?.from,
            to: data?.to,
            total: data?.total
        },
    };
};
