    const state = () => ({
            isLoggedIn: false,
            user: null,
            isStaff: false
        })
    
    const mutations = {
        setUser(state, user) {
            state.user = user;
          },
          clearUser(state) {
            state.user = null;
          },
    }
    
    const actions =  {

    }

    const getters = {
        isLoggedIn: state => state.isLoggedIn,
        user: state => state.user,
        isStaff: state => state.isStaff
    }


export default {
namespaced: true,
  state,
  actions,
  mutations,
  getters
}



