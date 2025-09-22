import { useSuspenseQuery } from '@tanstack/react-query';
import { getClimbingGyms } from '@/entities/climbing-gyms/api/climbing-gyms-api';
import { QUERY_KEYS } from '@/shared/constants/query-keys';

export function useClimbingGyms() {
    return useSuspenseQuery({
        queryKey: [QUERY_KEYS.climbingGyms],
        queryFn: ({ signal }) => getClimbingGyms({ signal }),
    });
}