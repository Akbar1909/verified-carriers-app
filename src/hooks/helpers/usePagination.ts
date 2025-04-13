import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import useAppNavigation from './useAppNavigation';
import { joinStrings } from '@/utils/common';

const DEFAULT_PAGE = 0;
const DEFAULT_SIZE = 10;
const DEFAULT_GOTO = '';

/**
 * Custom hook to manage pagination logic with URL query parameters.
 *
 * This hook provides functions to handle page, size, and goto changes for pagination.
 * It integrates with the Next.js router to update the URL based on the current page, size, and
 * other optional query parameters.
 *
 * @param {Object} [options] - Optional configuration for query parameters.
 * @param {string} [options.prefix] - Optional prefix for query parameters.
 * @param {string} [options.suffix] - Optional suffix for query parameters.
 *
 * @returns {{
 *   page: number,
 *   size: number,
 *   goto: number | string,
 *   displayPage: number,
 *   preparedPage: number | string,
 *   handlePageChange: (page: number) => void,
 *   handleSizeChange: (size: number) => void,
 *   handleGotoChange: (page: number, options?: NavigateOptions) => void
 * }} An object containing pagination state and handlers.
 */
const usePagination = ({
  suffix,
  ...rest
}: {
  prefix?: string;
  suffix?: string;
} = {}) => {

  const { searchParams, createQueryParams, pushToRouter, router, pathname } =
    useAppNavigation();
  
  const prefix = rest.prefix ?? pathname;

  /**
   * Generates a key by applying the optional prefix and suffix to the provided key.
   *
   * @param {string} key - The base key to which prefix and suffix are applied.
   * @returns {string} - The generated key with prefix and suffix applied.
   */
  const getKey = (key: string) => `${prefix ?? ''}${key}${suffix ?? ''}`;

  const pageKey = getKey('page');
  const sizeKey = getKey('size');
  const gotoKey = getKey('goto');

  const rawPage = searchParams.get(pageKey) || DEFAULT_PAGE;
  const rawSize = searchParams.get(sizeKey) || DEFAULT_SIZE;
  const rawGoto = searchParams.get(gotoKey) || DEFAULT_GOTO;

  const page = isNaN(rawPage) ? DEFAULT_PAGE : parseInt(rawPage, 10);
  const size = isNaN(rawSize) ? DEFAULT_SIZE : parseInt(rawSize, 10);
  const goto = isNaN(rawGoto) ? DEFAULT_GOTO : rawGoto;
  const preparedPage = searchParams.has(gotoKey) ? goto - 1 : page;

  const displayPage = page + 1;

  /**
   * Handles changes to the page number and updates the URL.
   *
   * @param {number} page - The new page number.
   */
  const handlePageChange = (page: number) => {
    const params = createQueryParams();
    params.delete(gotoKey);
    params.set(pageKey, String(page));

    pushToRouter(params, { scroll: false });
  };

  /**
   * Handles changes to the page size and updates the URL.
   *
   * @param {number} size - The new page size.
   */
  const handleSizeChange = (size: number) => {
    const params = createQueryParams();
    params.set(pageKey, '0');

    params.set(sizeKey, String(size));
    params.delete(gotoKey);
    pushToRouter(params, { scroll: false });
  };

  /**
   * Handles changes to the goto page and updates the URL.
   *
   * @param {number} page - The page to go to.
   * @param {NavigateOptions} [options] - Optional navigation options.
   */
  const handleGotoChange = (page: number, options?: NavigateOptions) => {
    const params = createQueryParams();
    params.set(pageKey, String(page));

    router.push(`${pathname}?${params.toString()}`, options);
  };

  const clear = () => {};
  return {
    page: preparedPage,
    size,
    handlePageChange,
    handleSizeChange,
    displayPage,
    goto,
    handleGotoChange,
    preparedPage,
    clear,
    pageKey,
    gotoKey,
    sizeKey,
    DEFAULT_SIZE,
    computedPrefix:prefix
  };
};

export default usePagination;
