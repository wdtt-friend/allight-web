import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { css } from '@emotion/react';

const pageStyles = css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

createRoot(document.getElementById('root')!).render(
    <div css={pageStyles}>
        <App />
    </div>
);
