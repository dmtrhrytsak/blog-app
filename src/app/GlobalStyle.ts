import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.palette.body.background};
        color: ${({ theme }) => theme.palette.body.color};

        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize}px;
        font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    }
`;
