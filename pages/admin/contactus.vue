<template>
  <div class="d-flex flex-column justify-content-center align-items-center bg-light p-3">
    <div class="form-group col">
      <textarea class="form-control" name="contactExplain" id="contactExplain" rows="5" placeholder="توضیحاتی در مورد نحوه ارتباط یا ارتباط بهتر"></textarea>
    </div>
    <h5 class="p-2">اطلاعات تماس</h5>
    <hr class="w-75">
    <div class="d-flex flex-row justify-content-between align-items-center form-group col">
      <input class="form-control col" type="text" placeholder="ادرس">
      <input class="form-control col" type="text" placeholder="ایمیل">
      <input class="form-control col" type="text" placeholder="شماره تماس">
    </div>
  </div>
</template>

<script>
  export default {
    name: "contactus",
    layout: "admin"
  }
</script>

<style scoped>

</style>
