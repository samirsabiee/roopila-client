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
                        <b-form-input type="text" class="form-control pl-5" v-model="form.fname" placeholder="وارد کنید"
                                      :state="fNameValidation"></b-form-input>
                        <b-form-invalid-feedback :state="fNameValidation">
                          نام نباید کمتر از سه کارکتر باشد
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="fNameValidation">
                          نام مورد تایید است
                        </b-form-valid-feedback>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group position-relative">
                        <label>نام خانوادگی <span class="text-danger">*</span></label>
                        <i class="mdi mdi-account ml-3 icons"></i>
                        <b-form-input type="text" class="form-control pl-5" v-model="form.lname" placeholder="وارد کنید"
                                      :state="lNameValidation"></b-form-input>
                        <b-form-invalid-feedback :state="lNameValidation">
                          نام خانوادگی نباید کمتر از سه کارکتر باشد
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="lNameValidation">
                          نام خانوادگی مورد تایید است
                        </b-form-valid-feedback>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>ایمیل شما <span class="text-danger">*</span></label>
                        <i class="mdi mdi-account ml-3 icons"></i>
                        <b-form-input type="email" class="form-control pl-5" v-model="form.email"
                                      placeholder="وارد کنید" :state="emailValidation"></b-form-input>
                        <b-form-invalid-feedback :state="emailValidation">
                          فرمت ایمیل مورد تایید نیست
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="emailValidation">
                          فرمت ایمیل صحیح است
                        </b-form-valid-feedback>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>رمز عبور <span class="text-danger">*</span></label>
                        <i class="mdi mdi-key ml-3 icons"></i>
                        <b-form-input type="password" class="form-control pl-5" v-model="form.password"
                                      placeholder="وارد کنید" :state="passwordValidation"></b-form-input>
                        <b-form-invalid-feedback :state="passwordValidation">
                          رمز عبور بایک شامل یک کارکتر خاص، یک عدد، یک حرف بزرگ، یک حرف کوچک باشد و جمعا نباید کمتر از
                          هشت کارکتر باشد زبان سیستم حتما انگلیسی باشد
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="passwordValidation">
                          پسورد مورد تایید است
                        </b-form-valid-feedback>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group position-relative">
                        <label>تایید رمز عبور <span class="text-danger">*</span></label>
                        <i class="mdi mdi-key ml-3 icons"></i>
                        <b-form-input type="password" class="form-control pl-5" v-model="form.retypePassword"
                                      placeholder="وارد کنید" :state="retypePasswordValidation"></b-form-input>
                        <b-form-invalid-feedback :state="retypePasswordValidation">
                          {{validation.retypePasswordStatus}}
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="retypePasswordValidation">
                          {{validation.retypePasswordStatus}}
                        </b-form-valid-feedback>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <div class="custom-control custom-checkbox p-0">
                          <b-form-checkbox v-model="acceptedRules" :value="true" :unchecked-value="false"
                                           id="customCheck1">تایید شرایط و قوانین
                          </b-form-checkbox>
                        </div>
                      </div>
                    </div>
                    <div align="center" class="col-md-12">
                      <b-button v-if="loading" variant="primary" disabled>
                        <b-spinner small type="grow"></b-spinner>
                        لطفا صبر کنید...
                      </b-button>
                      <b-button v-else :disabled="loading" @click="register" class="btn btn-primary w-100">ثبت نام
                      </b-button>
                    </div>
                    <div class="mx-auto">
                      <p class="mb-0 mt-3"><small class="text-dark mr-2">قبلاً حساب دارید؟</small>
                        <nuxt-link
                          to="/login" class="text-dark font-weight-bold">وارد شوید
                        </nuxt-link>
                      </p>
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
        acceptedRules: false,
        form: {
          fname: '',
          lname: '',
          email: '',
          password: '',
          retypePassword: ''
        },
        validation: {
          retypePasswordStatus: ''
        },
        loading: false
      }
    },
    methods: {
      register() {
        if (this.checkValidationBeforeRegister()) {
          this.loading = true
          this.$axios.$post('/register', this.form).then(({data}) => {
            this.$auth.loginWith('express', {data: {email: this.form.email, password: this.form.password}}).then(() => {
              this.$apolloHelpers.onLogin(this.$auth.strategy.token.get())
              this.$auth.redirect('dashboard')
              this.$notify.success({
                message: ` خوش امدید ${this.$auth.user.fname} `
              })
            }).finally(() => {
              this.loading = false
            })
            this.loading = false

          })
        } else {
          this.loading = false
        }
      },
      checkValidationBeforeRegister() {
        if (!this.fNameValidation) {
          this.showErrorNotify('نام را به درستی وارد کنید')
          return false
        } else if (!this.lNameValidation) {
          this.showErrorNotify('نام خانوادگی را به درستی وارد کنید')
          return false
        } else if (!this.emailValidation) {
          this.showErrorNotify('ایمیل را به درستی وارد کنید')
          return false
        } else if (!this.passwordValidation) {
          this.showErrorNotify('رمزعبور را به درستی وارد کنید')
          return false
        } else if (!this.retypePasswordValidation) {
          this.showErrorNotify('تایید رمزعبور را به درستی وارد کنید')
          return false
        } else if (!this.acceptedRules) {
          this.showErrorNotify('قوانین را باید تایید کنید')
          return false
        } else {
          return true
        }
      },
      showErrorNotify(message) {
        this.$notify.error({message})
      }
    },
    computed: {
      fNameValidation() {
        return this.form.fname.length > 2
      },
      lNameValidation() {
        return this.form.lname.length > 2
      },
      emailValidation() {
        return (this.form.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null)
      },
      passwordValidation() {
        return (this.form.password.length >= 8 && this.form.password.match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$') !== null)
      },
      retypePasswordValidation() {
        if (!this.form.retypePassword) {
          this.validation.retypePasswordStatus = 'تایید رمز نباید خالی باشد'
          return false
        } else if (this.form.retypePassword === this.form.password) {
          this.validation.retypePasswordStatus = 'تایید رمز مطابقت دارد'
          return true
        } else {
          this.validation.retypePasswordStatus = 'تایید رمز مطابقت ندارد'
          return false
        }
      }
    },
  }
</script>

<style scoped>

</style>
