import { useCallback } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import usePostInfo from './use-post-info';

const Post = () => {
  const { isPostInfoLoading, postInfo, handleSubmit, isSubmitting } =
    usePostInfo();

  const handlePostBlur = useCallback(
    (event: React.FocusEvent<HTMLParagraphElement>) => {
      const { textContent } = event.target;

      if (textContent?.trim()) {
        handleSubmit({
          body: textContent,
        });
      }
    },
    [handleSubmit]
  );

  if (isPostInfoLoading) {
    return <CircularProgress />;
  }

  return (
    <Card sx={{ maxWidth: 345, m: 10 }}>
      <CardContent>
        <Typography
          color="text.primary"
          gutterBottom
          variant="fv-regular-20"
          component="h1"
        >
          {postInfo?.title}
        </Typography>
        <Typography
          color="text.secondary"
          variant="fv-regular-16"
          component="p"
          sx={{
            border: 1,
            borderColor: isSubmitting ? 'watusi.main' : 'gullGray.main',
            borderRadius: 2,
            p: 8,
          }}
          contentEditable={!isSubmitting}
          suppressContentEditableWarning
          onBlur={handlePostBlur}
        >
          {postInfo?.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
