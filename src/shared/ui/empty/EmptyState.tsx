import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    text-align: center;
    flex: 1;
`;

const Message = styled.p`
    font-size: 16px;
    color: #666;
`;

type EmptyStateProps = {
    message?: string;
};

export const EmptyState = ({ message = '데이터가 없습니다.' }: EmptyStateProps) => (
    <Wrapper>
        <Message>{message}</Message>
    </Wrapper>
);
