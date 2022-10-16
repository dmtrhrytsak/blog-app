import { useNavigate } from 'react-router-dom';

export const routes = {
  home: '/',
  posts: '/posts',
  post: '/posts/:postId',
  edit: '/posts/:postId/edit',
};

export const getHomeRoute = () => routes.home;
export const getPostsRoute = () => routes.posts;
export const getPostRoute = () => routes.post;
export const getEditRoute = () => routes.edit;
export const getRoutes = () => ({
  home: getHomeRoute(),
  posts: getPostsRoute(),
  post: getPostRoute(),
  edit: getEditRoute(),
});

export const makePostRoute = (postId: number) =>
  routes.post.replace(':postId', String(postId));
export const makeEditRoute = (postId: number) =>
  routes.edit.replace(':postId', String(postId));

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const routes = getRoutes();

  return {
    navigateToHome: () => navigate(routes.home),
    navigateToPosts: () => navigate(routes.posts),
    navigateToPost: (id: number) => navigate(`${routes.posts}/${id}`),
  };
};
