export const state = () => ({
  loginForm: {},
  requestForm:{}
})

export const mutations = {
  SET_LOGIN_FORM_DATA(state, form) {
    state.loginForm = form
  },
  SET_REQUEST_FORM_DATA(state, form) {
    state.requestForm = form
  },
}

export const actions = {
  setLoginFormData({ commit }, form) {
    commit('SET_LOGIN_FORM_DATA', form)
  },
  clearLoginFormData({ commit }) {
    commit('SET_LOGIN_FORM_DATA', {})
  },
  setRequestFormData({ commit }, form) {
    commit('SET_REQUEST_FORM_DATA', form)
  },
  clearRequestFormData({ commit }) {
    commit('SET_REQUEST_FORM_DATA', {})
  },
}
