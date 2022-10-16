export type Comment = {
  id: number;
  postId: number;
  body: string;
};

export type CommentWithoutId = Omit<Comment, 'id'>;

export type CommentsState = {
  loading: boolean;
  error: string | null;
};

export type FetchCommentsRequest = void;
export type FetchCommentsResponse = Comment[];
export type AddCommentRequest = Omit<Comment, 'id'>;
export type AddCommentResponse = Comment;
