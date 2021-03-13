import Vue from 'vue'

const Helpers = {
  install(Vue, options) {
    Vue.mixin({
      methods: {
        assetsURL(path) {
          return `${process.env.API_BASE_URL}/${path}`
        },
        startLoading() {
          this.$nuxt.$loading.start()
        },
        finishLoading() {
          setInterval(() => {
            this.$nuxt.$loading.finish()
          }, 1000)
        }
      },
    })
  }
}

Vue.use(Helpers)
