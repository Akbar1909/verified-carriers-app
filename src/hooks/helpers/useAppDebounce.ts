import { useDebounce } from '@uidotdev/usehooks';

type AppDebounceParametersType<T> = Parameters<typeof useDebounce<T>>;

const useAppDebounce = <T = string>(
  value: AppDebounceParametersType<T>['0'],
  delay = 300
) =>
  useDebounce(typeof value !== 'string' ? value : String(value).trim(), delay);

export default useAppDebounce;
