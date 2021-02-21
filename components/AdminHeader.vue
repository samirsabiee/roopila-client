<template>
    <div>
      <div class="d-flex flex-row justify-content-between align-items-center bg-light shadow shadow-sm p-3">
        <h4>روپیلا</h4>
        <div class="col-4 form-group">
          <input class="form-control" type="text" name="search" id="search" placeholder="دنبال چی می گردی؟">
        </div>
        <div class="col-3 d-flex flex-row justify-content-center align-items-center">
          <img class="circle-avatar img-fluid" src="~/assets/images/avatar.jpg" alt="avatar">
          <h5 class="p-0 m-0 mr-3 text-center">سمیر سبیعی</h5>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AdminHeader"
    }
</script>

<style scoped>
    .circle-avatar{
      width: 4rem;
      height: 4rem;
      border-radius: 2rem;
      object-fit: cover;
      object-position: center;
    }
</style>
