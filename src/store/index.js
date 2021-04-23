import { createStore } from "vuex";

export default createStore({
  state: {
    user: {},
    isStatus: false,
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; //firebaseの情報
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});
