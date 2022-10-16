import { PropsWithChildren } from 'react';

import { S } from './H1.styled';

export const H1 = ({ children, ...props }: PropsWithChildren) => {
  return <S.H1 {...props}>{children}</S.H1>;
};

