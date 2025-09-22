import { apiClient } from '@/shared/api/fetch-utils';
import type { ClimbingGymsDTO } from '@/entities/climbing-gyms/model/climbing-gyms-types';
import type { GetClimbingGymsParams } from './climbing-gyms-types';

// 모든 클라이밍짐 조회 API
export function getClimbingGyms({ page = 1, size = 10, signal }: GetClimbingGymsParams): Promise<ClimbingGymsDTO> {
    return apiClient.get<ClimbingGymsDTO>('/climbing-gyms', { page, size }, signal);
}