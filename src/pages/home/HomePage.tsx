import { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ClimbingGymsSkeleton } from '../../shared/ui/skeleton/ClimbingGymsSkeleton';
import { FetchErrorFallback } from '../../shared/ui/error/ErrorFallback';
import { EmptyState } from '../../shared/ui/empty/EmptyState';
import { ClimbingGyms } from '../../widgets/home/ClimbingGyms';
import { getClimbingGyms } from '../../shared/api/services/climbing-gyms';
import { QUERY_KEYS } from '../../shared/constants/query-keys';
import { ERROR_MESSAGES, EMPTY_MESSAGES } from '../../shared/constants/message';
import { ErrorBoundary } from 'react-error-boundary';

export const HomePage = () => (
    <ErrorBoundary FallbackComponent={() => <FetchErrorFallback message={ERROR_MESSAGES.climbingGyms} />}>
        <Suspense fallback={<ClimbingGymsSkeleton />}>
            <ClimbingGymsSection page={1} size={10} />
        </Suspense>
    </ErrorBoundary>
);

type ClimbingGymsSectionProps = {
    page?: number;
    size?: number;
};

function ClimbingGymsSection({ page = 1, size = 10 }: ClimbingGymsSectionProps) {
    const { data } = useSuspenseQuery({
        queryKey: [QUERY_KEYS.climbingGyms, page, size],
        queryFn: ({ signal }) => getClimbingGyms({ page, size, signal }),
    });

    const gyms = data.content;

    if (!gyms || gyms.length === 0) return <EmptyState message={EMPTY_MESSAGES.climbingGyms} />;

    return <ClimbingGyms climbingGyms={gyms} />;
}
