import { useQuery, UseQueryOptions } from 'react-query';

import { Shops } from '@shared/types';

import { call } from '../utils';

const useGetShops = (
  queryOptions?: Omit<UseQueryOptions<Shops, Error>, 'queryKey' | 'queryFn'>
) => {
  const queryResult = useQuery<Shops, Error>(
    'shops',
    () =>
      call('/shops', {
        method: 'GET',
      }),
    queryOptions
  );

  return queryResult;
};

export default useGetShops;
