<template>
<div>
  <div class="d-flex flex-row justify-content-start align-items-start p-0">
    <div class="col-12 p-0">
      <div class="accordion" role="tablist">

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-row class="p-3" v-b-toggle.accordion-1 variant="light">
              <i class="fas fa-tachometer-alt mr-3" style="font-size: 1rem;"></i>
              <nuxt-link class="mr-3" to="/admin/dashboard" >داشبورد</nuxt-link>
            </b-row>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <nuxt-link to="/admin/dashboard" >نمای کلی</nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>


        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-row class="p-3" block v-b-toggle.accordion-2 variant="light">
              <i class="fas fa-users mr-3" style="font-size: 1rem;"></i>
              <nuxt-link class="mr-3" to="/admin/users">کاربران</nuxt-link>
            </b-row>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <nuxt-link to="/admin/users">کاربران</nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>


        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-row class="p-3" block v-b-toggle.accordion-3 variant="light">
              <i class="far fa-newspaper mr-3" style="font-size: 1rem;"></i>
              <nuxt-link class="mr-3" to="/admin/news/news">اخبار</nuxt-link>
            </b-row>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <p><nuxt-link to="/admin/news/news">تمامی خبرها</nuxt-link></p>
              <p><nuxt-link to="/admin/news/newNews">افزودن خبر</nuxt-link></p>
            </b-card-body>
          </b-collapse>
        </b-card>


        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-row class="p-3" block v-b-toggle.accordion-4 variant="light">
              <i class="fab fa-servicestack mr-3 ml-3" style="font-size: 1rem;"></i>
              <nuxt-link to="/admin/pages/services/consulting">خدمات</nuxt-link>
            </b-row>
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <nuxt-link to="/admin/pages/services/consulting"><p>مشاوره</p></nuxt-link>
              <nuxt-link to="/admin/pages/services/transport"><p>حمل نقل</p></nuxt-link>
              <nuxt-link to="/admin/pages/services/clearance"><p>ترخیص کالا</p></nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>


        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-row class="p-3" block v-b-toggle.accordion-5 variant="light">
              <i class="fab fa-first-order-alt mr-3" style="font-size: 1rem;"></i>
              <nuxt-link class="mr-3" to="/admin/orders">سفارشات</nuxt-link>
            </b-row>
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <nuxt-link to="/admin/orders"><p>همه سفارشات</p></nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>


        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-row class="p-3" block v-b-toggle.accordion-6 variant="light">
              <i class="far fa-money-bill-alt mr-3" style="font-size: 1rem;"></i>
              <nuxt-link class="mr-3" to="/admin/payments">تراکنشات</nuxt-link>
            </b-row>
          </b-card-header>
          <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <nuxt-link to="/admin/payments">
                <p>همه تراکنشات</p>
              </nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>


        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-row class="p-3" block v-b-toggle.accordion-7 variant="light">
              <i class="fas fa-camera mr-3" style="font-size: 1rem;"></i>
              <nuxt-link class="mr-3" to="/admin/gallery">گالری</nuxt-link>
            </b-row>
          </b-card-header>
          <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <nuxt-link to="/admin/gallery">
                <p>تصاویر ما</p>
              </nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>


        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-row class="p-3" block v-b-toggle.accordion-8 variant="light">
              <i class="fab fa-chrome mr-3" style="font-size: 1rem;"></i>
              <nuxt-link class="mr-3" to="/admin/pages/home">برگه ها</nuxt-link>
            </b-row>
          </b-card-header>
          <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <nuxt-link to="/admin/pages/home">
                <p>خانه</p>
              </nuxt-link>
              <nuxt-link to="/admin/pages/aboutus">
                <p>درباره ما</p>
              </nuxt-link>
              <nuxt-link to="/admin/pages/contactus">
                <p>تماس با ما</p>
              </nuxt-link>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "AdminSidebar"
    }
</script>

<style scoped>
  h5{
    text-align: right;
  }
  .card-body{
    text-align: right;
  }
</style>
