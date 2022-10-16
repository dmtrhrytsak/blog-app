import { createEntityAdapter } from '@reduxjs/toolkit';

import { Comment } from './types';

export const commentsAdapter = createEntityAdapter<Comment>({});
