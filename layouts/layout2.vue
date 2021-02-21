<template>
  <div>
   <Header2/>
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
  mounted() {
    import('~/assets/js/app.js')
  }
}
</script>

<style scoped >
</style>
