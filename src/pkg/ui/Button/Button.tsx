import { PropsWithChildren } from 'react';

import type { StyledButtonProps } from './types';
import { S } from './Button.styled';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & StyledButtonProps;

export const Button = ({
  type,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <S.Button type={type} {...props}>
      {children}
    </S.Button>
  );
};
