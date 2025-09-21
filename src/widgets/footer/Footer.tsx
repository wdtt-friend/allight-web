import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import { 
    AiOutlineHome, 
    AiOutlineSearch, 
    AiOutlineTeam, 
    AiOutlineComment, 
    AiOutlineUser 
} from 'react-icons/ai';

const footerStyles = css`
    background-color: #fff;
    color: #222;
    padding: 12px 0 32px 0;
    border-top: 1px solid #eee;
`;

const contentStyles = css`
    width: 100%;
`;

const linksStyles = css`
    display: flex;
`;

const linkStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222;
    flex: 1;
`;

const iconStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Footer = () => {
    return (
        <footer css={footerStyles}>
            <div css={contentStyles}>
                <div css={linksStyles}>
                    <Link to={ROUTES.HOME} css={linkStyles}>
                        <span css={iconStyles}>
                            <AiOutlineHome size={28} />
                        </span>
                    </Link>
                    <Link to={ROUTES.SEARCH} css={linkStyles}>
                        <span css={iconStyles}>
                            <AiOutlineSearch size={28} />
                        </span>
                    </Link>
                    <Link to={ROUTES.CREW} css={linkStyles}>
                        <span css={iconStyles}>
                            <AiOutlineTeam size={28} />
                        </span>
                    </Link>
                    <Link to={ROUTES.MESSAGE} css={linkStyles}>
                        <span css={iconStyles}>
                            <AiOutlineComment size={28} />
                        </span>
                    </Link>
                    <Link to={ROUTES.PROFILE} css={linkStyles}>
                        <span css={iconStyles}>
                            <AiOutlineUser size={28} />
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};