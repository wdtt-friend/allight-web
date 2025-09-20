import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ClimbingGymsSkeleton } from '../../shared/ui/skeleton/ClimbingGymsSkeleton';
import type { ClimbingGymsDTO } from '../../shared/api/types/home';
import { getClimbingGyms } from '../../shared/api/services/home';
import { FetchErrorFallback } from '../../shared/ui/error/ErrorFallback';
import { EmptyState } from '../../shared/ui/empty/EmptyState';
import { QUERY_KEYS } from '../../shared/constants/queryKeys';
import { ERROR_MESSAGES, EMPTY_MESSAGES } from '../../shared/constants/message';
import { ClimbingGyms } from '../../widgets/home/ClimbingGyms';

export const HomePage = () => (
    <>
        <ErrorBoundary
            FallbackComponent={() => <FetchErrorFallback message={ERROR_MESSAGES.climbingGyms} />}
        >
            <Suspense fallback={<ClimbingGymsSkeleton />}>
                <ClimbingGymsSection />
            </Suspense>
        </ErrorBoundary>
    </>
);

function ClimbingGymsSection() {
    const { data } = useSuspenseQuery<ClimbingGymsDTO>({
        queryKey: QUERY_KEYS.climbingGyms,
        queryFn: () => getClimbingGyms(),
    });

    const gyms = data.content;

    if (!gyms.length) return <EmptyState message={EMPTY_MESSAGES.climbingGyms} />;

    return <ClimbingGyms climbingGyms={gyms} />;
}
