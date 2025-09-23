const baseUrl = import.meta.env.VITE_API_BASE_URL || '';

if (!baseUrl) throw new Error('VITE_API_BASE_URL이 설정되지 않았습니다.');

class ApiClient {
    private defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true',
    };

    private async request<T>(
        endpoint: string,
        options: RequestInit
    ): Promise<T> {
        const response = await fetch(`${baseUrl}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`HTTP 오류: ${response.status}`);
        }
        return response.json();
    }

    async get<T>(
        endpoint: string,
        params?: Record<string, any>,
        signal?: AbortSignal
    ): Promise<T> {
        const url = new URL(`${baseUrl}${endpoint}`);
        if (params) {
            Object.entries(params).forEach(([key, value]) =>
                url.searchParams.append(key, String(value))
            );
        }

        return this.request<T>(url.pathname + url.search, {
            method: 'GET',
            headers: this.defaultHeaders,
            signal,
        });
    }

    async post<T>(endpoint: string, data?: any, signal?: AbortSignal): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'POST',
            headers: this.defaultHeaders,
            body: data ? JSON.stringify(data) : undefined,
            signal,
        });
    }

    async put<T>(endpoint: string, data?: any, signal?: AbortSignal): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'PUT',
            headers: this.defaultHeaders,
            body: data ? JSON.stringify(data) : undefined,
            signal,
        });
    }

    async delete<T>(endpoint: string, signal?: AbortSignal): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'DELETE',
            headers: this.defaultHeaders,
            signal,
        });
    }
}

export const apiClient = new ApiClient();