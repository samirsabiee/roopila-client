<template>
  <b-container fluid class="bg-light p-3">
    <div>
      <b-form-textarea id="textarea-plaintext" size="md" placeholder="توضیحاتی در مورد نحوه ارتباط یا ارتباط بهتر" ></b-form-textarea>
    </div>
    <h5 class="p-2 text-center">اطلاعات تماس</h5>
    <hr class="w-75">
    <div class="d-flex flex-row justify-content-between align-items-center form-group col">
      <input class="form-control col" type="text" placeholder="ادرس">
      <input class="form-control col" type="text" placeholder="ایمیل">
      <input class="form-control col" type="text" placeholder="شماره تماس">
    </div>
  </b-container>
</template>

<script>
  export default {
    name: "contactus",
    layout: "admin"
  }
</script>

<style scoped>

</style>
