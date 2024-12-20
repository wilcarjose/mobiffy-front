'use client'
import useSWR from 'swr';
import axios from '@/lib/axios';
import { useSearchParams } from 'next/navigation';

export const useProducts = ({ category }) => {
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

        return url.slice(0, -1); // Delete last '&'
    };

    const url = buildUrl();

    const fetcher = (url) => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(url || null, fetcher);

    const isLoading = !data && !error;

    return {
        products: data?.data,
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
