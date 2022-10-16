import { PropsWithChildren } from 'react';

import { S } from './H5.styled';

const H5 = ({ children, ...props }: PropsWithChildren) => {
  return <S.H5 {...props}>{children}</S.H5>;
};

export { H5 };
