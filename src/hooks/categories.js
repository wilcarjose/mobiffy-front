'use client';
import useSWR from 'swr';
import axios from '@/lib/utils/axios';

export const useCategories = () => {
//    console.log("useCategories hook ejecutándose");

    const fetcher = async (url) => { // Marcar la función como async
        //console.log("Fetcher ejecutándose para:", url);
        try {
            const res = await axios.get(url); // Usar await para esperar la respuesta
            //console.log("fetcher res:", res);
            //console.log('fetcher res.data.data', res.data.data)
            return res.data.data; // DEVOLVER los datos aquí!!!
        } catch (error) {
            //console.log("fetcher error:", error);
            //Importantísimo Re-lanzar el error para que SWR lo gestione
            throw error; // Re-lanza el error para que SWR lo maneje
        }
    };

    const { data: categories, error } = useSWR('/api/categories', fetcher);

    const isLoading = !categories && !error;

    return { categories, isLoading, isError: !!error };
};
