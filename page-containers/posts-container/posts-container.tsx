import Box from '@mui/material/Box';
import Head from 'next/head';

import labels from '@shared/labels';

import Posts from '@features/posts';

const PostsContainer = () => {
  return (
    <Box component="article" data-testid="PostsContainer">
      <Head>
        <title>{labels['page-containers.posts-container.title']}</title>
      </Head>

      <Posts />
    </Box>
  );
};

export default PostsContainer;
