export const TokenService = {

    getToken() {
        const token = localStorage.getItem('token');
        if (token) {
            return token;
        }
    },

    setToken(token){
        localStorage.setItem('token', token);
    },

    removeToken(){
        localStorage.removeItem('token')
    }
    
};