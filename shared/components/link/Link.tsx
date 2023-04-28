/* eslint-disable no-restricted-imports */

import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  muiLinkProps?: MUILinkProps;
}

const Link = ({ children, muiLinkProps = undefined, ...rest }: LinkProps) => {
  return (
    <NextLink data-testid="Link" {...rest} passHref>
      <MUILink underline="none" {...muiLinkProps}>
        {children}
      </MUILink>
    </NextLink>
  );
};

export default Link;
