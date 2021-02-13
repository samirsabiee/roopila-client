<template>
  <div class="d-flex flex-row justify-content-start align-items-start bg-light mt-3 p-3">
    <div class="col-9 d-flex flex-column justify-content-start align-items-start">
      <div class="form-group col">
        <input class="form-control" type="text" placeholder="عنوان خبر">
      </div>
      <div class="form-group col">
        <textarea class="form-control" placeholder="متن خبر"></textarea>
      </div>
      <div class="form-group col">
        <select class="form-control">
          <option>اقتصادی</option>
          <option>واردات</option>
          <option>صادرات</option>
        </select>
      </div>
      <div class="form-group col">
        <label for="choosePic">انتخاب تصویر</label>
        <input class="form-control" type="file" id="choosePic" />
      </div>
      <div class="form-group col-2">
        <input class="form-control" type="submit" value="ذخیره سازی">
      </div>
    </div>
    <div class="col-3">
      <div>
        <h4 class="text-center">افزودن دسته بندی</h4>
        <hr class="w-100">
        <div class="form-group col p-0">
          <input class="form-control" type="text" placeholder="عنوان دسته">
        </div>
        <button class="btn btn-success btn-block">افزودن</button>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newNews",
    layout: "admin"
  }
</script>

<style scoped>

</style>
