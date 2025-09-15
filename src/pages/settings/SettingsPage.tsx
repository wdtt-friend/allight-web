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
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
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

const settingsItemStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:last-child {
        border-bottom: none;
    }
`;

const toggleStyles = css`
    width: 50px;
    height: 25px;
    background: #ddd;
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s;
    
    &::after {
        content: '';
        position: absolute;
        width: 21px;
        height: 21px;
        background: white;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        transition: transform 0.3s;
    }
`;

export const SettingsPage = () => {
    return (
        <div css={pageStyles}>
            <Header />
            <main css={mainStyles}>
                <div css={contentStyles}>
                    <div css={cardStyles}>
                        <h1 css={titleStyles}>Settings</h1>
                        
                        <div css={settingsItemStyles}>
                            <span>Dark Mode</span>
                            <div css={toggleStyles}></div>
                        </div>
                        
                        <div css={settingsItemStyles}>
                            <span>Notifications</span>
                            <div css={toggleStyles}></div>
                        </div>
                        
                        <div css={settingsItemStyles}>
                            <span>Auto-save</span>
                            <div css={toggleStyles}></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
