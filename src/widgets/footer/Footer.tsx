import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../app/router/routes';

const footerStyles = css`
    background-color: #fff;
    color: #222;
`;

const contentStyles = css`
    max-width: 100%;
`;

const linksStyles = css`
    display: flex;
    justify-content: center;
    gap: 0.75rem;
`;

const linkStyles = css`
    font-size: 0.875rem;
`;

const copyrightStyles = css`
    font-size: 0.75rem;
    text-align: center;
`;

export const Footer = () => {
    return (
        <footer css={footerStyles}>
            <div css={contentStyles}>
                <div css={linksStyles}>
                    <Link to={ROUTES.HOME} css={linkStyles}>
                        Home
                    </Link>
                    <Link to={ROUTES.SEARCH} css={linkStyles}>
                        Search
                    </Link>
                    <Link to={ROUTES.CREW} css={linkStyles}>
                        Crew
                    </Link>
                    <Link to={ROUTES.MESSAGE} css={linkStyles}>
                        Message
                    </Link>
                    <Link to={ROUTES.PROFILE} css={linkStyles}>
                        Profile
                    </Link>
                </div>

                <div css={copyrightStyles}>
                    © 2025 wdtt-friend. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
