<template>
  <div>
    <!-- Hero Start -->
    <section class="bg-half bg-light">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center">
                <div class="page-next-level">
                  <h4 class="title"> فرم درخواست واردات کالا </h4>
                  <ul class="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                    <li>
                      <nuxt-link to="/" class="text-uppercase font-weight-bold text-dark">خانه</nuxt-link>
                    </li>
                    <li>
                      <span class="text-uppercase text-primary font-weight-bold">ارسال درخواست</span>
                    </li>
                  </ul>
                </div>
              </div>  <!--end col-->
            </div><!--end row-->
          </div> <!--end container-->
        </div>
      </div>
    </section><!--end section-->
    <!-- Hero End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->

    <!-- requestForm form Start no login -->
    <section v-if="!$auth.user" class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-7">
            <div class="custom-form">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>نام شما :<span class="text-danger">*</span></label>
                    <i class="mdi mdi-account ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" v-model="form.fullName" placeholder="نام کامل :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>ایمیل شما :<span class="text-danger">*</span></label>
                    <i class="mdi mdi-email ml-3 icons"></i>
                    <input type="email" class="form-control pl-5" v-model="form.email" placeholder="ایمیل شما :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>شماره تماس. :<span class="text-danger">*</span></label>
                    <i class="mdi mdi-phone ml-3 icons"></i>
                    <input type="number" class="form-control pl-5" v-model="form.mobile" placeholder="موبایل همراه. :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>عنوان کالا :<span class="text-danger">*</span></label>
                    <i class="mdi mdi-treasure-chest ml-3 icons"></i>
                    <input class="form-control pl-5" v-model="form.itemName" placeholder="نام دقیق کالا :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>تعداد کالا :</label>
                    <i class="mdi mdi-numeric ml-3 icons"></i>
                    <input class="form-control pl-5" type="number" v-model="form.itemCount"
                           placeholder="تعداد مورد نظر :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>وزن کالا :</label>
                    <i class="mdi mdi-weight-kilogram ml-3 icons"></i>
                    <input class="form-control pl-5" v-model="form.itemWeight" placeholder="وزن تقریبی :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>حجم کالا :</label>
                    <i class="mdi mdi-format-size ml-3 icons"></i>
                    <input class="form-control pl-5" v-model="form.itemVolume" placeholder="حجم تقریبی :">
                  </div>
                </div><!--end col-->
                <div class="col-md-12">
                  <div class="form-group position-relative">
                    <label>توضیحات :</label>
                    <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                    <textarea rows="4" class="form-control pl-5" v-model="form.description"
                              placeholder="توضیحاتی درمورد کالا :"></textarea>
                  </div>
                </div><!--end col-->
                <div class="col-md-12">
                  <div class="form-group position-relative">
                    <label>نمونه / نمونه ای از کالای خود را بارگذاری کنید :</label>
                    <b-form-file class="text-center" v-model="form.samples" :state="Boolean(form.samples)"
                                 placeholder="نمونه خود را با حجمی کتر از 10 مگابات انتخاب کنید"
                                 drop-placeholder="فایل را روی این باکس بکشید"></b-form-file>
                  </div>
                </div><!--end col-->
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input">
                      <label class="custom-control-label"> من <a href="#" class="text-primary">قوانین و مقررات را</a>
                        تایید می کنم</label>
                    </div>
                  </div>
                </div><!--end col-->
              </div><!--end row-->
              <div class="row">
                <div align="center" class="col-sm-12">
                  <b-button v-if="loading" variant="primary" disabled>
                    <b-row>
                      <b-spinner small type="grow" class="m-1"></b-spinner>
                      <span class="ml-2 p-0">لطفا صبر کنید...</span>
                    </b-row>
                  </b-button>
                  <input type="submit" v-else :disabled="loading" @click="notRegisteredUserAskedRequest" class="submitBnt btn btn-primary"
                         value="ارسال سفارش">
                </div><!--end col-->
              </div><!--end row-->
            </div><!--end custom-form-->
          </div>
        </div>
      </div><!--end container-->
    </section><!--end section-->
    <!-- Job apply form End -->

    <!-- requestForm form Start loggedIn -->
    <section v-else class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-7">
            <div class="custom-form">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>نام شما :<span class="text-danger">*</span></label>
                    <i class="mdi mdi-account ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" disabled
                           :value="`${$auth.user.fname} ${$auth.user.lname}`" placeholder="نام کامل :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>ایمیل شما :<span class="text-danger">*</span></label>
                    <i class="mdi mdi-email ml-3 icons"></i>
                    <input type="email" class="form-control pl-5" disabled :value="$auth.user.email"
                           placeholder="ایمیل شما :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>شماره تماس. :<span class="text-danger">*</span></label>
                    <i class="mdi mdi-phone ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" disabled :value="$auth.user.mobile"
                           placeholder="موبایل همراه. :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>عنوان کالا :<span class="text-danger">*</span></label>
                    <i class="mdi mdi-treasure-chest ml-3 icons"></i>
                    <input class="form-control pl-5" v-model="form.itemName" placeholder="نام دقیق کالا :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>تعداد کالا :</label>
                    <i class="mdi mdi-numeric ml-3 icons"></i>
                    <input type="number" class="form-control pl-5" v-model="form.itemCount"
                           placeholder="تعداد مورد نظر :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>وزن کالا :</label>
                    <i class="mdi mdi-weight-kilogram ml-3 icons"></i>
                    <input class="form-control pl-5" v-model="form.itemWeight" placeholder="وزن تقریبی :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>حجم کالا :</label>
                    <i class="mdi mdi-format-size ml-3 icons"></i>
                    <input class="form-control pl-5" v-model="form.itemVolume" placeholder="حجم تقریبی :">
                  </div>
                </div><!--end col-->
                <div class="col-md-12">
                  <div class="form-group position-relative">
                    <label>توضیحات :</label>
                    <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                    <textarea rows="4" class="form-control pl-5" v-model="form.description"
                              placeholder="توضیحاتی درمورد کالا :"></textarea>
                  </div>
                </div><!--end col-->
                <div class="col-md-12">
                  <div class="form-group position-relative">
                    <label>نمونه / نمونه ای از کالای خود را بارگذاری کنید :</label>
                    <!--                     <input type="file" class="form-control-file">-->
                    <b-form-file class="text-center" v-model="form.samples" :state="Boolean(form.samples)"
                                 placeholder="نمونه خود را با حجمی کتر از 10 مگابات انتخاب کنید"
                                 drop-placeholder="فایل را روی این باکس بکشید"></b-form-file>
                  </div>
                </div><!--end col-->
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input">
                      <label class="custom-control-label"> من <a href="#" class="text-primary">قوانین و مقررات را</a>
                        تایید می کنم</label>
                    </div>
                  </div>
                </div><!--end col-->
              </div><!--end row-->
              <div class="row">
                <div align="center" class="col-sm-12">
                  <b-button v-if="loading" variant="primary" disabled>
                    <b-row>
                      <b-spinner small type="grow" class="m-1"></b-spinner>
                      <span class="ml-2 p-0">لطفا صبر کنید...</span>
                    </b-row>
                  </b-button>
                  <input type="submit" v-else :disabled="loading" @click="loggedInUserAskedRequest" class="submitBnt btn btn-primary"
                         value="ارسال سفارش">
                </div><!--end col-->
              </div><!--end row-->
            </div><!--end custom-form-->
          </div>
        </div>
      </div><!--end container-->
    </section><!--end section-->
    <!-- Job apply form End -->

  </div>
