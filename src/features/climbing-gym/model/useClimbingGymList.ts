import { useSuspenseQuery } from '@tanstack/react-query';
import { getClimbingGymList } from '@/entities/climbing-gym/api/api';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';

export function useClimbingGymList() {
    return useSuspenseQuery({
        queryKey: [QUERY_KEYS.climbingGyms],
        queryFn: ({ signal }) => getClimbingGymList({ signal }),
    });
}