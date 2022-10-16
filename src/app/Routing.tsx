import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { PostPage } from '../pages/PostPage';
import { PostsPage } from '../pages/PostsPage';
import { EditPost } from '../pkg/posts/EditPost';
import { getRoutes } from './routes';

export const Routing = () => {
  const { home, posts, post, edit } = getRoutes();

  return (
    <Routes>
      <Route path={home}>
        <Route index element={<HomePage />} />

        <Route path={posts}>
          <Route index element={<PostsPage />} />
          <Route path={post} element={<PostPage />} />
          <Route path={edit} element={<EditPost />} />
        </Route>

        <Route path='*' element={<Navigate to={home} replace />} />
      </Route>
    </Routes>
  );
};
