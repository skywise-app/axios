import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface CustomAxios {
    get<T = any>(
        url: string,
        config?: CustomAxiosRequestConfig<any>
    ): Promise<AxiosResponse<T> | CustomAxiosResponse<T>>;

    post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
}

export interface CustomAxiosRequestConfig<T> extends AxiosRequestConfig<T> {
    /**
     * cache ttl in seconds
     */
    cacheTtl?: number;
}

export interface CustomAxiosResponse<T> {
    data: T;
}
