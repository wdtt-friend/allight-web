import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const headerStyles = css`
    position: sticky;
    top: 0;
    z-index: 100;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
`;

const titleStyles = css`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.5px;
`;

const navStyles = css`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 0.75rem;
`;

const navLinkStyles = css`
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: all 0.2s ease;
    text-decoration: none;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        transform: translateY(-1px);
    }
`;

export const Header = () => {
    return (
        <header css={headerStyles}>
            <h1 css={titleStyles}>Allight</h1>
            <nav css={navStyles}>
                <Link to="/" css={navLinkStyles}>
                    Home
                </Link>
                <Link to="/profile" css={navLinkStyles}>
                    Profile
                </Link>
                <Link to="/settings" css={navLinkStyles}>
                    Settings
                </Link>
            </nav>
        </header>
    );
};
