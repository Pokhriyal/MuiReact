import Container from '@mui/material/Container';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Container
    data-testid="Layout"
    component="main"
    role="main"
    maxWidth="lg"
    disableGutters
  >
    {children}
  </Container>
);

export default Layout;
