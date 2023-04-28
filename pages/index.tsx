import type { NextPage } from 'next';

import Layout from '@shared/components/layout';

import SettingsContainer from '@page-containers/settings-container';

const SettingsPage: NextPage = () => {
  return (
    <Layout>
      <SettingsContainer />
    </Layout>
  );
};

export default SettingsPage;
