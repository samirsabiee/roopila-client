export const state = () => ({
  paginate: {
    page: 1,
    limit: 10
  }
})

export const mutations = {
  SET_PAGINATE_DATA(state, paginate) {
    state.paginate = paginate
  }
}

export const actions = {
  setPaginateData({commit}, paginate) {
    commit('SET_PAGINATE_DATA', paginate)
  },
  clearPaginateData({commit}) {
    commit('SET_PAGINATE_DATA', {})
  }
}
