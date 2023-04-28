import ArticleIcon from '@mui/icons-material/Article';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Link from '@shared/components/link';
import routes from '@shared/routes';

import usePostsInfo from './use-posts-info';

const Posts = () => {
  const { isPostsInfoLoading, postsInfo } = usePostsInfo();

  if (isPostsInfoLoading) {
    return <CircularProgress />;
  }

  return (
    <List data-testid="Posts">
      {postsInfo?.map(({ id, title }) => (
        <ListItem key={id} disablePadding>
          <Link href={routes.post(id)} passHref>
            <ListItemButton component="a">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText
                primary={title}
                primaryTypographyProps={{ variant: 'fv-regular-16' }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Posts;
