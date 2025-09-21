import { apiClient } from '@/shared/lib/fetch-utils';
import type { ClimbingGymsDTO } from '@/shared/types/climbing-gyms';

// 모든 클라이밍짐 조회 API
export function getClimbingGyms({
    page = 1,
    size = 10,
    signal
}: {
    page?: number;
    size?: number;
    signal?: AbortSignal;
}): Promise<ClimbingGymsDTO> {
    return apiClient.get<ClimbingGymsDTO>('/climbing-gyms', { page, size }, signal);
}