import api from './instance';
import { setupInterceptors } from './interceptors';

setupInterceptors(api);

export default api;