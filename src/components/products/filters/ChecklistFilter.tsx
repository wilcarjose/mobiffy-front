// components/ui/products/filters/ChecklistFilter.tsx
'use client';

import { Span } from 'next/dist/trace';
import React, {useEffect, useState, useRef} from 'react';

interface ChecklistFilterProps {
  title: string;
  items: Array<{
    name: string;
    key: string;
    selected: boolean;
    count?: number;
  }>;
  onSelect: (key: string) => void;
  showCount?: boolean;
  maxHeight?: number;
}

const ChecklistFilter = ({
  title,
  items,
  onSelect,
  showCount = false,
  maxHeight = 140,
}: ChecklistFilterProps) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setIsOverflowing(contentHeight > maxHeight);
    }
  }, [items, maxHeight]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const containerStyle = {
    maxHeight: isExpanded ? 'none' : `${maxHeight}px`,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
  };

  return (
    <div className="relative flex flex-col space-y-0 py-2">
      <h3 className="mb-2.5 text-sm font-medium">{title}</h3>
      <div ref={contentRef} style={containerStyle}>
        
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelect(item.key)}
            className={`rounded-lg py-0.5 border border-red-300 px-2 transition-colors mr-2 mb-2 ${
              item.selected ? 'bg-primary text-white border-primary' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
            }`}
          >
            <span className="flex justify-between items-center">
              <span className='text-sm'>{item.name}</span>
              {showCount && (
              <span className="text-xs opacity-75 ml-2">
                ({item.count})
              </span>
              )}
            </span>
          </button>
        ))}
      </div>
      {isOverflowing && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-sm text-blue-600 hover:underline"
        >
          {isExpanded ? (<span className='rounded-lg border border-red-300 text-xs text-primary px-2'>See less</span>) : (<span className='rounded-lg border border-red-300 text-xs text-primary px-2'>See more</span>)}
        </button>
      )}
    </div>
  );
};

export default ChecklistFilter;