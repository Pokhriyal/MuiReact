import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { ICONS } from '@shared/assets';
import Link from '@shared/components/link';
import labels from '@shared/labels';
import routes from '@shared/routes';

const shopCountries = [
  labels['features.shop-settings.shop.country.alisa-viejo.label'],
  labels['features.shop-settings.shop.country.los-angeles.label'],
  labels['features.shop-settings.shop.country.santa-cruz.label'],
  labels['features.shop-settings.shop.country.torrance.label'],
  labels['features.shop-settings.shop.country.anaheim.label'],
  labels['features.shop-settings.shop.country.monterey.label'],
  labels['features.shop-settings.shop.country.santa.monica.label'],
  labels['features.shop-settings.shop.country.valencia.label'],
];

const ShopSettings = () => {
  return (
    <Box data-testid="ShopSettings" component="section">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: { xs: 30, md: 60 },
        }}
      >
        <Typography
          component="h1"
          variant="fv-bold-21"
          sx={{
            mb: { xs: 3.6, md: 6 },
            fontSize: {
              md: 24,
            },
          }}
        >
          {labels['features.shop-settings.title']}
        </Typography>
        <Button variant="contained" color="secondary">
          {labels['features.shop-settings.add-shop-button.label']}
        </Button>
      </Box>

      <Grid
        container
        columnSpacing={{ xs: 21, md: 15 }}
        rowSpacing={10}
        sx={{ width: { xs: 402, md: 515 } }}
      >
        {shopCountries.map((country, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Link href={routes.gearsForFears()}>
              <Paper
                elevation={2}
                sx={{
                  width: { md: 250 },
                  height: 60,
                  display: 'flex',
                  p: (theme) => theme.spacing(21, 10, 21, 24),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="fv-semiBold-14">
                  {labels['features.shop-settings.shop-name.label']} - {country}
                </Typography>
                <Avatar
                  sx={{
                    bgcolor: 'secondary.main',
                    width: 30,
                    height: 30,
                    border: (theme) => `1px solid ${theme.palette.amber.main}`,
                  }}
                >
                  <Image
                    src={ICONS.shopTruck}
                    alt={country}
                    width={14}
                    height={13}
                  />
                </Avatar>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopSettings;
