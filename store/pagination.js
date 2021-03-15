export const state = () => ({
  adminUsersPaginate: {
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
  },
  adminOrdersPaginate: {
    page: 1,
    limit: 10
  },
  adminPaymentsPaginate: {
    page: 1,
    limit: 10
  },
  adminGalleryPaginate: {
    page: 1,
    limit: 10
  }
})

export const mutations = {
  SET_ADMIN_USERS_PAGINATE_DATA(state, paginate) {
    state.adminUsersPaginate = paginate
  },
  SET_NEWS_PAGINATE_DATA(state, paginate) {
    state.newsPaginate = paginate
  },
  SET_ADMIN_NEWS_PAGINATE_DATA(state, paginate) {
    state.adminNewsPaginate = paginate
  },
  SET_ADMIN_ORDERS_PAGINATE_DATA(state, paginate) {
    state.adminOrdersPaginate = paginate
  },
  SET_ADMIN_PAYMENTS_PAGINATE_DATA(state, paginate) {
    state.adminPaymentsPaginate = paginate
  },
  SET_ADMIN_GALLERY_PAGINATE_DATA(state, paginate) {
    state.adminGalleryPaginate = paginate
  }
}

export const actions = {
  setAdminUsersPaginateData({commit}, paginate) {
    commit('SET_ADMIN_USERS_PAGINATE_DATA', paginate)
  },
  clearAdminUsersPaginateData({commit}) {
    commit('SET_ADMIN_USERS_PAGINATE_DATA', {})
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
  },
  setAdminOrdersPaginateData({commit}, paginate) {
    commit('SET_ADMIN_ORDERS_PAGINATE_DATA', paginate)
  },
  clearAdminOrdersPaginateData({commit}) {
    commit('SET_ADMIN_ORDERS_PAGINATE_DATA', {})
  },
  setAdminPaymentsPaginateData({commit}, paginate) {
    commit('SET_ADMIN_PAYMENTS_PAGINATE_DATA', paginate)
  },
  clearAdminPaymentsPaginateData({commit}) {
    commit('SET_ADMIN_PAYMENTS_PAGINATE_DATA', {})
  },
  setAdminGalleryPaginateData({commit}, paginate) {
    commit('SET_ADMIN_GALLERY_PAGINATE_DATA', paginate)
  },
  clearAdminGalleryPaginateData({commit}) {
    commit('SET_ADMIN_GALLERY_PAGINATE_DATA', {})
  }
}
