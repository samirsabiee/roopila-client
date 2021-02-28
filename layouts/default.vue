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
  export default {
    name: "layout2",
    components: {Footer, Header},
    mounted() {
      import('~/assets/js/app.js')
    }
  }
</script>

<style scoped>

</style>
