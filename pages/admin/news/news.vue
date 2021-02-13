<template>
  <div class="col-12 d-flex flex-row justify-content-center align-items-start mt-5">
    <div class="col-9 bg-light p-2">
      <div class="news-box overflow-hidden rounded">
        <img class="img-cover-center img-fluid h-100" src="" alt="news">
        <div class="darkLayer d-flex flex-column justify-content-end align-items-start w-100 p-2">
          <div class="d-flex flex-row justify-content-between align-items-center w-100">
            <h6 class="text-white border border-success p-1 category-font-size">اقتصادی</h6>
            <i class="far fa-eye" style="font-size: 1.5rem; color: greenyellow;"> 357</i>
          </div>
          <h5 class="text-white">عنوان خبر</h5>
          <h6 class="text-white date-font-size">تاریخ 99/11/02</h6>
        </div>
      </div>
    </div>
    <div class="col-3 bg-light mr-1 d-flex flex-column justify-content-start align-items-center p-2">
      <h4>دسته بندی ها</h4>
      <hr class="w-100">
      <h5 class="btn btn-outline-success btn-block">واردات</h5>
      <h5 class="btn btn-outline-success btn-block">صادرات</h5>
      <h5 class="btn btn-success btn-block">اقتصادی</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news",
    layout: "admin"
  }
</script>

<style scoped>

</style>
