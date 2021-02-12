<template>
<div>
  <div class="d-flex flex-row justify-content-start align-items-start p-0">
    <div class="col-12 p-0">
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingZero">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseZero"
              aria-expanded="true" aria-controls="collapseZero">
              <i class="fas fa-tachometer-alt" style="font-size: 1rem;"></i>
              <nuxt-link to="/admin/dashboard" >داشبورد</nuxt-link>
              </button>
            </h5>
          </div>

          <div id="collapseZero" class="collapse show" aria-labelledby="headingZero" data-parent="#accordion">
            <div class="card-body">
              <nuxt-link to="/admin/dashboard">نمای کلی</nuxt-link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <i class="fas fa-users" style="font-size: 1rem;"></i>
              <nuxt-link to="/admin/users">کاربران</nuxt-link>
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              <nuxt-link to="/admin/users">کاربران</nuxt-link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"  aria-controls="collapseTwo">
              <i class="far fa-newspaper" style="font-size: 1rem;"></i>
              <nuxt-link to="/admin/news/news">اخبار</nuxt-link>
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
              <p><nuxt-link to="/admin/news/news">تمامی خبرها</nuxt-link></p>
              <p><nuxt-link to="/admin/news/newNews">افزودن خبر</nuxt-link></p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <i class="fab fa-servicestack" style="font-size: 1rem;"></i>
              خدمات
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
              <p>مشاوره</p>
              <p>حمل و نقل</p>
              <p>ترخیص کالا</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <i class="fab fa-first-order-alt" style="font-size: 1rem;"></i>
              <nuxt-link to="/admin/orders">سفارشات</nuxt-link>
              </button>
            </h5>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="card-body">
              <nuxt-link to="/admin/orders">
                <p>همه سفارشات</p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <i class="far fa-money-bill-alt" style="font-size: 1rem;"></i>
              <nuxt-link to="/admin/payments">تراکنشات</nuxt-link>
              </button>
            </h5>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
            <div class="card-body">
              <nuxt-link to="/admin/payments">
                <p>همه تراکنشات</p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingSix">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <i class="fas fa-camera" style="font-size: 1rem;"></i>
              <nuxt-link to="/admin/gallery">گالری</nuxt-link>
              </button>
            </h5>
          </div>
          <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
            <div class="card-body">
              <nuxt-link to="/admin/gallery">
                <p>تصاویر ما</p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingSeven">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              <i class="fab fa-think-peaks" style="font-size: 1rem;"></i>
              <nuxt-link to="/admin/aboutus">متفرقه</nuxt-link>
              </button>
            </h5>
          </div>
          <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
            <div class="card-body">
              <nuxt-link to="/admin/aboutus">
                <p>درباره ما</p>
              </nuxt-link>
              <nuxt-link to="/admin/contactus">
                <p>تماس با ما</p>
              </nuxt-link>
            </div>
          </div>
        </div>
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
