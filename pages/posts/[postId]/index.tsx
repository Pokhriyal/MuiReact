import type { NextPage } from 'next';

import Layout from '@shared/components/layout';

import PostContainer from '@page-containers/post-container';

const PostPage: NextPage = () => {
  return (
    <Layout>
      <PostContainer />
    </Layout>
  );
};

export default PostPage;
