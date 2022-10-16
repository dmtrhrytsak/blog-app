import { css } from 'styled-components';

const variants = {
  primary: css`
    background-color: ${({ theme }) =>
      theme.buttons.variants.primary.backgroundColor};
    color: ${({ theme }) => theme.buttons.variants.primary.color};

    &:hover {
      background-color: ${({ theme }) =>
        theme.buttons.variants.primary.hover.backgroundColor};
      color: ${({ theme }) => theme.buttons.variants.primary.hover.color};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) =>
      theme.buttons.variants.secondary.backgroundColor};
    color: ${({ theme }) => theme.buttons.variants.secondary.color};
  `,
  text: css`
    background-color: ${({ theme }) =>
      theme.buttons.variants.text.backgroundColor};
    color: ${({ theme }) => theme.buttons.variants.text.color};

    &:hover {
      background-color: ${({ theme }) =>
        theme.buttons.variants.text.hover.backgroundColor};
      color: ${({ theme }) => theme.buttons.variants.text.hover.color};
    }
  `,
  link: css`
    background-color: ${({ theme }) =>
      theme.buttons.variants.link.backgroundColor};
    color: ${({ theme }) => theme.buttons.variants.link.color};
    text-decoration: ${({ theme }) =>
      theme.buttons.variants.link.textDecoration};
  `,
  outline: css`
    background-color: ${({ theme }) =>
      theme.buttons.variants.outline.backgroundColor};
    color: ${({ theme }) => theme.buttons.variants.outline.color};
    border: ${({ theme }) => theme.buttons.variants.outline.border};

    &:hover {
      background-color: ${({ theme }) =>
        theme.buttons.variants.outline.hover.backgroundColor};
      color: ${({ theme }) => theme.buttons.variants.outline.hover.color};
    }
  `,
};

const sizes = {
  small: css`
    font-size: ${({ theme }) => theme.buttons.sizes.small.fontSize};
    padding: ${({ theme }) => theme.buttons.sizes.small.padding};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.buttons.sizes.medium.fontSize};
    padding: ${({ theme }) => theme.buttons.sizes.medium.padding};
  `,
  large: css`
    font-size: ${({ theme }) => theme.buttons.sizes.large.fontSize};
    padding: ${({ theme }) => theme.buttons.sizes.large.padding};
  `,
};

export const styles = {
  variants,
  sizes,
};
