'use client'
import useSWR from 'swr';
import axios from '@/lib/axios';
import { useSearchParams } from 'next/navigation';

export const useProducts = ({ category }) => {
    const searchParams = useSearchParams();

    const buildUrl = () => {
        let url = '/api/products?';

        if (category) {
            url += `category=${category}&`; // Agregar la categoría como parámetro
        }

        // Itera sobre los parámetros de búsqueda de la URL
        searchParams.forEach((value, key) => {
            url += `${key}=${value}&`;
        });
        // Elimina el último "&" si existen parámetros
        return url.slice(0, -1); // Eliminar el último '&'
    };

    const fetcher = (url) => axios.get(url).then(res => res.data.data); // Accede a res.data.data
    const { data: products, error, isLoading } = useSWR(buildUrl, fetcher); // Usa buildUrl como key

    return { products, isLoading, isError: error };
};
