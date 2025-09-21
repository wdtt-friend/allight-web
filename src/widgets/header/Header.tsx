import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import {
    AiOutlineSearch,
    AiOutlineBell,
} from 'react-icons/ai';
// import mainLogo from '@/assets/main-logo.png';

const headerStyles = css`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    z-index: 100;
    padding: 12px 20px;
`;

const logoStyles = css`
    a {
        color: #222;
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
    }
`;

// const logoImageStyles = css`
//     height: 32px;
//     width: auto;
// `;

const actionItemsStyles = css`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const actionItemStyles = css`
    cursor: pointer;
`;

const iconStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
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
                    {/* <img 
                        src={mainLogo} 
                        alt="Allight Main Logo" 
                        css={logoImageStyles}
                    /> */}
                    Logo
                </Link>
            </div>

            <div css={actionItemsStyles}>
                <div onClick={handleSearchClick} css={actionItemStyles}>
                    <span css={iconStyles}>
                        <AiOutlineSearch size={24} />
                    </span>
                </div>
                <div onClick={handleNotificationClick} css={actionItemStyles}>
                    <span css={iconStyles}>
                        <AiOutlineBell size={24} />
                    </span>
                </div>
            </div>
        </header>
    );
};
