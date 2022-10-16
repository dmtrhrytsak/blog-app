import { PropsWithChildren } from 'react';

import { S } from './H6.styled';

const H6 = ({ children, ...props }: PropsWithChildren) => {
  return <S.H6 {...props}>{children}</S.H6>;
};

export { H6 };
