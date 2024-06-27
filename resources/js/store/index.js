import { createStore } from "vuex";

export default createStore({
  state: {
    transactionData: [],
    userData: null,
    token: null 
  },
  mutations: {
    setTransactionData(state, data) {
      state.transactionData = data;
    },
    setUserData(state, userData) {
      state.userData = userData;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    updateTransactionData(context, data) {
      context.commit("setTransactionData", data);
    },
    loginSuccess(context, { userData, token }) {
      context.commit("setUserData", userData);
      context.commit("setToken", token);
    }
  },
  getters: {
    transactionData: state => state.transactionData,
    userData: state => state.userData,
    isAuthenticated: state => !!state.token
  }
});
