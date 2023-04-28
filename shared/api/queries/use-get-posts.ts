import { useQuery, UseQueryOptions } from 'react-query';

import { Post } from '@shared/types';

import { callJsonPlaceholder } from '../utils';

const useGetPosts = (
  queryOptions?: Omit<UseQueryOptions<Post[], Error>, 'queryKey' | 'queryFn'>
) => {
  const queryResult = useQuery<Post[], Error>(
    'posts',
    () =>
      callJsonPlaceholder('/posts', {
        method: 'GET',
      }),
    queryOptions
  );

  return queryResult;
};

export default useGetPosts;
