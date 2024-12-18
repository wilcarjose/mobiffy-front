'use client'
import useSWR from 'swr';
import axios from '@/lib/axios';
import { useSearchParams } from 'next/navigation';

export const useProducts = ({ category }) => {
    const searchParams = useSearchParams();

    const buildUrl = () => {
        let url = '/api/products?';

        if (category) {
            url += `category=${category}&`;
        }

        searchParams.forEach((value, key) => {
            url += `${key}=${value}&`;
        });

        return url.slice(0, -1); // Delete last '&'
    };

    const url = buildUrl();

    const fetcher = (url) => axios.get(url).then(res => res.data.data);

    const { data: products, error } = useSWR(url || null, fetcher);

    const isLoading = !products && !error;

    return { products, isLoading, isError: !!error };
};
