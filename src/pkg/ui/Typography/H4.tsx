import { PropsWithChildren } from 'react';

import { S } from './H4.styled';

const H4 = ({ children, ...props }: PropsWithChildren) => {
  return <S.H4 {...props}>{children}</S.H4>;
};

export { H4 };
