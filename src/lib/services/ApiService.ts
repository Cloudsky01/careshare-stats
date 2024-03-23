import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
    private baseUrl: string;

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