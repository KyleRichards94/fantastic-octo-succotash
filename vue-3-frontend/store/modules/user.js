const state = {
  isLoggedIn: false,
  userId: null,
  isStaff: false,
};

const mutations = {
  setUserId(state, userId) {
    state.userId = userId;
  },
  setIsLoggedIn(state, value) {
    state.isLoggedIn = value;
  },
  clearUser(state) {
    state.userId = null;
  },
};

const actions = {
  
  logout({ commit }) {
    commit('setUserId', null);
    commit('setIsLoggedIn', false);
  },
};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userId: state => state.userId,
  isStaff: state => state.isStaff,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};



