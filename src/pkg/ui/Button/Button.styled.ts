import styled from 'styled-components';

import type { StyledButtonProps } from './types';
import { styles } from './styles';

const Button = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;

  cursor: pointer;

  transition: background-color
    ${({ theme }) => theme.transitions.duration.shortest}ms ease-in-out;

  ${({ variant }) => styles.variants[variant ?? 'primary']}
  ${({ size }) => styles.sizes[size ?? 'medium']}
`;

export const S = {
  Button,
};
