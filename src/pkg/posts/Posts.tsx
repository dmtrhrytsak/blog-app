import Grid from '@mui/material/Grid';

import { S } from './StyledPosts';
import { useAppSelector } from '../redux/hooks';
import { selectAllPosts } from './selectors';
import { usePostActions } from './actions';
import { toast } from '../toast/toast';

export const Posts = () => {
  const posts = useAppSelector(selectAllPosts);
  const { deletePost } = usePostActions();

  const handleDeletePost = async (id: number) => {
    try {
      await deletePost(id);
      toast.success('Post deleted!');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <S.Posts>
      <S.PostsHeading>Posts</S.PostsHeading>

      <Grid container spacing={3} alignItems='stretch'>
        {posts.map((post) => (
          <Grid
            key={post.id}
            item
            xs={12}
            sm={6}
            display='flex'
            flexDirection='column'
          >
            <S.PostsPost
              id={post.id}
              title={post.title}
              body={post.body}
              onDelete={handleDeletePost}
            />
          </Grid>
        ))}
      </Grid>
    </S.Posts>
  );
};
