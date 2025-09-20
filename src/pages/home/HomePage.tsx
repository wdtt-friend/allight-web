import { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { HomeItemListSkeleton } from '../../shared/ui/skeleton/HomeItemListSkeleton';
import { HomeItemList } from '../../widgets/home/HomeItemList';
import type { HomeItemListDTO } from '../../shared/api/types/home';
import { getHomeItemList } from '../../shared/api/services/home';

export const HomePage = () => (
    <Suspense fallback={<HomeItemListSkeleton />}>
        <HomeListSection />
    </Suspense>
);

function HomeListSection() {
    const { data } = useSuspenseQuery<HomeItemListDTO>({
        queryKey: ['homeItemList'],
        queryFn: ({ signal }) => getHomeItemList({ signal }),
    });

    return <HomeItemList homeItemList={data.homeItemList} />;
}
