export type Post = {
  id: number;
  title: string;
  body: string;
};

export type PostWithoutId = Omit<Post, 'id'>;
export type PostId = Post['id'];

export type PostsState = {
  loading: boolean;
  error: string | null;
};

export type FetchPostsRequest = void;
export type FetchPostsResponse = Post[];
export type AddPostRequest = PostWithoutId;
export type AddPostResponse = Post;
export type UpdatePostRequest = Post;
export type UpdatePostResponse = Post;
export type DeletePostRequest = number;
export type DeletePostResponse = { postId: number };

export type PostFormProps = {
  initialValues?: PostWithoutId;
  buttonText?: string;
  onSubmit: (post: PostWithoutId) => void;
};
