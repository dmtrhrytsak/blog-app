import styed from 'styled-components';

import { PostDetails } from '../pkg/posts/PostDetails';
import { Comments } from '../pkg/comments/Comments';
import { AddCommentForm } from '../pkg/comments/AddCommentForm';

const PostPage = styed.div``;

const PostPagePostDetails = styed(PostDetails)`
    background-color: ${({ theme }) => theme.palette.common.white};
    margin-bottom: ${({ theme }) => theme.utils.rem('32px')};
`;

const PostPageComments = styed(Comments)`
  margin-bottom: ${({ theme }) => theme.utils.rem('12px')};
`;

const PostPageAddCommentForm = styed(AddCommentForm)``;

export const S = {
  PostPage,
  PostPagePostDetails,
  PostPageComments,
  PostPageAddCommentForm,
};
