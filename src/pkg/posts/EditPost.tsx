import { PostForm } from './PostForm';
import type { PostWithoutId } from './types';
import { useAppSelector } from '../redux/hooks';
import { useAppNavigate } from '../../app/routes';
import { selectPostById } from './selectors';
import { toast } from '../../pkg/toast/toast';
import { usePostIdParam } from './params';
import { usePostActions } from './actions';

export const EditPost = () => {
  const { postId } = usePostIdParam();
  const post = useAppSelector((state) => selectPostById(state, postId));
  const { updatePost } = usePostActions();
  const { navigateToPost } = useAppNavigate();

  if (!post) {
    return null;
  }

  const handleEditPost = async (postValues: PostWithoutId) => {
    try {
      await updatePost({ id: postId, ...postValues });
      toast.success('Post updated successfully');
      navigateToPost(postId);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <PostForm
      initialValues={post}
      buttonText='Edit'
      onSubmit={handleEditPost}
    />
  );
};
