import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

class ApiService {
    private baseUrl = 'https://your-api-gateway-url.amazonaws.com/prod';

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await axios(config);
            return response.data;
        } catch (error) {
            throw new Error(`Request failed: ${error.message}`);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected async mocked_get<T>(_url: string): Promise<T> {
        return new Promise<T>((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: 'Car 1', lastUsed: new Date() },
                    { id: 2, name: 'Car 2', lastUsed: new Date() },
                    { id: 3, name: 'Car 3', lastUsed: new Date() },
                    { id: 4, name: 'Car 4', lastUsed: new Date() },
                    { id: 5, name: 'Car 5', lastUsed: new Date() },
                    { id: 6, name: 'Car 6', lastUsed: new Date() }
                ] as unknown as T);
            }, 1000);
        });
    }

    public async get<T>(url: string): Promise<T> {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: `${this.baseUrl}${url}`,
        };
        return this.request<T>(config);
    }

    public async post<T>(url: string, data: any): Promise<T> {
        const config: AxiosRequestConfig = {
            method: 'POST',
            url: `${this.baseUrl}${url}`,
            data,
        };
        return this.request<T>(config);
    }
}

export default ApiService ;