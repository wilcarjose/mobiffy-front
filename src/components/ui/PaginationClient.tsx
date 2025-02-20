// src/components/PaginationClient.tsx
'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Pagination from './Pagination';

const PaginationClient = ({ meta }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (newPage) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newPage > 0 && newPage <= meta.last_page) {
            params.set('page', newPage);
            router.push(`?${params.toString()}`);
        }
    };

    return (<Pagination meta={meta} onPageChange={handlePageChange} />);
};

export default PaginationClient;
