import { useGetPosts } from '@shared/api';

const usePostsInfo = () => {
  const { data, isError, isLoading } = useGetPosts({
    refetchOnWindowFocus: false,
    onError(error) {
      console.log(error.message);
    },
  });

  return {
    postsInfo: data,
    isPostsInfoLoading: isLoading || isError,
  };
};

export default usePostsInfo;
