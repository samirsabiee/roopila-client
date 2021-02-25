<template>
  <div>
    <!-- Footer Start -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <nuxt-link class="logo-footer" to="/">روپیلا</nuxt-link>
            <p class="mt-4">روپیلا وبسایتی برای تسهیل امور واردات</p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-facebook" title="فیس بوک"></i></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-instagram" title="اینستاگرام"></i></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-twitter" title="توییتر"></i></a></li>
            </ul><!--end icon-->
          </div><!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 class="text-light footer-head">شرکت</h4>
            <ul class="list-unstyled footer-list mt-4">
              <li><nuxt-link to="/aboutus" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> درباره ما</nuxt-link></li>
              <li><nuxt-link to="/services" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> خدمات</nuxt-link></li>
            </ul>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 class="text-light footer-head">فعالیت ها</h4>
            <ul class="list-unstyled footer-list mt-4">
              <li><nuxt-link to="/requestForm" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> ارسال در خواست</nuxt-link></li>
              <li><nuxt-link to="/contactus" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> پشتیبانی</nuxt-link></li>
              <li><nuxt-link to="/login" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> ورود</nuxt-link></li>
              <li><nuxt-link to="/register" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> ثبت نام</nuxt-link></li>
            </ul>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 class="text-light footer-head">آخرین اخبار</h4>
            <ul class="list-unstyled footer-list mt-4">
              <li><nuxt-link to="/news" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i>پر بازدید ترین</nuxt-link></li>
              <li><nuxt-link to="/news" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i>اقتصادی</nuxt-link></li>
            </ul>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </footer><!--end footer-->
    <hr>

    <!-- Back to top -->
    <a href="#" class="back-to-top rounded text-center" id="back-to-top">
      <i class="mdi mdi-chevron-up d-block"> </i>
    </a>
    <!-- Back to top -->
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

</style>
