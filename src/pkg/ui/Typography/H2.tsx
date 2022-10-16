import { PropsWithChildren } from 'react';

import { S } from './H2.styled';

export const H2 = ({ children, ...props }: PropsWithChildren) => {
  return <S.H2 {...props}>{children}</S.H2>;
};

