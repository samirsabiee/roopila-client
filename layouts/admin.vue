<template>
<b-container fluid class="p-0">
  <AdminHeader/>
  <b-row>
    <b-col cols="2" class="p-0">
      <AdminSidebar/>
    </b-col>
    <b-col cols="10" class="p-0">
      <Nuxt/>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
    import AdminHeader from "../components/AdminHeader";
    import AdminSidebar from "../components/AdminSidebar";
    export default {
        name: "admin",
      components: {AdminSidebar, AdminHeader}
    }
</script>

<style scoped src="@/assets/admincss/adminStyle.css">

</style>
