<template>
  <div>
    <div class="back-to-home rounded d-none d-sm-block">
      <nuxt-link to="/" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></nuxt-link>
    </div>

    <!-- Hero Start -->
    <section class="bg-home">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-7 col-md-6">
                <div class="mr-lg-5">
                  <img src="~/assets/images/user/signup.png" class="img-fluid d-block mx-auto" alt="">
                </div>
              </div>
              <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="login_page bg-white shadow rounded p-4">
                  <div class="text-center">
                    <h4 class="mb-4">ثبت نام</h4>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>نام کوچک <span class="text-danger">*</span></label>
                        <i class="mdi mdi-account ml-3 icons"></i>
                        <input type="text" class="form-control pl-5" placeholder="وارد کنید" v-model="form.fname">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>نام خانوادگی <span class="text-danger">*</span></label>
                        <i class="mdi mdi-account ml-3 icons"></i>
                        <input type="text" class="form-control pl-5" placeholder="وارد کنید" v-model="form.lname">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>ایمیل شما <span class="text-danger">*</span></label>
                        <i class="mdi mdi-account ml-3 icons"></i>
                        <input type="email" class="form-control pl-5" placeholder="وارد کنید" v-model="form.email">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>رمز عبور <span class="text-danger">*</span></label>
                        <i class="mdi mdi-key ml-3 icons"></i>
                        <input type="password" class="form-control pl-5" placeholder="وارد کنید"
                               v-model="form.password">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>تایید رمز عبور <span class="text-danger">*</span></label>
                        <i class="mdi mdi-key ml-3 icons"></i>
                        <input type="password" class="form-control pl-5" placeholder="وارد کنید"
                               v-model="form.retypePassword">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="customCheck1">
                          <label class="custom-control-label" for="customCheck1">تایید شرایط و قوانین</label>
                        </div>
                      </div>
                    </div>
                    <div align="center" class="col-md-12">
                      <b-button v-if="loading" variant="primary" disabled>
                        <b-spinner small type="grow"></b-spinner>
                        لطفا صبر کنید...
                      </b-button>
                      <b-button v-else :disabled="loading" @click="register" class="btn btn-primary w-100">ثبت نام</b-button>
                    </div>
                    <div class="mx-auto">
                      <p class="mb-0 mt-3"><small class="text-dark mr-2">قبلاً حساب دارید؟</small> <nuxt-link
                        to="/login" class="text-dark font-weight-bold">وارد شوید</nuxt-link></p>
                    </div>
                  </div>
                </div>
              </div> <!--end col-->
            </div><!--end row-->
          </div> <!--end container-->
        </div>
      </div>
    </section><!--end section-->
    <!-- Hero End -->
  </div>
</template>

<script>
  import auth from "../.nuxt/auth";

  export default {
    auth: "guest",
    name: "register",
    data() {
      return {
        form: {
          fname: '',
          lname: '',
          email: '',
          password: '',
          retypePassword: ''
        },
        loading:false
      }
    },
    methods: {
      register() {
        this.loading = true
        this.$axios.$post('/register', this.form)
          .then(({data}) => {
            this.$auth.loginWith('express', {data: {email: this.form.email, password: this.form.password}}).then(() => {
              this.$apolloHelpers.onLogin(this.$auth.strategy.token.get())
              this.$auth.redirect('dashboard')
              this.$notify.success({
                message: ` خوش امدید ${this.$auth.user.fname} `
              })
            })
              .finally(() => {
                this.loading = false
              })

          })

      }
    }
  }
</script>

<style scoped>

</style>
