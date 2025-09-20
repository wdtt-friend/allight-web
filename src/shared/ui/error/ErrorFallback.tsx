import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FiAlertCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const errorFallbackWrapperStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    flex: 1;
`;

const errorFallbackStyles = css`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 12px;
    background: #fff0f0;
    border: 1px solid #ff4d4f;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const AlertCircleIcon = styled(FiAlertCircle)`
    color: #ff4d4f;
    font-size: 48px;
    margin-bottom: 12px;
`;

const errorFallbackTitleStyles = css`
    font-size: 20px;
    color: #ff4d4f;
    margin-bottom: 8px;
`;

const errorFallbackDescriptionStyles = css`
    color: #555;
    font-size: 14px;
    margin-bottom: 16px;
`;

const HomeButton = styled.button`
    padding: 10px 20px;
    background-color: #ff4d4f;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #e04344;
    }
`;

export const PageErrorFallback = () => {
    const navigate = useNavigate();

    return (
        <div css={errorFallbackWrapperStyles}>
            <div css={errorFallbackStyles}>
                <AlertCircleIcon />
                <h2 css={errorFallbackTitleStyles}>
                    일시적인 오류가 발생하였습니다.
                </h2>
                <p css={errorFallbackDescriptionStyles}>
                    잠시 후 다시 시도해주세요.
                </p>
                <HomeButton onClick={() => navigate('/')}>
                    홈으로 이동
                </HomeButton>
            </div>
        </div>
    );
};

export const FetchErrorFallback = ({ message }: { message: string }) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};