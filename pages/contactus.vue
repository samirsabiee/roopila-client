<template>
    <div>
      <div class="black-bg">

      </div>
      <div class="d-flex flex-column justify-content-start align-items-start huge-margin">
        <h1 class="text-white">با ما در ارتباط باشید</h1>
        <div class="d-flex flex-row">
          <p class="col-6 text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
          </p>
        </div>

        <div class="d-flex flex-row justify-content-center align-items-start shadow shadow-sm m-5 w-100 form-height bg-white rounded">
          <div class="col-3 form-height d-flex flex-column justify-content-center align-items-center bg-dark">
            <h3 class="text-center text-white m-3">اطلاعات ارتباطی</h3>
            <div class="d-flex flex-column justify-content-start align-items-start">
              <div class="d-flex flex-row">
                <img class="icon-size align-self-start" src="static/img/icons/maps-and-flags.png" alt="location">
                <p class="text-center text-white pr-3">باغ زهرا میدان مطهری</p>
              </div>
              <div class="d-flex flex-row">
                <img class="icon-size" src="static/img/icons/email.png" alt="email">
                <p class="col-8 text-center text-white pr-3">roopila@gmail.com</p>
              </div>
              <div class="d-flex flex-row">
                <img class="icon-size" src="static/img/icons/phone-call.png" alt="phone">
                <p class="text-center text-white pr-3">093626633788</p>
              </div>
            </div>
          </div>
          <div class="col-9 d-flex flex-column align-items-center form-height p-5">
            <div class="d-flex flex-row-reverse justify-content-between w-100 pb-3 pr-3 pl-3">
              <img class="icon-size-medium" src="static/img/icons/email_black.png" alt="email">
              <h4>پیامی به ما بفرستید...</h4>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center w-100">
              <div class="col form-group">
                <label for="name">نام و نام خانوادگی</label>
                <input class="form-control" type="text" id="name">
              </div>
              <div class="col form-group">
                <label for="email">ایمیل</label>
                <input class="form-control" type="email" id="email">
              </div>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center w-100">
              <div class="col d-flex flex-column form-group">
                <label for="message">متن پیام</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
            </div>
            <button class="btn btn-outline btn-dark">ارسال پیام</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "contactus"
    }
</script>

<style scoped src="@/assets/css/contactus.css">

</style>
