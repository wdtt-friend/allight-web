import { css, Global } from '@emotion/react';

export const appGlobalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        font-family:
            -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        width: 100%;
        max-width: 480px;
        margin: 0 auto;
        min-height: 100vh;
        background-color: #fff;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
    }

    input,
    textarea {
        font-family: inherit;
    }

    /* 스크롤바 스타일링 */
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
    }
`;

export const GlobalStyles = () => <Global styles={appGlobalStyles} />;
