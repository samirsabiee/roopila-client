<template>
  <div>
   <Header2/>
    <nuxt/>
    <!-- Footer Start -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <a class="logo-footer" href="#">لندریک<span class="text-primary">.</span></a>
            <p class="mt-4">با لندریک کار کنید که می تواند همه چیز را برای ایجاد آگاهی ، ترافیک رانندگی ، اتصال برقرار کند.</p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-facebook" title="فیس بوک"></i></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-instagram" title="اینستاگرام"></i></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-twitter" title="توییتر"></i></a></li>
            </ul><!--end icon-->
          </div><!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 class="text-light footer-head">شرکت</h4>
            <ul class="list-unstyled footer-list mt-4">
              <li><a href="page-aboutus.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> درباره ما</a></li>
              <li><a href="page-services.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> خدمات</a></li>
              <li><a href="page-team.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> تیم</a></li>
              <li><a href="page-pricing.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> قیمت</a></li>
              <li><a href="page-work.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> پروژه</a></li>
              <li><a href="page-jobs.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> حرفه</a></li>
              <li><a href="page-blog.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> بلاگ</a></li>
              <li><a href="page-cover-login.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> ورود</a></li>
            </ul>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 class="text-light footer-head">لینک های کمکی</h4>
            <ul class="list-unstyled footer-list mt-4">
              <li><a href="page-terms.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> شرایط خدمات</a></li>
              <li><a href="page-privacy.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> حریم خصوصی</a></li>
              <li><a href="documentation.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> راهنما</a></li>
              <li><a href="changelog.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> تغییرات</a></li>
              <li><a href="components.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> اجزاء</a></li>
            </ul>
          </div><!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 class="text-light footer-head">خبرنامه</h4>
            <p class="mt-4">ثبت نام کنید و آخرین راهنمایی ها را از طریق ایمیل دریافت کنید.</p>
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="foot-subscribe form-group position-relative">
                    <label>نوشتن ایمیل شما <span class="text-danger">*</span></label>
                    <i class="mdi mdi-email ml-3 icons"></i>
                    <input type="email" name="email" id="emailsubscribe" class="form-control pl-5 rounded" placeholder="ایمیل شما : " required>
                  </div>
                </div>
                <div class="col-lg-12">
                  <input type="submit" id="submitsubscribe" name="send" class="btn btn-primary w-100" value="عضو شدن">
                </div>
              </div>
            </form>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </footer><!--end footer-->
    <hr>
    <footer class="footer footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <p class="mb-0">© 1398 لندریک. طراحی با <i class="mdi mdi-heart text-danger"></i> توسط <a href="https://www.rtl-theme.com/author/TN_Plugin/?aff=TN_Plugin" target="_blank" class="text-success">جعفر عباسی</a>.</p>
            </div>
          </div>

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <ul class="list-unstyled payment-cards text-sm-right mb-0">
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="~/assets/images/payments/american-ex.png" title="آمریکن اکسپرس" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="~/assets/images/payments/discover.png" title="کشف کردن" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="~/assets/images/payments/master-card.png" title="مستر کارد" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="~/assets/images/payments/paypal.png" title="پی پال" alt=""></a></li>
              <li class="list-inline-item"><a href="javascript:void(0)"><img src="~/assets/images/payments/visa.png" title="ویزا" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div><!--end container-->
    </footer><!--end footer-->
    <!-- Footer End -->

    <!-- Back to top -->
    <a href="#" class="back-to-top rounded text-center" id="back-to-top">
      <i class="mdi mdi-chevron-up d-block"> </i>
    </a>
    <!-- Back to top -->
  </div>
</template>
<script>
import Header2 from "../components/Header2";
export default {
  name: "layout2",
  components: {Header2},
  mounted() {
    import('~/assets/js/app.js')
  }
}
</script>

<style scoped >
</style>
