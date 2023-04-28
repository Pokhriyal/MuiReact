import { useMutation, UseMutationOptions } from 'react-query';

import { Post } from '@shared/types';

import { callJsonPlaceholder } from '../utils';

const useUpdatePost = (
  { postId }: { postId: Post['id'] },
  mutationOptions?: Omit<
    UseMutationOptions<Partial<Post>, Error, Partial<Post>>,
    'mutationKey' | 'mutationFn'
  >
) => {
  const { mutate, ...rest } = useMutation<Partial<Post>, Error, Partial<Post>>(
    (data) =>
      callJsonPlaceholder(`/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    mutationOptions
  );

  return {
    updatePost: mutate,
    ...rest,
  };
};

export default useUpdatePost;
