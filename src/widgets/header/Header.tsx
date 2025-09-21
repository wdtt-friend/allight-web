import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/router/routes';

const headerStyles = css`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    z-index: 100;
`;

const logoStyles = css`
    a {
        color: #222;
        font-size: 1.8rem;
        font-weight: 600;
    }
`;

const actionItemsStyles = css`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const actionItemStyles = css`
    cursor: pointer;
`;

export const Header = () => {
    const handleSearchClick = () => {
        alert('검색');
    };

    const handleNotificationClick = () => {
        alert('알림');
    };

    return (
        <header css={headerStyles}>
            <div css={logoStyles}>
                <Link
                    to={ROUTES.HOME}
                    aria-label="Allight 홈페이지로 이동"
                    title="Allight 홈페이지로 이동"
                >
                    ALLIGHT
                </Link>
            </div>

            <div css={actionItemsStyles}>
                <div onClick={handleSearchClick} css={actionItemStyles}>
                    검색
                </div>
                <div onClick={handleNotificationClick} css={actionItemStyles}>
                    알림
                </div>
            </div>
        </header>
    );
};
