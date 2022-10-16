import { PropsWithChildren } from 'react';

import { S } from './Body1.styled';

export const Body1 = ({ children, ...props }: PropsWithChildren) => {
  return <S.Body1 {...props}>{children}</S.Body1>;
};
