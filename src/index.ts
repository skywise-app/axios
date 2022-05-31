import defaultAxios from 'axios';
import { CustomAxios } from './types/CustomAxios';
import { getCache, setCache } from './cache';

const customAxios: CustomAxios = {
    async get(url, config) {
        const cacheTtl = config?.cacheTtl;
        const params = config?.params;

        if (cacheTtl) {
            const cached = getCache(cacheTtl, url, params);
            if (cached) {
                return cached;
            } else {
                delete config.cacheTtl;
            }

            const freshResponse = await defaultAxios.get(url, config);
            setCache({ data: freshResponse.data }, url, params);

            return freshResponse;
        }

        return defaultAxios.get(url, config);
    },

    post(url, data, config) {
        return defaultAxios.post(url, data, config);
    },
};

export default customAxios;
