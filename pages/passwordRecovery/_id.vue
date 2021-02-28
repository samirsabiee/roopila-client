<template>
  <div v-if="!loading" class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
    <div class="login_page bg-white shadow rounded p-4">
      <div class="text-center">
        <h4 class="mb-4">انتخاب رمز جدید</h4>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <p class="text-muted">رمز جدید خود را با دقت وارد کرده و تایید کنید. توجه داشته باشید این صفحه فقط برای یک بار
            قابل دسترسی می باشد در صورت رفرش کردن آن باید دوباره لینک جدید دریافت کنید</p>
          <div class="form-group position-relative">
            <label>رمز عبور جدید <span class="text-danger">*</span></label>
            <i class="mdi mdi-account ml-3 icons"></i>
            <b-form-input type="password" class="form-control pl-5" v-model="form.password"
                          placeholder="رمز عبور جدید را وارد کنید" :state="passwordValidation"></b-form-input>
            <b-form-invalid-feedback :state="passwordValidation">
              رمز عبور نباید کمتر از هشت کارکتر باشد
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="passwordValidation">
              رمز عبور مورد تایید است
            </b-form-valid-feedback>
          </div>
          <div class="form-group position-relative">
            <label>تایید رمز عبور<span class="text-danger">*</span></label>
            <i class="mdi mdi-account ml-3 icons"></i>
            <b-form-input type="password" class="form-control pl-5" v-model="form.confirmPassword"
                          placeholder="رمز عبور جدید را دوباره وارد کنید"
                          :state="confirmPasswordValidation"></b-form-input>
            <b-form-invalid-feedback :state="confirmPasswordValidation">
              {{validation.confirmPasswordStatus}}
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="confirmPasswordValidation">
              {{validation.confirmPasswordStatus}}
            </b-form-valid-feedback>
          </div>
        </div>
        <div class="col-lg-12">
          <button @click="changePassword" class="btn btn-primary w-100">تایید</button>
        </div>
      </div>
    </div>
  </div> <!--end col-->
</template>

<script>
  export default {
    auth: "guest",
    data() {
      return {
        form: {
          password: '',
          confirmPassword: ''
        },
        loading: true,
        validation: {
          confirmPasswordStatus: ''
        }
      }
    },
    mounted() {
      if (this.$route.params.id !== undefined) {
        this.getInfo()
      }
    },
    methods: {
      getInfo() {
        console.log('Page _id ----------------Info Method--------------------')
        this.$axios.get(`/passwordRecovery/${this.$route.params.id}`).then(() => {
          this.loading = false
        }).catch(() => {
          this.$router.push('/passwordRecovery')
        })

      },
      changePassword() {
        this.$axios.post('/changePassword', {
          param: this.$route.params.id,
          password: this.form.password
        }).then((data) => {
          console.log(data)
        })

      }
    },
    computed: {
      passwordValidation() {
        return this.form.password.length >= 8
      },
      confirmPasswordValidation() {
        if (!this.form.confirmPassword) {
          this.validation.confirmPasswordStatus = 'تایید رمز نباید خالی باشد'
          return false
        } else if (this.form.confirmPassword === this.form.password) {
          this.validation.confirmPasswordStatus = 'تایید رمز مطابقت دارد'
          return true
        } else {
          this.validation.confirmPasswordStatus = 'تایید رمز مطابقت ندارد'
          return false
        }
      }
    },
  }
</script>

<style scoped>

</style>
