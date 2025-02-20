import React from 'react';

const LoadingGrid = () => {
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 mb-10">
      {placeholders.map((_, index) => (
        <div key={index} className="bg-gray-darker h-64 w-full animate-pulse rounded-md"></div>
      ))}
    </div>
  );
};

export default LoadingGrid;
