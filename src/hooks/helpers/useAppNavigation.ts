import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useSearchParams, useRouter, usePathname, useParams } from 'next/navigation';
import { useCallback } from 'react';

const useAppNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params=useParams()

  const createQueryParams = useCallback(
    () => new URLSearchParams(window.location.search),
    []
  );

  const pushToRouter = useCallback(
    (params: URLSearchParams, options: NavigateOptions = {}) => {
      router.push(`${pathname}?${params.toString()}`, options);
    },
    [router, pathname]
  );

  const shallowPush = (params: URLSearchParams) => {
    window.history.pushState(null, '', `?${params.toString()}`);
  };

  return {
    params,
    router,
    pathname,
    searchParams,
    createQueryParams,
    pushToRouter,
    shallowPush,
  };
};

export default useAppNavigation;