</template>

<script>
  import {newOrderLoggedIn} from "../graphql/front/mutation/newOrderLoggedIn";
  import {newOrder} from "../graphql/front/mutation/newOrder";

  export default {
    auth: false,
    name: "requestForm",
    data() {
      return {
        form: {
          fullName: '',
          email: '',
          mobile: '',
          itemName: '',
          itemCount: 1,
          itemWeight: '',
          itemVolume: '',
          description: '',
          samples: null
        },
        loading:false
      }
    },
    mounted() {
      console.log(this.validMobile)
    },
    methods: {
      loggedInUserAskedRequest() {
        this.loading =true
        const data = {
          user_id: this.$auth.user._id,
          itemName: this.form.itemName,
          itemCount: parseInt(this.form.itemCount),
          itemWeight: this.form.itemWeight,
          itemVolume: this.form.itemVolume,
          description: this.form.description,
          samples: this.form.samples,
        }
        this.$apollo.mutate({
          mutation: newOrderLoggedIn,
          variables: data
        }).then(() => {
          this.$notify.success({message: 'درخواست شما با موفقیت ثبت شد لطفا سفارش های خود را بررسی نمایید'})
          this.loading = false
        }).catch(({message}) => {
          this.$notify.error({message})
          this.loading = false
        })
      },
      notRegisteredUserAskedRequest() {
        this.loading = true
        const data = {
          fName: this.getFName,
          lName: this.getLName,
          email: this.form.email,
          mobile: this.form.mobile,
          itemName: this.form.itemName,
          itemCount: parseInt(this.form.itemCount),
          itemWeight: this.form.itemWeight,
          itemVolume: this.form.itemVolume,
          description: this.form.description,
          samples: this.form.samples,
        }
        this.$apollo.mutate({
          mutation: newOrder,
          variables: data
        }).then(() => {
          this.$notify.success({message: 'درخواست شما با موفقیت ثبت شد لطفا ایمیل خود را بررسی نمایید'})
          this.loading = false
        }).catch(({message}) => {
          this.$notify.error({message})
          this.loading = false
        })
      }
    },
    computed: {
      getFName() {
        return this.form.fullName.split(' ')[0];
      },
      getLName() {
        const fullNamePart = this.form.fullName.split(' ')
        let lName = ''
        for (let i = 1; i < fullNamePart.length; i++) {
          lName += `${fullNamePart[i]} `
        }
        return lName
      },
      validMobile(){
        let mobile = '009362633788'
        return mobile.match(/^(0[1-9]{10}|\+98[1-9]{10}|9[1-9]{9})$/) !== null
      }
    },
  }
</script>

<style scoped>

</style>
