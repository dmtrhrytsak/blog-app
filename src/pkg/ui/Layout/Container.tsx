import { PropsWithChildren } from 'react';

import { S } from './Container.styled';

const Container = ({ children, ...props }: PropsWithChildren) => {
  return <S.Container {...props}>{children}</S.Container>;
};

export { Container };
