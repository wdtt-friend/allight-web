import { apiClient } from '@/shared/api/fetchUtils';
import type { ClimbingGymsDTO } from '@/entities/climbing-gym/model/types';
import type { GetClimbingGymsParams } from './types';

// 모든 클라이밍짐 조회 API
export function getClimbingGymList({ page = 1, size = 10, signal }: GetClimbingGymsParams): Promise<ClimbingGymsDTO> {
    return apiClient.get<ClimbingGymsDTO>('/climbing-gyms', { page, size }, signal);
}