import { useQuery, UseQueryOptions } from 'react-query';

import { PermissionLevels } from '@shared/types';

import { call } from '../utils';

const useGetPermissions = (
  queryOptions?: Omit<
    UseQueryOptions<PermissionLevels, Error>,
    'queryKey' | 'queryFn'
  >
) => {
  const queryResult = useQuery<PermissionLevels, Error>(
    'permissions',
    () =>
      call('/permissions', {
        method: 'GET',
      }),
    queryOptions
  );

  return queryResult;
};

export default useGetPermissions;
