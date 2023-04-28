import Box from '@mui/material/Box';
import Head from 'next/head';
import { useRouter } from 'next/router';

import labels from '@shared/labels';

import Post from '@features/post';

const PostContainer = () => {
  const router = useRouter();
  const {
    query: { postId },
  } = router;

  return (
    <Box component="article" data-testid="PostContainer">
      <Head>
        <title>
          {labels['page-containers.post-container.title']} {postId}
        </title>
      </Head>

      <Post />
    </Box>
  );
};

export default PostContainer;
