<template>
  <div>
    <Header v-if="this.$route.name !== 'login' && this.$route.name !== 'register' && this.$route.name !== 'passwordRecovery'"/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import('~/assets/js/app.js')
  export default {
    name: "layout2",
    components: {Footer, Header}
  }
</script>

<style scoped>

</style>
