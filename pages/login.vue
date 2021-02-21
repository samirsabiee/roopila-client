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
                            <input type="email" class="form-control pl-5" v-model="form.email" placeholder="ایمیل">
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="form-group position-relative">
                            <label>رمز عبور <span class="text-danger">*</span></label>
                            <i class="mdi mdi-key ml-3 icons"></i>
                            <input type="password" class="form-control pl-5" placeholder="رمز عبور" v-model="form.password">
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <p class="float-right forgot-pass"><a href="page-recovery-password.html" class="text-dark font-weight-bold">فراموشی رمز عبور؟</a></p>
                          <div class="form-group">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="customCheck1">
                              <label class="custom-control-label" for="customCheck1">مرا به خاطر بسپار</label>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 mb-0">
                          <button @click="login" class="btn btn-primary w-100">ورود</button>
                        </div>
                        <div class="col-lg-12 mt-4 text-center">
                          <h6>و یا از طریق</h6>
                          <ul class="list-unstyled social-icon mb-0 mt-3">
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-facebook" title="فیس بوک"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-google-plus" title="گوگل"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-github" title="گیتوب"></i></a></li>
                          </ul><!--end icon-->
                        </div>
                        <div class="col-12 text-center">
                          <p class="mb-0 mt-3"><small class="text-dark mr-2">قبلاً حساب دارید؟</small> <a href="page-login.html" class="text-dark font-weight-bold">وارد شوید</a></p>
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
        name: "login",
        layout:"layout2",
      data() {
        return {
          form:{
            email:'samsab@gmail.com',
            password:'A12345678z@'
          }
        }
      },
      methods: {
        async login() {
          try{
            await this.$auth.loginWith('express',{data:this.form})
            await this.$apolloHelpers.onLogin(this.$auth.strategy.token.get())
            this.$auth.redirect('dashboard')
            this.$bvToast.toast(`Welcome ${this.$auth.user.email}`,{
              title:'Login Success',
              noAutoHide:true
            })
          }catch (e) {
            this.$bvToast.toast(e.message,{
              title:'Login Failed',
              noAutoHide:true
            })
          }
        }
      },
    }
</script>

<style scoped>

</style>
