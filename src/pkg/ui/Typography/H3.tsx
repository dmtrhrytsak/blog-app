import { PropsWithChildren } from 'react';

import { S } from './H3.styled';

export const H3 = ({ children, ...props }: PropsWithChildren) => {
  return <S.H3 {...props}>{children}</S.H3>;
};
