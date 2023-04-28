import { useQuery, UseQueryOptions } from 'react-query';

import { Post } from '@shared/types';

import { callJsonPlaceholder } from '../utils';

const useGetPost = (
  { postId }: { postId: Post['id'] },
  queryOptions?: Omit<UseQueryOptions<Post, Error>, 'queryKey' | 'queryFn'>
) => {
  const queryResult = useQuery<Post, Error>(
    `posts-${postId}`,
    () =>
      callJsonPlaceholder(`/posts/${postId}`, {
        method: 'GET',
      }),
    queryOptions
  );

  return queryResult;
};

export default useGetPost;
