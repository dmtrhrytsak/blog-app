import { PropsWithChildren } from 'react';
import { S } from './Content.styled';

const Content = ({ children, ...props }: PropsWithChildren) => {
  return <S.Content {...props}>{children}</S.Content>;
};

export { Content };
