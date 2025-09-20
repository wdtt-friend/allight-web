import type { ClimbingGymsDTO } from '../types/home';

export async function getClimbingGyms(
    page: number = 1,
    size: number = 10,
    signal?: AbortSignal
): Promise<ClimbingGymsDTO> {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    
    if (!baseUrl) {
        throw new Error('baseUrl이 설정되지 않았습니다.');
    }

    const params = new URLSearchParams({
        page: page.toString(),
        size: size.toString(),
    });

    const response = await fetch(`${baseUrl}/climbing-gyms?${params}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        signal,
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류가 발생하였습니다. 상태 코드: ${response.status}`);
    }

    return response.json();
}