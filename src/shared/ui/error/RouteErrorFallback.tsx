import { useEffect } from 'react';
import { useLocation, useRouteError } from 'react-router-dom';

export const RouteErrorFallback = () => {
    const { pathname } = useLocation();
    const error = useRouteError();

    useEffect(() => {
        // 라우트 전환으로 인한 이전 라우트 요청 AbortError는 무시
        if (error instanceof DOMException && error.name === 'AbortError') {
            return;
        }

        console.error('Router Level Error Occurred', error, pathname);
    }, [error, pathname]);

    const message = error instanceof Error ? error.message : undefined;

    return (
        <>
            <div>라우트 레벨에서 에러가 발생하였습니다.</div>
            <p>{message}</p>
        </>
    );
};