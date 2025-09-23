import { Suspense } from 'react';
import { ClimbingGymsSkeleton } from '@/shared/ui/skeleton/ClimbingGymsSkeleton';
import { FetchErrorFallback } from '@/shared/ui/error/ErrorFallback';
import { ClimbingGyms } from '@/features/climbing-gym/ui/ClimbingGymList';
import { ERROR_MESSAGES } from '@/shared/constants/message';
import { ErrorBoundary } from 'react-error-boundary';

export const HomePage = () => (
    <ErrorBoundary FallbackComponent={() => <FetchErrorFallback message={ERROR_MESSAGES.climbingGyms} />}>
        <Suspense fallback={<ClimbingGymsSkeleton />}>
            <ClimbingGyms />
        </Suspense>
    </ErrorBoundary>
);