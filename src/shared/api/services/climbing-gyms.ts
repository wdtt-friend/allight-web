import { apiClient } from '../../lib/fetch-utils';
import type { ClimbingGymsDTO } from '../types/climbing-gyms';

type GetClimbingGymsParams = {
    page?: number;
    size?: number;
    signal?: AbortSignal;
};

export function getClimbingGyms({ page = 1, size = 10, signal }: GetClimbingGymsParams): Promise<ClimbingGymsDTO> {
    return apiClient.get<ClimbingGymsDTO>('/climbing-gyms', { page, size }, signal);
}