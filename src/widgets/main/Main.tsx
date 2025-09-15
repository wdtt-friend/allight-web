import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

const mainStyles = css`
    z-index: 100;
    background: #fff;
    flex: 1;
`;

export const Main = () => {
    return (
        <main css={mainStyles}>
            <Outlet />
        </main>
    );
};
