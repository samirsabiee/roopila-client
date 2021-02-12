<template>
<div>
  <AdminHeader/>
  <div class="d-flex flex-row">
    <div class="col-2 d-flex flex-column p-0">
      <AdminSidebar/>
    </div>
    <div class="col-10 d-flex flex-column">
      <Nuxt/>
    </div>
  </div>
</div>
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
