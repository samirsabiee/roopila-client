<template>
  <b-container fluid class="p-0">
    <b-embed
      type="iframe"
      aspect="21by9"
      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
      allowfullscreen></b-embed>

    <h5 class="text-center">انتخاب ویدیو پس زمینه بخش بالایی</h5>
    <b-row class="video-height bg-light w-100">
      <b-col class="choose-video-box d-flex flex-row justify-content-center align-items-center">
        <input type="file">
      </b-col>
    </b-row>

    <hr class="w-75">
    <h5 class="text-center">بیانیه مدیر عامل</h5>
    <b-row class="mt-3">
      <b-col cols="6" class="manager-image-height bg-light p-2">
        <div class="choose-video-box d-flex flex-row justify-content-center align-items-center">
          <i class="fas fa-plus-square" style="font-size: 2rem;"></i>
          <input class="inputUpload" type="file" id="inputUpload2" name="inputUpload">
        </div>
      </b-col>
      <b-col cols="6" class="p-2 m-0 overflow-hidden">
        <b-form-textarea rows="20" placeholder="متن بیانیه"></b-form-textarea>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
    export default {
        name: "aboutus",
        layout:"admin"
    }
</script>

<style scoped>

</style>
