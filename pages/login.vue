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
                  <img src="~/assets/images/user/login.png" class="img-fluid d-block mx-auto" alt="">
                </div>
              </div>
              <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="login-page bg-white shadow rounded p-4">
                  <div class="text-center">
                    <h4 class="mb-4">ورود</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group position-relative">
                          <label>ایمیل شما <span class="text-danger">*</span></label>
                          <i class="mdi mdi-account ml-3 icons"></i>
                          <b-form-input type="email" class="form-control pl-5" v-model="form.email" placeholder="ایمیل"  :state="emailValidation"></b-form-input>
                          <b-form-invalid-feedback :state="emailValidation">
                            فرمت ایمیل مورد تایید نیست
                          </b-form-invalid-feedback>
                          <b-form-valid-feedback :state="emailValidation">
                            فرمت ایمیل صحیح است
                          </b-form-valid-feedback>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group position-relative">
                        <label>رمز عبور <span class="text-danger">*</span></label>
                        <i class="mdi mdi-key ml-3 icons"></i>
                        <b-form-input type="password" class="form-control pl-5" v-model="form.password" placeholder="رمز عبور" :state="passwordValidation"></b-form-input>
                        <b-form-invalid-feedback :state="passwordValidation">
                          پسورد نباید کمتر از 8 رقم باشد
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback  :state="passwordValidation">
                          طول پسورد معتبر است
                        </b-form-valid-feedback>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <p class="float-right forgot-pass"><nuxt-link to="/passwordRecovery"
                                                            class="text-dark font-weight-bold">فراموشی رمز عبور؟</nuxt-link></p>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
<!--                          <input type="checkbox" class="custom-control-input" id="customCheck1">-->
<!--                          <label class="custom-control-label" for="customCheck1">مرا به خاطر بسپار</label>-->

                          <b-form-checkbox
                            v-model="form.rememberMe"
                            :value="true"
                            :unchecked-value="false">
                            مرا به خاطر بسپار
                          </b-form-checkbox>

                        </div>
                      </div>
                    </div>
                    <div align="center" class="col-lg-12 mb-0">
                      <b-button v-if="loading" variant="primary" disabled>
                        <b-row>
                          <b-spinner small type="grow" class="m-1"></b-spinner>
                          <span class="ml-2 p-0">لطفا صبر کنید...</span>
                        </b-row>
                      </b-button>
                      <b-button v-else  @click="login" :disabled="loading" class="btn btn-primary w-100">ورود</b-button>
                    </div>
                    <div class="col-12 text-center">
                      <p class="mb-0 mt-3">
                        <small class="text-dark mr-2">قبلاً حساب دارید؟</small>
                        <nuxt-link to="/register" class="text-dark font-weight-bold">ثبت نام کنید</nuxt-link>
                      </p>
                    </div>
                  </div>
                </div><!---->
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
  export default {
    auth: "guest",
    name: "login",
    data() {
      return {
        loading:false,
        form: {
          email: '',
          password: '',
          rememberMe:false
        },
      }
    },
    mounted() {
      this.loadStore()
    },
    methods: {
      login() {
        this.loading = true
        this.$auth.loginWith('express', {data: this.form})
          .then(({data}) => {
            this.$apolloHelpers.onLogin(this.$auth.strategy.token.get())
            this.$notify.success({
              message: ` خوش امدید ${this.$auth.user.fname} `
            })
            if(this.form.rememberMe) this.rememberMe()
            if(this.$auth.hasScope('admin') || this.$auth.hasScope('superAdmin') ){
              this.$router.push('/admin/dashboard')
            }
          }).finally(() => {
          this.loading = false
        })
      },
      rememberMe(){
        this.$store.dispatch('rememberMe/setLoginFormData',this.form)
      },
      loadStore(){
        let email = this.$store.state.rememberMe.loginForm.email
        let password = this.$store.state.rememberMe.loginForm.password
        if(email !== undefined && password !== undefined){
          this.form.rememberMe = true
          this.form.email = email
          this.form.password = password
        }
      }
    },
    computed: {
      emailValidation() {
        return this.form.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null
      },
      passwordValidation(){
        return this.form.password.length >= 8
      }
    },
  }
</script>

<style scoped>
</style>
