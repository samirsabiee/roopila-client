<template>
  <header id="topnav" class="defaultscroll sticky">
    <div class="container">
      <!-- Logo container-->
      <div>
        <a class="logo" href="index.html">روپیلا</a>
      </div>
      <div class="buy-button">
        <a href="https://www.rtl-theme.com/author/TN_Plugin/?aff=TN_Plugin" target="_blank" class="btn btn-primary">ورود یا ثبت نام</a>
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
          <a href="https://www.rtl-theme.com/author/TN_Plugin/?aff=TN_Plugin" target="_blank" class="btn btn-primary">ورود یا ثبت نام</a>
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
