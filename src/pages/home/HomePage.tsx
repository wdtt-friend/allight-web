import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { SectionError } from '../../shared/ui/error/SectionError';
import { HomeItemListSkeleton } from '../../shared/ui/skeleton/HomeItemListSkeleton';
import { HomeItemList } from '../../widgets/home/HomeItemList';
import type { HomeItemListDTO } from '../../shared/api/types/home';
import { getHomeItemList } from '../../shared/api/services/home';

export const HomePage = () => (
    <ErrorBoundary fallback={<SectionError section="homeList" />}>
        <Suspense fallback={<HomeItemListSkeleton />}>
            <HomeListSection />
        </Suspense>
    </ErrorBoundary>
);
  
function HomeListSection() {
    const { data } = useSuspenseQuery<HomeItemListDTO>({
        queryKey: ['homeItemList'],
        queryFn: getHomeItemList,
    });

    return <HomeItemList homeItemList={data.homeItemList} />;
}