import { TokenService } from '@services'

export const handleToken = (config) => {
    const token = TokenService.getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    // Asegurarse de que config tenga cancelToken definido
    // if (!config.cancelToken) {
    //     config.cancelToken = new axios.CancelToken(() => {});
    // }

    return config;
}