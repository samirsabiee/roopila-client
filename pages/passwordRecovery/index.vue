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
                  <img src="~/assets/images/user/recovery.png" class="img-fluid d-block mx-auto" alt="">
                </div>
              </div>
              <div v-if="$route.params.id === undefined" class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div class="login_page bg-white shadow rounded p-4">
                  <div class="text-center">
                    <h4 class="mb-4">بازیابی حساب</h4>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <p class="text-muted">لطفا آدرس ایمیل خود را وارد کنید. برای ایجاد گذرواژه جدید از طریق ایمیل
                        پیوند دریافت خواهید کرد.</p>
                      <div class="form-group position-relative">
                        <label>آدرس ایمیل <span class="text-danger">*</span></label>
                        <i class="mdi mdi-account ml-3 icons"></i>
                        <b-form-input type="email" class="form-control pl-5" v-model="form.email"
                                      placeholder="وارد کردن آدرس ایمیل" :state="emailValidation"></b-form-input>
                        <b-form-invalid-feedback :state="emailValidation">
                          فرمت ایمیل مورد تایید نیست
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="emailValidation">
                          فرمت ایمیل صحیح است
                        </b-form-valid-feedback>
                      </div>
                    </div>
                    <div align="center" class="col-lg-12">
                      <b-button v-if="loading" variant="primary" disabled>
                        <b-row>
                          <b-spinner small type="grow" class="m-1"></b-spinner>
                          <span class="ml-2 p-0">لطفا صبر کنید...</span>
                        </b-row>
                      </b-button>
                      <button @click="recover" :disabled="loading" v-else class="btn btn-primary w-100">ارسال</button>
                    </div>
                  </div>
                </div>
              </div> <!--end col-->
              <nuxt-child v-else/>
            </div><!--end row-->
          </div> <!--end container-->
        </div>
      </div>
    </section><!--end section-->
    <!-- Hero End -->

    <b-modal id="modal-recovery" hide-footer hide-header>
      <h5 class="text-success text-center w-100">عملیات موفق</h5>
      <div class="d-block text-center">
        <p class="text-center" v-text="responseMessage"></p>
      </div>
      <b-button class="mt-3" variant="primary" block @click="$bvModal.hide('modal-recovery')">اوکی</b-button>
    </b-modal>

  </div>
</template>

<script>
  export default {
    auth: "guest",
    name: "passwordRecovery",
    data() {
      return {
        form: {
          email: ''
        },
        loading: false,
        responseMessage: ''
      }
    },
    computed: {
      emailValidation() {
        return this.form.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null
      },
    },
    methods: {
      recover() {
        this.loading = true
        this.$axios.post('/passwordRecovery', {to: this.form.email})
          .then(({data}) => {
            this.responseMessage = data.message
            this.$bvModal.show('modal-recovery')
            this.loading = false
          }).catch(({message}) => {
          this.$notify.error({message})
        })

      },
    },
  }
</script>

<style scoped>

</style>
