<template>
  <div>
    <div class="img-container overflow-hidden">
      <img class="img-cover-center transport-image w-100 img-fluid" src="static/img/transport.jpg" alt="transport">
      <div class="darkLayer w-100 d-flex flex-row justify-content-end align-items-center">

        <div class="col-6 d-flex flex-column justify-content-center align-items-center">
          <h1 class="text-white">حمل و نقل</h1>
          <h3 class="text-white"> ارسال محموله از مریخ به تمامی نقاط کشور</h3>
          <button class="btn btn-outline-success">ارسال درخواست</button>
        </div>

      </div>
    </div>

    <div class="d-flex flex-row justify-content-center align-items-center">
      <div class="col-2 transport-type-box bg-light shadow shadow-sm rounded overflow-hidden p-0">
        <img class="img-cover-center w-100 transport-box-img img-fluid" src="static/img/small-truck.jpg"
             alt="earch transport">
        <h5 class="font-weight-bold pt-3 pr-3 text-center">حمل نقل زمینی</h5>
        <p class="pr-3 pl-3 text-center">متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام
          اپیزوم متن لورام اپیزوم </p>
      </div>
      <div class="col-2 transport-type-box bg-light shadow shadow-sm rounded overflow-hidden p-0">
        <img class="img-cover-center w-100 transport-box-img img-fluid" src="static/img/small-ship.jpg"
             alt="earch transport">
        <h5 class="font-weight-bold pt-3 pr-3 text-center">حمل نقل دریایی</h5>
        <p class="pr-3 pl-3 text-center">متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام
          اپیزوم متن لورام اپیزوم </p>
      </div>
      <div class="col-2 transport-type-box bg-light shadow shadow-sm  rounded overflow-hidden p-0">
        <img class="img-cover-center w-100 transport-box-img img-fluid" src="static/img/small-airplane.jpg"
             alt="earch transport">
        <h5 class="font-weight-bold pt-3 pr-3 text-center">حمل نقل هوایی</h5>
        <p class="pr-3 pl-3 text-center">متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام اپیزوم متن لورام
          اپیزوم متن لورام اپیزوم </p>
      </div>
    </div>

    <div class="row d-flex flex-row justify-content-center align-items-center m-3">
      <div class="col-5 d-flex flex-row justify-content-center align-items-center p-2">
        <div class="circle-features bg-light"></div>
        <div>معرفی روند یک</div>
      </div>
      <div class="col-5 d-flex flex-row justify-content-center align-items-center p-2">
        <div class="circle-features bg-light"></div>
        <div>معرفی روند دو</div>
      </div>
      <div class="col-5 d-flex flex-row justify-content-center align-items-center p-2">
        <div class="circle-features bg-light"></div>
        <div>معرفی روند سه</div>
      </div>
      <div class="col-5 d-flex flex-row justify-content-center align-items-center p-2">
        <div class="circle-features bg-light"></div>
        <div>معرفی روند چهارم</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    auth: false,
    name: "transport"
  }
</script>

<style scoped src="@/assets/css/transport.css">

</style>
