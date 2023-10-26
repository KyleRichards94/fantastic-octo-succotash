const state = {
  isLoggedIn: false,
  user : null
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setIsLoggedIn(state, value) {
    state.isLoggedIn = value;
  },
  clearUser(state) {
    state.user = null;
  }
};

const actions = {
  
  logout({ commit }) {
    commit('setUser', null);
    commit('setIsLoggedIn', false);
  },
};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};



