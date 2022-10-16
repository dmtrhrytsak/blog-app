import { PropsWithChildren } from 'react';

import { S } from './Body2.styled';

export const Body2 = ({ children, ...props }: PropsWithChildren) => {
  return <S.Body2 {...props}>{children}</S.Body2>;
};
