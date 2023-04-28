import { useQuery, UseQueryOptions } from 'react-query';

import { Employees } from '@shared/types';

import { call } from '../utils';

const useGetEmployees = (
  queryOptions?: Omit<UseQueryOptions<Employees, Error>, 'queryKey' | 'queryFn'>
) => {
  const queryResult = useQuery<Employees, Error>(
    'employees',
    () =>
      call('/employees', {
        method: 'GET',
      }),
    queryOptions
  );

  return queryResult;
};

export default useGetEmployees;
