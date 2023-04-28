import type { NextPage } from 'next';

import Layout from '@shared/components/layout';

import PostsContainer from '@page-containers/posts-container';

const PostsPage: NextPage = () => {
  return (
    <Layout>
      <PostsContainer />
    </Layout>
  );
};

export default PostsPage;
