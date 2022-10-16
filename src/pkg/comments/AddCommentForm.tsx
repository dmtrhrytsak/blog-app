import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Button } from '../ui/Button/Button';
import { usePostIdParam } from '../posts/params';
import { useCommentsActions } from './actions';
import { toast } from '../toast/toast';

export const AddCommentForm = ({ className }: { className?: string }) => {
  const [body, setBody] = useState('');
  const { postId } = usePostIdParam();
  const { addComment } = useCommentsActions();

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setBody(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addComment({ postId, body });
      resetForm();
      toast.success('Comment added!');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const resetForm = () => {
    setBody('');
  };

  return (
    <Box
      component='form'
      display='flex'
      flexDirection='column'
      onSubmit={handleSubmit}
      className={className}
    >
      <TextField
        name='body'
        label='Body'
        placeholder='Whoa, what a shitpost!'
        value={body}
        rows={4}
        margin='normal'
        multiline
        onChange={handleCommentChange}
      />
      <Button type='submit'>Add Comment</Button>
    </Box>
  );
};
