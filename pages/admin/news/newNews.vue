<template>
  <b-row class="bg-light mt-3 p-3">
    <b-col cols="9">
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
    </b-col>
    <b-col cols="3">
      <div>
        <h4 class="text-center">افزودن دسته بندی</h4>
        <hr class="w-100">
        <div class="form-group col p-0">
          <input class="form-control" type="text" placeholder="عنوان دسته">
        </div>
        <button class="btn btn-success btn-block">افزودن</button>

      </div>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: "newNews",
    layout: "admin"
  }
</script>

<style scoped>

</style>
