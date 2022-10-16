import { palette } from './palette';

export const buttons = {
  variants: {
    primary: {
      backgroundColor: palette.primary.main,
      color: palette.common.white,
      hover: {
        backgroundColor: palette.primary.dark,
        color: palette.common.white,
      },
    },
    secondary: {
      backgroundColor: palette.secondary.main,
      color: palette.common.white,
      hover: {
        backgroundColor: palette.secondary.dark,
        color: palette.common.white,
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: palette.primary.main,
      hover: {
        backgroundColor: palette.primary.light,
        color: palette.primary.dark,
      },
    },
    link: {
      backgroundColor: 'transparent',
      color: palette.primary.main,
      textDecoration: 'underline',
      hover: {
        backgroundColor: 'transparent',
        color: palette.primary.dark,
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: palette.primary.main,
      border: `1px solid ${palette.primary.main}`,
      hover: {
        backgroundColor: palette.primary.light,
        color: palette.primary.dark,
      },
    },
  },
  sizes: {
    small: {
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem',
    },
    medium: {
      fontSize: '1rem',
      padding: '0.5rem 1rem',
    },
    large: {
      fontSize: '1.25rem',
      padding: '0.75rem 1.5rem',
    },
  },
};
