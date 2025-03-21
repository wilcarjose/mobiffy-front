// src/components/ui/Pagination.tsx
'use client'

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ meta, className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage, direction = '') => {

    const current_page = Number(meta?.current_page);

    if (direction === 'next') {
      newPage = current_page + 1;
    } else if (direction === 'prev') {
      newPage = current_page - 1;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (newPage > 0 && newPage <= meta?.last_page) {
      params.set('page', newPage);
    }

    if (newPage === 1) {
      params.delete('page');
    }

    const replacedParams = `?${params.toString()}`
      .replace(/%3A/g, ':')
      .replace(/%2C/g, ',')
      .replace(/%7C/g, '|');

      router.replace(replacedParams);
  };

  const getPages = () => {
    const start = Math.max(1, meta?.current_page - 5);
    const end = Math.min(meta?.last_page, start + 9);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className={`pagination-controls ${className}`}>

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
          <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        </div>
        <div className="hidden sm:flex sm:flex-1 flex-col text-right">
          <div>
            <p className="text-sm text-gray-700">
              Showing &nbsp;
              <span className="font-medium">{meta?.from}</span>
              &nbsp; to &nbsp;
              <span className="font-medium">{meta?.to}</span>
              &nbsp; of &nbsp;
              <span className="font-medium">{meta?.total}</span>
              &nbsp; results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button onClick={() => handlePageChange(meta?.current_page, 'prev')} disabled={meta?.current_page === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
              </button>

              {getPages().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${meta?.current_page == page ? 'z-10 bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : ''}`}
                >
                  {page}
                </button>
              ))}

              <button onClick={() => handlePageChange(meta?.current_page, 'next')} disabled={meta?.current_page === meta?.last_page}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Pagination;
