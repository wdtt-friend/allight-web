import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

const mainStyles = css`
    z-index: 100;
    background: #fff;
    flex: 1;
    padding: 20px;
`;

export const Main = () => {
    return (
        <main css={mainStyles}>
            <Outlet />
        </main>
    );
};
