import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryProvider 기본 설정(개별 쿼리는 오버라이드 방식)
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5분간 fresh
            gcTime: 5 * 60 * 1000, // 기본값: 5분
            retry: 0, // 기본값: 0회
        },
        mutations: {
            retry: 0, // 기본값: 0회
        },
    },
});

interface QueryProviderProps {
    children: React.ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
