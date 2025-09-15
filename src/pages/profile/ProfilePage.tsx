import { css } from '@emotion/react';
import { Header } from '../../widgets/header/Header';
import { Footer } from '../../widgets/footer/Footer';

const pageStyles = css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const mainStyles = css`
    flex: 1;
    padding: 2rem 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const contentStyles = css`
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
`;

const titleStyles = css`
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const cardStyles = css`
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
`;

const profileImageStyles = css`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;
`;

export const ProfilePage = () => {
    return (
        <div css={pageStyles}>
            <Header />
            <main css={mainStyles}>
                <div css={contentStyles}>
                    <div css={cardStyles}>
                        <div css={profileImageStyles}>👤</div>
                        <h1 css={titleStyles}>User Profile</h1>
                        <p>This is your profile page. Here you can manage your account settings and personal information.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
