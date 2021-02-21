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
          <li><a href="index.html">صفحه اصلی</a></li>
          <li class="has-submenu">
            <a href="javascript:void(0)">خدمات</a>
          </li>

          <li class="has-submenu">
            <a href="javascript:void(0)">ارسال درخواست</a>
          </li>
          <li class="has-submenu">
            <a href="javascript:void(0)">آخرین اخبار</a>
          </li>
          <li class="has-submenu">
            <a href="javascript:void(0)">درباره ما</a>
          </li>
          <li class="has-submenu">
            <a href="javascript:void(0)">تماس باما</a>
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
