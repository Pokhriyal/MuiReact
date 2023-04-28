import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useGetPost, useUpdatePost } from '@shared/api';
import { Post } from '@shared/types';

const usePostInfo = () => {
  const router = useRouter();
  const {
    query: { postId },
  } = router;
  const numericPostId = Number(postId);

  const { data, isError, isLoading } = useGetPost(
    {
      postId: numericPostId,
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!numericPostId,
      onError(error) {
        console.log(error.message);
      },
    }
  );
  const { updatePost, isLoading: isSubmitting } = useUpdatePost({
    postId: numericPostId,
  });

  const handleSubmit = useCallback(
    (post: Partial<Post>) => {
      updatePost(post, {
        onSuccess(data) {
          alert(JSON.stringify(data, null, 2));
        },
        onError(error) {
          console.log(error.message);
        },
      });
    },
    [updatePost]
  );

  return {
    postInfo: data,
    isPostInfoLoading: isLoading || isError,
    handleSubmit,
    isSubmitting,
  };
};

export default usePostInfo;
