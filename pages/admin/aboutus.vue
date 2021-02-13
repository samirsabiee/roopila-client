<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
     <div class="embed-responsive embed-responsive-21by9">
        <iframe class="embed-responsive-item p-0 m-0 w-100" allowfullscreen src="" controls></iframe>
    </div>
    <div>
        <h1>stored</h1>
    </div>

    <h5>انتخاب ویدیو پس زمینه بخش بالایی</h5>
    <div class="d-flex flex-row justify-content-center align-items-center video-height bg-light w-100">
      <div class="choose-video-box d-flex flex-row justify-content-center align-items-center">
        <i class="fas fa-plus-square" style="font-size: 2rem;"></i>
        <input class="inputUpload" type="file" id="inputUpload" name="inputUpload">
      </div>
    </div>

    <hr class="w-100">
    <h5>بیانیه مدیر عامل</h5>
    <div class="d-flex flex-row justify-content-center align-items-center w-100 mt-3">
      <div class="col-6 d-flex flex-row justify-content-center align-items-center manager-image-height bg-light p-2">
        <div class="choose-video-box d-flex flex-row justify-content-center align-items-center">
          <i class="fas fa-plus-square" style="font-size: 2rem;"></i>
          <input class="inputUpload" type="file" id="inputUpload2" name="inputUpload">
        </div>
      </div>
      <div class="col-6 form-group p-2 m-0 overflow-hidden">
        <textarea class="form-control w-100" name="ceo-content" id="ceo-content" rows="20" placeholder="متن بیانیه"></textarea>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "aboutus",
        layout:"admin"
    }
</script>

<style scoped>

</style>
