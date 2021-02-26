<template>
  <section class="bg-home">
    <div class="home-center">
      <div class="home-desc-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="relative-position col-lg-8 col-md-12 text-center">
              <h1 v-text="error.statusCode" class="absolute-position mt-md-3"></h1>
              <img src="~/assets/images/error.png" class="img-fluid" alt="">
              <div class="text-uppercase mt-4 display-3">وای نه!</div>
              <div class="text-capitalize text-dark mb-4 error-page" v-text="errorMessage.text"></div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <nuxt-link :to="errorMessage.btn.to" class="btn btn-primary mt-4 ml-2" v-text="errorMessage.btn.text"></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'error',
    props: ['error'],

    head() {
      return {
        title: this.error.statusCode
      }
    },
    computed: {
      errorMessage() {
        switch (this.error.statusCode) {
          case 401:
            return {
              text: 'شما احراز هویت نشده اید لطفا ابتدا وارد حساب کاربری خود شوید.',
              btn: {
                text: 'ورود',
                to: '/'
              }
            }
          case 403:
            return {
              text: 'متاسفانه شما به این صفحه دسترسی ندارید.',
              btn: {
                text: 'صفحه اصلی',
                to: '/'
              }
            }
          case 404:
            return {
              text: 'متاسفانه صفحه مورد نظر یافت نشد.',
              btn: {
                text: 'صفحه اصلی',
                to: '/'
              }
            }
          case 500:
            //todo -> this line of code must be deleted in production mode
            console.log(this.error)
            return {
              text: 'متاسفانه سرور پاسخگو نمی باشد.',
              btn: {
                text: 'صفحه اصلی',
                to: '/'
              }
            }
          default:
            return {
              text: 'خطای نامشخصی رخ داده لطفا با پشتیبانی در ارتباط باشید.',
              btn: {
                text: 'صفحه اصلی',
                to: '/'
              }
            }
        }
      }
    },
  }
</script>

<style scoped>

  .relative-position{
    position: relative;
  }

  .absolute-position{
    position: absolute;
    top: -1rem;
    width: 100%;
    height: auto;
    font-size: 150px;
    color: #2f55d4 !important;
  }

</style>
