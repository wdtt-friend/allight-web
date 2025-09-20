import { GlobalStyles } from './app/styles/global';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/router';
import { ErrorBoundary } from 'react-error-boundary';
import { PageErrorFallback } from './shared/ui/error/ErrorFallback';
import { QueryProvider } from './app/providers/QueryProvider';

function App() {
    return (
        <ErrorBoundary
            FallbackComponent={PageErrorFallback}
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
