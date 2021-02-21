<template>
 <div>
    <!-- Hero Start -->
    <section class="bg-half bg-light">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center">
                <div class="page-next-level">
                  <h4 class="title"> فرم درخواست واردات کالا </h4>
                  <ul class="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                    <li><a href="index.html" class="text-uppercase font-weight-bold text-dark">خانه</a></li>
                    <li>
                      <span class="text-uppercase text-primary font-weight-bold">ارسال درخواست</span>
                    </li>
                  </ul>
                </div>
              </div>  <!--end col-->
            </div><!--end row-->
          </div> <!--end container-->
        </div>
      </div>
    </section><!--end section-->
    <!-- Hero End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->

    <!-- Job apply form Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-7">
            <div class="custom-form">
              <form class="rounded shadow p-4">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label>نام شما :<span class="text-danger">*</span></label>
                      <i class="mdi mdi-account ml-3 icons"></i>
                      <input type="text" class="form-control pl-5" placeholder="نام کامل :">
                    </div>
                  </div><!--end col-->
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label>ایمیل شما :<span class="text-danger">*</span></label>
                      <i class="mdi mdi-email ml-3 icons"></i>
                      <input type="email" class="form-control pl-5" placeholder="ایمیل شما :">
                    </div>
                  </div><!--end col-->
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label>شماره تماس. :<span class="text-danger">*</span></label>
                      <i class="mdi mdi-phone ml-3 icons"></i>
                      <input type="number" class="form-control pl-5" placeholder="موبایل همراه. :">
                    </div>
                  </div><!--end col-->
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label>عنوان کالا :<span class="text-danger">*</span></label>
                      <i class="mdi mdi-treasure-chest ml-3 icons"></i>
                      <input class="form-control pl-5" placeholder="نام دقیق کالا :">
                    </div>
                  </div><!--end col-->
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label>تعداد کالا :</label>
                      <i class="mdi mdi-numeric ml-3 icons"></i>
                      <input class="form-control pl-5" placeholder="تعداد مورد نظر :">
                    </div>
                  </div><!--end col-->
                  <div class="col-md-6">
                    <div class="form-group position-relative">
                      <label>وزن کالا :</label>
                      <i class="mdi mdi-weight-kilogram ml-3 icons"></i>
                      <input class="form-control pl-5" placeholder="وزن تقریبی :">
                    </div>
                  </div><!--end col-->
                  <div class="col-md-12">
                    <div class="form-group position-relative">
                      <label>توضیحات :</label>
                      <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                      <textarea name="comments" id="comments" rows="4" class="form-control pl-5" placeholder="توضیحاتی درمورد کالا :"></textarea>
                    </div>
                  </div><!--end col-->
                  <div class="col-md-12">
                    <div class="form-group position-relative">
                      <label>نمونه / نمونه ای از کالای خود را بارگذاری کنید :</label>
                      <input type="file" class="form-control-file" id="fileupload">
                    </div>
                  </div><!--end col-->
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1"> من <a href="#" class="text-primary">قوانین و مقررات را</a> تایید می کنم</label>
                      </div>
                    </div>
                  </div><!--end col-->
                </div><!--end row-->
                <div class="row">
                  <div class="col-sm-12">
                    <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary" value="ارسال سفارش">
                  </div><!--end col-->
                </div><!--end row-->
              </form><!--end form-->
            </div><!--end custom-form-->
          </div>
        </div>
      </div><!--end container-->
    </section><!--end section-->
    <!-- Job apply form End -->

  </div>
</template>

<script>
export default {
  name: "test",
  layout: 'layout2'
}
</script>

<style scoped>

</style>
