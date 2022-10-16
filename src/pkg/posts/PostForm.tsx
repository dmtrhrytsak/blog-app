import { useState } from 'react';
import { TextField } from '@mui/material';

import { S } from './StyledPostForm';
import type { PostFormProps } from './types';
import { Button } from '../ui/Button/Button';

export const PostForm = ({
  initialValues = { title: '', body: '' },
  buttonText = 'Submit',
  onSubmit,
}: PostFormProps) => {
  const [post, setPost] = useState(initialValues);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(post);
  };

  return (
    <S.PostForm onSubmit={handleSubmit}>
      <TextField
        label='Title'
        name='title'
        value={post.title}
        onChange={handleChange}
      />
      <TextField
        name='body'
        label='Body'
        value={post.body}
        rows={4}
        multiline
        onChange={handleChange}
      />
      <Button type='submit'>{buttonText}</Button>
    </S.PostForm>
  );
};
