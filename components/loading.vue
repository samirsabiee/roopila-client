<template lang="html">
  <!-- Loader -->
  <div id="preloader" v-if="loading">
    <div id="status">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  </div>
  <!-- Loader -->
</template>

<script>
export default {

  data() {
    return {
      loading: false,
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },

  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    fail(error) {
      console.log(error)
    },
    increase(num) {
      // console.log(num)
    },
  },
}
</script>
