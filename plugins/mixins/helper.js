import Vue from 'vue'

const Helpers = {
  install(Vue, options) {
    Vue.mixin({
      methods: {
        assetsURL(path) {
          return `${process.env.API_BASE_URL}/${path}`
        }
      },
    })
  }
}

Vue.use(Helpers)
