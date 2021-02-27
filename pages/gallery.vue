<template>
  <!-- Work Start -->
  <section class="section">
    <div class="container">
      <div class="row" v-if="!loading">
        <ul class="col container-filter list-unstyled categories-filter text-center" id="filter">
          <li v-for="(category,index) in categoryItems" :key="index" class="list-inline-item"><a
            :class="`categories border d-block text-dark rounded ${(index === 0)? 'active':''}`">{{category.name}}</a>
          </li>
        </ul>
      </div><!--end row-->
    </div><!--end container-->

    <div class="container-fluid">
      <div class="row container-grid projects-wrapper">
        <div class="col-lg-3 col-md-6 spacing designing">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" href="images/work/13.jpg" title="">
              <img src="~/assets/images/work/13.jpg" class="img-fluid rounded" alt="work-image">
              <div class="overlay-work"></div>
            </a>
            <div class="content personal-port">
              <a href="page-work-detail.html" class="title text-white d-block font-weight-bold">چشم انداز تغییر</a>
              <small class="text-light">استودیو</small>
            </div>
            <div class="client personal-port">
              <small class="text-light user d-block"><i class="mdi mdi-account"></i> جعفر عباسی</small>
              <small class="text-light date"><i class="mdi mdi-calendar-check"></i> بهمن 1398</small>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 spacing photography">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" href="images/work/14.jpg" title="">
              <img src="~/assets/images/work/14.jpg" class="img-fluid rounded" alt="work-image">
              <div class="overlay-work"></div>
            </a>
            <div class="content personal-port">
              <a href="page-work-detail.html" class="title text-white d-block font-weight-bold">مجله رنگ</a>
              <small class="text-light">طراحی وب</small>
            </div>
            <div class="client personal-port">
              <small class="text-light user d-block"><i class="mdi mdi-account"></i> جعفر عباسی</small>
              <small class="text-light date"><i class="mdi mdi-calendar-check"></i> بهمن 1398</small>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 spacing designing">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" href="images/work/15.jpg" title="">
              <img src="~/assets/images/work/15.jpg" class="img-fluid rounded" alt="work-image">
              <div class="overlay-work"></div>
            </a>
            <div class="content personal-port">
              <a href="page-work-detail.html" class="title text-white d-block font-weight-bold">لوازم آرایشی اسپا</a>
              <small class="text-light">توسعه</small>
            </div>
            <div class="client personal-port">
              <small class="text-light user d-block"><i class="mdi mdi-account"></i> جعفر عباسی</small>
              <small class="text-light date"><i class="mdi mdi-calendar-check"></i> بهمن 1398</small>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 spacing photography">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" href="images/work/16.jpg" title="">
              <img src="~/assets/images/work/16.jpg" class="img-fluid rounded" alt="work-image">
              <div class="overlay-work"></div>
            </a>
            <div class="content personal-port">
              <a href="page-work-detail.html" class="title text-white d-block font-weight-bold">قهوه ریزر</a>
              <small class="text-light">برندینگ</small>
            </div>
            <div class="client personal-port">
              <small class="text-light user d-block"><i class="mdi mdi-account"></i> جعفر عباسی</small>
              <small class="text-light date"><i class="mdi mdi-calendar-check"></i> بهمن 1398</small>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 spacing branding">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" href="images/work/17.jpg" title="">
              <img src="~/assets/images/work/17.jpg" class="img-fluid rounded" alt="work-image">
              <div class="overlay-work"></div>
            </a>
            <div class="content personal-port">
              <a href="page-work-detail.html" class="title text-white d-block font-weight-bold">رقصیدن با خودم</a>
              <small class="text-light">عکاسی</small>
            </div>
            <div class="client personal-port">
              <small class="text-light user d-block"><i class="mdi mdi-account"></i> جعفر عباسی</small>
              <small class="text-light date"><i class="mdi mdi-calendar-check"></i> بهمن 1398</small>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 spacing development">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" href="images/work/18.jpg" title="">
              <img src="~/assets/images/work/18.jpg" class="img-fluid rounded" alt="work-image">
              <div class="overlay-work"></div>
            </a>
            <div class="content personal-port">
              <a href="page-work-detail.html" class="title text-white d-block font-weight-bold">روندهای جدید در سئو</a>
              <small class="text-light">شرکتی</small>
            </div>
            <div class="client personal-port">
              <small class="text-light user d-block"><i class="mdi mdi-account"></i> جعفر عباسی</small>
              <small class="text-light date"><i class="mdi mdi-calendar-check"></i> بهمن 1398</small>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 spacing branding">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" href="images/work/19.jpg" title="">
              <img src="~/assets/images/work/19.jpg" class="img-fluid rounded" alt="work-image">
              <div class="overlay-work"></div>
            </a>
            <div class="content personal-port">
              <a href="page-work-detail.html" class="title text-white d-block font-weight-bold">لوازم آرایشی اسپا</a>
              <small class="text-light">توسعه</small>
            </div>
            <div class="client personal-port">
              <small class="text-light user d-block"><i class="mdi mdi-account"></i> جعفر عباسی</small>
              <small class="text-light date"><i class="mdi mdi-calendar-check"></i> بهمن 1398</small>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 spacing development">
          <div class="work-container position-relative d-block overflow-hidden rounded mt-3">
            <a class="mfp-image d-inline-block" href="images/work/20.jpg" title="">
              <img src="~/assets/images/work/20.jpg" class="img-fluid rounded" alt="work-image">
              <div class="overlay-work"></div>
            </a>
            <div class="content personal-port">
              <a href="page-work-detail.html" class="title text-white d-block font-weight-bold">قهوه ریزر</a>
              <small class="text-light">برندینگ</small>
            </div>
            <div class="client personal-port">
              <small class="text-light user d-block"><i class="mdi mdi-account"></i> جعفر عباسی</small>
              <small class="text-light date"><i class="mdi mdi-calendar-check"></i> بهمن 1398</small>
            </div>
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div><!--end container-->

    <div class="container mt-100 mt-60">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <div class="section-title">
            <h4 class="title mb-4">بیایید در مورد نمونه کارها خود صحبت کنیم</h4>
            <p class="text-muted para-desc mx-auto mb-0">شروع به کار با <span class="text-primary font-weight-bold">لندریک</span>
              که می تواند همه چیز را برای ایجاد آگاهی ، ترافیک رانندگی ، اتصال فراهم کند.</p>

            <div class="mt-3">
              <a href="javascript:void(0)" class="btn btn-primary">شروع کنید</a>
            </div>
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div>
  </section><!--end section-->
  <!-- Work End -->
</template>

<script>
  import {galleryCategories} from "../graphql/front/galleryCategories";

  export default {
    auth: false,
    name: "gallery",
    data() {
      return {
        galleryData: {
          page: 1,
          limit: 10
        },
        loading: true,
        categoryItems: []
      }
    },
    mounted() {
      this.galleryCategories()
    },
    methods: {
      async galleryCategories() {
        let categories = await this.$apollo.query({
          query: galleryCategories,
          variables: {limit: 5}
        })
        this.categoryItems = categories.data.galleryCategories.galleryCategories
        this.loading = false
      }
    },
  }
</script>

<style scoped>

</style>
