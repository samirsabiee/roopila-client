export const state = () => ({
  usersPaginate: {
    page: 1,
    limit: 10
  },
  newsPaginate: {
    page: 1,
    limit: 30
  },
  adminNewsPaginate: {
    page: 1,
    limit: 30
  }
})

export const mutations = {
  SET_USERS_PAGINATE_DATA(state, paginate) {
    state.usersPaginate = paginate
  },
  SET_NEWS_PAGINATE_DATA(state, paginate) {
    state.newsPaginate = paginate
  },
  SET_ADMIN_NEWS_PAGINATE_DATA(state, paginate) {
    state.adminNewsPaginate = paginate
  }
}

export const actions = {
  setUsersPaginateData({commit}, paginate) {
    commit('SET_USERS_PAGINATE_DATA', paginate)
  },
  clearUsersPaginateData({commit}) {
    commit('SET_USERS_PAGINATE_DATA', {})
  },
  setNewsPaginateData({commit}, paginate) {
    commit('SET_NEWS_PAGINATE_DATA', paginate)
  },
  clearNewsPaginateData({commit}) {
    commit('SET_NEWS_PAGINATE_DATA', {})
  },
  setAdminNewsPaginateData({commit}, paginate) {
    commit('SET_ADMIN_NEWS_PAGINATE_DATA', paginate)
  },
  clearAdminNewsPaginateData({commit}) {
    commit('SET_ADMIN_NEWS_PAGINATE_DATA', {})
  }
}
