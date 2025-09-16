export const AppErrorFallback = ({ error }: { error: Error }) => {
    const message = error instanceof Error ? error.message : undefined;

    return (
        <>
            <div>앱 레벨에서 에러가 발생하였습니다.</div>
            <p>{message}</p>
        </>
    );
};
