<template>
  <div>
   <Header2 v-if="this.$route.name !== 'login' && this.$route.name !== 'register' && this.$route.name !== 'passwordRecovery'"/>
    <nuxt/>
    <Footer2/>
  </div>
</template>
<script>
import Header2 from "../components/Header2";
import Footer2 from "../components/Footer2";
export default {
  name: "layout2",
  components: {Footer2, Header2},
  data() {
    return {
      authRoutes: ['login','register','passwordRecovery']
    }
  },
  mounted() {
    import('~/assets/js/app.js')
  }
}
</script>

<style scoped>

</style>
