<template>
  <div>
    <!-- Hero Start -->
    <section id="test5ImgTop" class="bg-half bg-light">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center">
                <div class="page-next-level">
                  <h4 class="title">تماس با ما</h4>
                  <ul class="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                    <li><a href="index.html" class="text-uppercase font-weight-bold text-dark">خانه</a></li>
                    <li>
                      <span class="text-uppercase text-primary font-weight-bold">تماس با ما</span>
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

    <!-- Start Contact -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6  mt-4 pt-2">
            <div class="pt-5 pb-5 p-4 bg-white rounded shadow">
              <h4>در تماس باشید !</h4>
              <div class="custom-form mt-4">
                <div id="message"></div>
                <form method="post" action="http://www.shreethemes.in/landrick/layouts/php/contact.php"
                      name="contact-form" id="contact-form">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>نام شما <span class="text-danger">*</span></label>
                        <i class="mdi mdi-account ml-3 icons"></i>
                        <input name="name" id="name" type="text" class="form-control pl-5" placeholder="نام :">
                      </div>
                    </div><!--end col-->
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>ایمیل شما <span class="text-danger">*</span></label>
                        <i class="mdi mdi-email ml-3 icons"></i>
                        <input name="email" id="email" type="email" class="form-control pl-5" placeholder="ایمیل شما :">
                      </div>
                    </div><!--end col-->
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>نظر</label>
                        <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                        <textarea name="comments" id="comments" rows="4" class="form-control pl-5"
                                  placeholder="نظر شما :"></textarea>
                      </div>
                    </div>
                  </div><!--end row-->
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary btn-block"
                             value="ارسال نظر">
                      <div id="simple-msg"></div>
                    </div><!--end col-->
                  </div><!--end row-->
                </form><!--end form-->
              </div><!--end custom-form-->
            </div>
          </div><!--end col-->

          <div class="col-lg-8 col-md-6 pl-md-3 pr-md-3 mt-4 pt-2">
            <div class="map map-height-two rounded map-gray">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.525673176609!2d46.32542404246615!3d38.06389198146334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAzJzUzLjgiTiA0NsKwMTknMzkuNCJF!5e0!3m2!1sen!2s!4v1545664085241"
                style="border:0" class="rounded" allowfullscreen=""></iframe>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row">
          <div class="col-md-4">
            <div class="contact-detail text-center">
              <div class="icon">
                <img src="~/assets/images/icon/bitcoin.svg" alt="">
              </div>
              <div class="content mt-3">
                <h4 class="title font-weight-bold">تلفن</h4>
                <p class="text-muted">شروع به کار با لندریک کنید که می تواند همه چیز را فراهم کند</p>
                <a href="tel:+152534-468-854" class="text-primary">**********</a>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="contact-detail text-center">
              <div class="icon">
                <img src="~/assets/images/icon/Email.svg" alt="">
              </div>
              <div class="content mt-3">
                <h4 class="title font-weight-bold">ایمیل</h4>
                <p class="text-muted">شروع به کار با لندریک کنید که می تواند همه چیز را فراهم کند</p>
                <a href="mailto:contact@example.com" class="text-primary">contact@example.com</a>
              </div>
            </div>
          </div><!--end col-->

          <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="contact-detail text-center">
              <div class="icon">
                <img src="~/assets/images/icon/location.svg" alt="">
              </div>
              <div class="content mt-3">
                <h4 class="title font-weight-bold">موقعیت</h4>
                <p class="text-muted">خیابان امام کوچه 17, <br>ارومیه</p>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.525673176609!2d46.32542404246615!3d38.06389198146334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAzJzUzLjgiTiA0NsKwMTknMzkuNCJF!5e0!3m2!1sen!2s!4v1545664085241"
                  class="video-play-icon h6 text-primary">نمایش روی نقشه گوگل</a>
              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- End contact -->
  </div>
</template>

<script>
  export default {
    auth: false,
    name: "contactUs"
  }
</script>

<style scoped>
  @import "assets/css/magnific-popup.css";

  #test5ImgTop {
    background: url("../assets/images/contact-detail.jpg") center center;
  }
</style>
