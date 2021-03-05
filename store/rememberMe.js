export const state = () => ({
  form: {}
})

export const mutations = {
  SET_FORM_DATA(state, form) {
    state.form = form
  }
}

export const actions = {
  setFormData({ commit }, form) {
    commit('SET_FORM_DATA', form)
  },
  clearFormData({ commit }) {
    commit('SET_FORM_DATA', {})
  }
}
