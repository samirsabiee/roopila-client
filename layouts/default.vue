<template>
  <div>
    <Header v-if="showOrNotHeader"/>
    <nuxt/>
    <Footer v-if="showOrNotFooter"/>
  </div>
</template>
<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  export default {
    name: "layout2",
    components: {Footer, Header},
    mounted() {
      import('~/assets/js/app.js')
    },
    computed: {
      showOrNotHeader() {
        let blockPages = ['login','register','passwordRecovery']
        return !blockPages.includes(this.$route.name)
      },
      showOrNotFooter() {
        let blockPages = ['login','register','passwordRecovery','myOrders']
        return !blockPages.includes(this.$route.name)
      }
    },
  }
</script>

<style scoped>
  /* home route and active route will show in bold as it matches / and /about */
  a.nuxt-link-active {
    font-weight: bold !important;
    color: #0037ff !important;
  }
  /* exact link will show the primary color for only the exact matching link */
  a.nuxt-link-exact-active {
    color: #0037ff !important;
  }
</style>
