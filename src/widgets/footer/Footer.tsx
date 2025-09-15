import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const footerStyles = css`
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    padding: 2rem 1rem;
    margin-top: auto;
    text-align: center;
`;

const contentStyles = css`
    max-width: 100%;
    margin: 0 auto;
`;

const titleStyles = css`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #ecf0f1;
`;

const descriptionStyles = css`
    font-size: 0.875rem;
    color: #bdc3c7;
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;

const linksStyles = css`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
`;

const linkStyles = css`
    color: #95a5a6;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;

    &:hover {
        color: #3498db;
    }
`;

const copyrightStyles = css`
    font-size: 0.75rem;
    color: #7f8c8d;
    border-top: 1px solid #34495e;
    padding-top: 1rem;
    margin-top: 1rem;
`;


export const Footer = () => {
    return (
        <footer css={footerStyles}>
            <div css={contentStyles}>
                <h3 css={titleStyles}>Allight</h3>
                <p css={descriptionStyles}>
                    React 19 + Vite SPA integrating with the allight-server API
                </p>


                <div css={linksStyles}>
                    <Link to="/" css={linkStyles}>
                        Home
                    </Link>
                    <Link to="/profile" css={linkStyles}>
                        Profile
                    </Link>
                    <Link to="/settings" css={linkStyles}>
                        Settings
                    </Link>
                </div>

                <div css={copyrightStyles}>
                    © 2024 wdtt-friend. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
