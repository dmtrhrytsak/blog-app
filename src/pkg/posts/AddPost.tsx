import { PostForm } from './PostForm';
import type { PostWithoutId } from './types';
import { usePostActions } from './actions';
import { toast } from '../toast/toast';
import { useAppNavigate } from '../../app/routes';

export const AddPost = () => {
  const { addPost } = usePostActions();
  const { navigateToHome } = useAppNavigate();

  const handleAddPost = async (post: PostWithoutId) => {
    try {
      await addPost(post);
      toast.success('Post added!');
      navigateToHome();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return <PostForm buttonText='Add' onSubmit={handleAddPost} />;
};
