import { GlobalStyles } from './app/styles/global';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/router';
import { ErrorBoundary } from 'react-error-boundary';
import { AppErrorFallback } from './shared/ui/error/AppErrorFallback';
import { QueryProvider } from './app/providers/QueryProvider';

function App() {
    return (
        // App 레벨 에러 UI(라우트 진입 이전)
        <ErrorBoundary
            FallbackComponent={AppErrorFallback}
            onError={error => {
                console.error('App Level Error Occurred', error);
            }}
        >
            <QueryProvider>
                <AppContent />
            </QueryProvider>
        </ErrorBoundary>
    );
}

function AppContent() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
