import { useState } from 'react';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { ICONS } from '@shared/assets';

interface CollapsibleListPops {
  children: React.ReactNode[];
}

const CollapsibleList = ({ children }: CollapsibleListPops) => {
  const [isOpen, setIsOpen] = useState(false);

  const [firstChild, ...restChildren] = children;

  if (!firstChild) {
    return null;
  }

  return (
    <Grid container data-testid="CollapsibleList" sx={{ borderRadius: 10 }}>
      <Grid item xs={10} sx={{ bgcolor: 'mischka.main', pl: 13 }}>
        <List disablePadding>
          <ListItem disablePadding sx={{ my: 5 }}>
            {firstChild}
          </ListItem>
          {isOpen &&
            restChildren.map((child, index) => (
              <ListItem disablePadding key={index} sx={{ my: 5 }}>
                {child}
              </ListItem>
            ))}
        </List>
      </Grid>
      {restChildren.length > 0 && (
        <Grid
          item
          xs={2}
          sx={{
            bgcolor: 'mischka50.main',
            p: 1,
          }}
          container
          justifyContent="flex-end"
          alignItems={isOpen ? 'flex-start' : 'center'}
        >
          <Grid item>
            {!isOpen && (
              <Typography variant="fv-semiBold-12">
                + {restChildren.length}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <IconButton
              size="small"
              onClick={() => setIsOpen(!isOpen)}
              sx={{ p: 0 }}
            >
              <Image
                src={isOpen ? ICONS.arrowDropUp : ICONS.arrowDropDown}
                alt=""
                width={18}
                height={18}
              />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default CollapsibleList;
