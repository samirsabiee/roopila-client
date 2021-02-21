<template>
  <header id="topnav" class="defaultscroll sticky">
    <div class="container">
      <!-- Logo container-->
      <div>
        <nuxt-link class="logo" to="/">روپیلا</nuxt-link>
      </div>
      <div class="buy-button">
        <nuxt-link to="/login" class="btn btn-primary">ورود یا ثبت نام</nuxt-link>
      </div><!--end login button-->
      <!-- End Logo container-->
      <div class="menu-extras">
        <div class="menu-item">
          <!-- Mobile menu toggle-->
          <a class="navbar-toggle">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </div>
      </div>

      <div id="navigation">
        <!-- Navigation Menu-->
        <ul class="navigation-menu">
          <li><nuxt-link to="/">صفحه اصلی</nuxt-link></li>
          <li class="has-submenu">
            <nuxt-link to="/services">خدمات</nuxt-link>
          </li>

          <li class="has-submenu">
            <nuxt-link to="/requestForm">ارسال درخواست</nuxt-link>
          </li>
          <li class="has-submenu">
            <nuxt-link to="/news">آخرین اخبار</nuxt-link>
          </li>
          <li class="has-submenu">
            <nuxt-link to="/aboutUs">درباره ما</nuxt-link>
          </li>
          <li class="has-submenu">
            <nuxt-link to="/contactUs">تماس باما</nuxt-link>
          </li>
        </ul><!--end navigation menu-->
        <div class="buy-menu-btn d-none">
          <nuxt-link to="/login" class="btn btn-primary">ورود یا ثبت نام</nuxt-link>
        </div><!--end login button-->
      </div><!--end navigation-->
    </div><!--end container-->
  </header>
</template>

<script>
    export default {
        name: "Header2"
    }
</script>

<style scoped>

</style>
