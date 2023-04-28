import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { ICONS } from '@shared/assets';
import Link from '@shared/components/link';
import labels from '@shared/labels';
import routes from '@shared/routes';

const settingsData = [
  {
    icon: ICONS.detailsBranding,
    iconSize: {
      width: 15,
      height: 18,
    },
    text: labels['features.company-settings.details-and-branding.label'],
    route: routes.detailsAndBranding(),
  },
  {
    icon: ICONS.subscriptionAndBilling,
    iconSize: {
      width: 24,
      height: 24,
    },
    text: labels['features.company-settings.subscription-and-billing.label'],
    route: routes.subscriptionAndBilling(),
  },
  {
    icon: ICONS.employees,
    iconSize: {
      width: 22,
      height: 15,
    },
    text: labels['features.company-settings.employees.label'],
    route: routes.employees(),
  },
  {
    icon: ICONS.serviceMenu,
    iconSize: {
      width: 25,
      height: 24,
    },
    text: labels['features.company-settings.service-menu.label'],
    route: routes.serviceMenu(),
  },
  {
    icon: ICONS.serviceSchedule,
    iconSize: {
      width: 25,
      height: 21,
    },
    text: labels['features.company-settings.service-schedule.label'],
    route: routes.serviceSchedule(),
  },
  {
    icon: ICONS.liveDataProgram,
    iconSize: {
      width: 24,
      height: 16,
    },
    text: labels['features.company-settings.live-data-program.label'],
    route: routes.liveDataProgram(),
  },
];

const CompanySettings = () => {
  return (
    <Box data-testid="CompanySettings" component="section">
      <Typography
        component="h1"
        variant="fv-bold-21"
        sx={{
          mb: { xs: 36, md: 60 },
          fontSize: {
            md: 24,
          },
        }}
      >
        {labels['features.company-settings.title']}
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 24, md: 30 }}
        rowSpacing={30}
        sx={{ width: { xs: 402, md: 492 } }}
      >
        {settingsData.map((data, index) => (
          <Grid key={index} item xs={4}>
            <Link href={data.route}>
              <Card
                sx={{
                  width: { xs: 110, md: 134 },
                  height: { xs: 160, md: 172 },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 0,
                    px: 10,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: 'amber.main',
                      width: 60,
                      height: 60,
                      mt: 20,
                    }}
                  >
                    <Image
                      src={data.icon}
                      alt={data.text}
                      width={data.iconSize.width}
                      height={data.iconSize.height}
                    />
                  </Avatar>
                  <Typography
                    variant="fv-semiBold-14"
                    sx={{ mt: { xs: 20, md: 25 }, textAlign: 'center' }}
                  >
                    {data.text}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanySettings;
