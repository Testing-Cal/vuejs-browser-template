import { createStore } from "vuex";

export default createStore({
  state: {
    firstName: "John Doe",
    lastName: "Doe",
  },
  mutations: {},
  actions: {},
  getters: {
    fullName: function (state) {
      return `${state.firstName} ${state.lastName}`;
    },
  },
});
