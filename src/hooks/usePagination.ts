// src/hooks/usePagination.ts
interface UsePaginationProps {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
}

export const usePagination = ({
  currentPage,
  totalPages,
  siblingCount = 1
}: UsePaginationProps): (number | string)[] => {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = (): (number | string)[] => {
    const totalPageNumbers = 5 + siblingCount * 2;

    if (totalPages <= totalPageNumbers) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      return [...range(1, 3 + siblingCount * 2), '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      return [1, '...', ...range(totalPages - 2 - siblingCount * 2, totalPages)];
    }

    return [1, '...', ...range(leftSiblingIndex, rightSiblingIndex), '...', totalPages];
  };

  return paginationRange();
};