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
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const contentStyles = css`
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
`;

const titleStyles = css`
    font-size: 3rem;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const subtitleStyles = css`
    font-size: 1.25rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
    font-weight: 300;
`;

const cardStyles = css`
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
`;

export const HomePage = () => {
    return (
        <div css={pageStyles}>
            <Header />
            <main css={mainStyles}>
                <div css={contentStyles}>
                    <div css={cardStyles}>
                        <h1 css={titleStyles}>Allight</h1>
                        <p css={subtitleStyles}>
                            React 19 + Vite SPA with FSD Architecture
                        </p>
                        <p>
                            Welcome to the allight-web project! This is a modern
                            React application built with the latest technologies
                            and following Feature-Sliced Design principles.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
