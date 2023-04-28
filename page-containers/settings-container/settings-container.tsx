import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Head from 'next/head';

import labels from '@shared/labels';

import CompanySettings from '@features/company-settings';
import ShopSettings from '@features/shop-settings';

const SettingsContainer = () => {
  return (
    <Box component="article" data-testid="SettingsContainer">
      <Head>
        <title>{labels['page-containers.settings-container.title']}</title>
      </Head>

      <Grid container component="section" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: 'mischka.main',
            display: 'flex',
            justifyContent: 'center',
            pt: { xs: 90, md: 180 },
            pb: { xs: 30 },
          }}
        >
          <CompanySettings />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: 'white.main',
            display: 'flex',
            justifyContent: 'center',
            pt: { xs: 50, md: 180 },
            pb: { xs: 44 },
          }}
        >
          <ShopSettings />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SettingsContainer;
