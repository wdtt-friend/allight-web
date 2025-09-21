import { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ClimbingGymsSkeleton } from '@/shared/ui/skeleton/ClimbingGymsSkeleton';
import { FetchErrorFallback } from '@/shared/ui/error/ErrorFallback';
import { EmptyState } from '@/shared/ui/empty/EmptyState';
import { ClimbingGyms } from '@/widgets/home/ClimbingGyms';
import { getClimbingGyms } from '@/shared/services/climbing-gyms';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { ERROR_MESSAGES, EMPTY_MESSAGES } from '@/shared/constants/message';
import { ErrorBoundary } from 'react-error-boundary';

export const HomePage = () => (
    <ErrorBoundary FallbackComponent={() => <FetchErrorFallback message={ERROR_MESSAGES.climbingGyms} />}>
        <Suspense fallback={<ClimbingGymsSkeleton />}>
            <ClimbingGymsSection />
        </Suspense>
    </ErrorBoundary>
);

function ClimbingGymsSection() {
    const { data } = useSuspenseQuery({
        queryKey: [QUERY_KEYS.climbingGyms],
        queryFn: ({ signal }) => getClimbingGyms({ signal }),
    });

    const gyms = data.content;

    if (!gyms || !gyms.length) return <EmptyState message={EMPTY_MESSAGES.climbingGyms} />;

    return <ClimbingGyms climbingGyms={gyms} />;
}