<template>
  <div v-if="!$apollo.queries.profileByUserId.loading" class="min-height-768">
    <!-- Hero Start -->
    <section class="bg-half bg-light">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center">
                <div class="page-next-level">
                  <h4 class="title"> ویرایش پروفایل </h4>
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

    <!-- Profile Setting Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="p-4 rounded shadow">
              <h5 class="text-md-left text-center">جزئیات شخصی :</h5>

              <div class="mt-3 text-md-left text-center d-sm-flex">
                <img :src="profileInfo.avatar" class="avatar float-md-left avatar-medium rounded-pill shadow mr-md-4"
                     alt="">

                <div class="mt-md-4 mt-3 mt-sm-0">
                  <span
                    class="my-relative-position overflow-hidden cursor-pointer bg-primary text-center text-white rounded p-2 font-weight-bold shadow shadow-sm">
                    <b-form-file @change="onAvatarSelected" v-model="userProfileAvatar" accept="image/jpeg, image/png"
                                 :state="Boolean(userProfileAvatar)" class="my-absolute-position m-0 p-0" type="file"
                                 style="opacity: 0"></b-form-file>
                    <span>تغییر آواتار</span>
                  </span>
                  <a href="javascript:void(0)" class="btn btn-outline-primary my-2 ml-2">حذف</a>
                </div>
              </div>


              <div class="row mt-4">
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>نام کوچک</label>
                    <i class="mdi mdi-account ml-3 icons"></i>
                    <input v-model="profileInfo.user.fname" type="text" class="form-control pl-5"
                           placeholder="نام کوچک :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>نام خانوادگی</label>
                    <i class="mdi mdi-account-plus ml-3 icons"></i>
                    <input v-model="profileInfo.user.lname" type="text" class="form-control pl-5"
                           placeholder="نام خانوادگی :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>کدملی</label>
                    <i class="mdi mdi-identifier ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" v-model="profileInfo.melicode" placeholder="کدملی :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>زمینه فعالیت</label>
                    <i class="mdi mdi-fountain-pen-tip ml-3 icons"></i>
                    <input v-model="profileInfo.businessField" type="text" class="form-control pl-5"
                           placeholder="زمینه فعالیت :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>تاریخ تولد</label>
                    <i class="mdi mdi-timeline ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" v-model="profileInfo.birthDate" placeholder="74/05/26">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>جنسیت</label>
                    <i class="mdi mdi-gender-male-female-variant ml-3 icons"></i>
                    <b-form-select v-model="gender.selected"
                                   :options="gender.options"
                                   value-field="value"
                                   text-field="text"
                                   disabled-field="notEnabled"
                                   class="form-control p-0 pl-5 custom-select"></b-form-select>
                  </div>
                </div><!--end col-->
                <div class="col-md-12">
                  <div class="form-group position-relative">
                    <label>نشانی</label>
                    <i class="mdi mdi-home ml-3 icons"></i>
                    <b-form-textarea size="sm" class="form-control pl-5 address-box-height"
                                     v-model="profileInfo.address[0]" placeholder="آدرس :"></b-form-textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group position-relative">
                    <label>توضیحات</label>
                    <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                    <textarea name="comments" id="comments" rows="4" v-model="profileInfo.bio" class="form-control pl-5"
                              placeholder="توضیحات :"></textarea>
                  </div>
                </div>
              </div><!--end row-->
              <div class="row">
                <div class="col-sm-12">
                  <b-button v-if="loading" variant="primary" disabled>
                    <b-row>
                      <b-spinner small type="grow" class="m-1"></b-spinner>
                      <span class="ml-2 p-0">لطفا صبر کنید...</span>
                    </b-row>
                  </b-button>
                  <input v-else :disabled="loading" @click="editPersonalData" class="btn btn-primary"
                         value="ذخیره تنظیمات">
                </div><!--end col-->
              </div><!--end row-->


              <div class="row">
                <div class="col-md-6 mt-4 pt-2">
                  <h5>اطلاعات تماس :</h5>


                  <div class="row mt-4">
                    <div class="col-lg-12">
                      <div class="form-group position-relative">
                        <label>شماره تلفن. :</label>
                        <i class="mdi mdi-phone ml-3 icons"></i>
                        <input v-model="user.mobile" class="form-control pl-5" placeholder="شماره :">
                      </div>
                    </div><!--end col-->
                    <div class="col-lg-12">
                      <div class="form-group position-relative">
                        <label>ایمیل. :</label>
                        <i class="mdi mdi-phone ml-3 icons"></i>
                        <input type="email" v-model="user.email" disabled class="form-control pl-5"
                               placeholder="ایمیل :">
                      </div>
                    </div><!--end col-->

                    <div class="col-lg-12">
                      <div class="form-group position-relative">
                        <label>وب سایت :</label>
                        <i class="mdi mdi-earth ml-3 icons"></i>
                        <input v-model="profileInfo.website" type="url" class="form-control pl-5" placeholder="آدرس :">
                      </div>
                    </div><!--end col-->

                    <div class="col-lg-12 mt-2 mb-0">
                      <b-button v-if="loading" variant="primary" disabled>
                        <b-row>
                          <b-spinner small type="grow" class="m-1"></b-spinner>
                          <span class="ml-2 p-0">لطفا صبر کنید...</span>
                        </b-row>
                      </b-button>
                      <button v-else :disabled="loading" @click="editContactData" class="btn btn-primary">ذخیره
                        اطلاعات
                      </button>
                    </div><!--end col-->
                  </div><!--end row-->

                </div><!--end col-->

                <div class="col-md-6 mt-4 pt-2">
                  <h5>تغییر رمز عبور :</h5>

                  <div class="row mt-4">
                    <div class="col-lg-12">
                      <div class="form-group position-relative">
                        <label>رمز عبور قبلی :</label>
                        <i class="mdi mdi-key ml-3 icons"></i>
                        <b-form-input v-model="changePassword.oldPassword"
                                      type="password"
                                      class="form-control pl-5"
                                      placeholder="رمز عبور قبلی"
                                      required></b-form-input>

                      </div>
                    </div><!--end col-->

                    <div class="col-lg-12">
                      <div class="form-group position-relative">
                        <label>رمز عبور جدید :</label>
                        <i class="mdi mdi-key ml-3 icons"></i>
                        <b-form-input v-model="changePassword.password" type="password" class="form-control pl-5"
                                      placeholder="رمز عبور جدید" required :state="passwordValidation"></b-form-input>
                        <b-form-invalid-feedback :state="passwordValidation">
                          رمز عبور بایک شامل یک کارکتر خاص، یک عدد، یک حرف بزرگ، یک حرف کوچک باشد و جمعا نباید کمتر از
                          هشت کارکتر باشد زبان سیستم حتما انگلیسی باشد
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="passwordValidation">
                          رمز عبور مورد تایید است
                        </b-form-valid-feedback>
                      </div>
                    </div><!--end col-->

                    <div class="col-lg-12">
                      <div class="form-group position-relative">
                        <label>تایید رمز عبور جدید :</label>
                        <i class="mdi mdi-key ml-3 icons"></i>
                        <b-form-input v-model="changePassword.retypePassword" type="password" class="form-control pl-5"
                                      placeholder="تایید رمز عبور جدید" required
                                      :state="retypePasswordValidation"></b-form-input>
                        <b-form-invalid-feedback :state="retypePasswordValidation">
                          {{validation.retypePassword}}
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="retypePasswordValidation">
                          {{validation.retypePassword}}
                        </b-form-valid-feedback>
                      </div>
                    </div><!--end col-->

                    <div class="col-lg-12 mt-2 mb-0">
                      <b-button v-if="loading" variant="primary" disabled>
                        <b-row>
                          <b-spinner small type="grow" class="m-1"></b-spinner>
                          <span class="ml-2 p-0">لطفا صبر کنید...</span>
                        </b-row>
                      </b-button>
                      <button v-else :disabled="loading" @click="editPassword" class="btn btn-primary">ذخیره رمز عبور
                      </button>
                    </div><!--end col-->
                  </div><!--end row-->

                </div><!--end col-->
              </div><!--end row-->

              <h5 class="text-md-left text-center mt-4 pt-2">جزئیات حقوقی :</h5>

              <div class="mt-3 text-md-left text-center d-sm-flex">
                <img :src="profileInfo.avatar" class="avatar float-md-left avatar-medium rounded-pill shadow mr-md-4"
                     alt="">

                <div class="mt-md-4 mt-3 mt-sm-0">
                  <a href="javascript:void(0)" class="btn btn-primary mt-2">تغییر لگو</a>
                  <a href="javascript:void(0)" class="btn btn-outline-primary mt-2 ml-2">حذف</a>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>نام شرکت</label>
                    <i class="mdi mdi-account-box ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" v-model="profileInfo.companyName"
                           placeholder="نام شرکت :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>سابقه کاری</label>
                    <i class="mdi mdi-account-plus ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" placeholder="سابقه کاری :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>شناسه شرکت</label>
                    <i class="mdi mdi-identifier ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" v-model="profileInfo.companyId"
                           placeholder="شناسه شرکت :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>مدیرعامل</label>
                    <i class="mdi mdi-fountain-pen-tip ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" v-model="profileInfo.companyManagerName"
                           placeholder="نام مدیر :">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>زمینه فعالیت</label>
                    <i class="mdi mdi-focus-field ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" v-model="profileInfo.companyField"
                           placeholder="زمینه فعالیت">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>شماره تلفن</label>
                    <i class="mdi mdi-phone ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" v-model="profileInfo.companyPhone"
                           placeholder="شماره تلفن">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>شماره فکس</label>
                    <i class="mdi mdi-fax ml-3 icons"></i>
                    <input type="text" class="form-control pl-5" v-model="profileInfo.companyFax"
                           placeholder="شماره فکس">
                  </div>
                </div><!--end col-->
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>میزان تحصیلات مدیرعامل</label>
                    <i class="mdi mdi-book-education ml-3 icons"></i>
                    <b-form-select v-model="education.selected"
                                   :options="education.options"
                                   value-field="item"
                                   text-field="name"
                                   disabled-field="notEnabled"
                                   class="form-control pl-5"></b-form-select>
                  </div>
                </div><!--end col-->
                <div class="col-md-12">
                  <div class="form-group position-relative">
                    <label>نشانی شرکت</label>
                    <i class="mdi mdi-home ml-3 icons"></i>
                    <b-form-textarea size="sm" class="form-control pl-5 address-box-height"
                                     v-model="profileInfo.companyBranchAddress[0]"
                                     placeholder="آدرس :"></b-form-textarea>
                  </div>
                </div>
              </div><!--end row-->
              <div class="row">
                <div class="col-sm-12">
                  <b-button v-if="loading" variant="primary" disabled>
                    <b-row>
                      <b-spinner small type="grow" class="m-1"></b-spinner>
                      <span class="ml-2 p-0">لطفا صبر کنید...</span>
                    </b-row>
                  </b-button>
                  <input v-else :disabled="loading" @click="editBusinessData" class="btn btn-primary"
                         value="ذخیره تنظیمات">
                </div><!--end col-->
              </div><!--end row-->

            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- Profile Setting End -->
  </div>
</template>

<script>
  import {profileByUserId} from "../graphql/profileByUserId";
  import {editProfile} from "../graphql/mutation/editProfile";
  import {editUser} from "../graphql/mutation/editUser";
  import {changePassword} from "../graphql/mutation/changePassword";

  export default {
    name: "editProfile",
    data() {
      return {
        loading: false,
        userProfileAvatar: null,
        gender: {
          selected: null,
          options: [
            {value: null, text: 'جنسیت', notEnabled: true},
            {value: 'مرد', text: 'مرد'},
            {value: 'زن', text: 'زن'},
          ]
        },
        education: {
          selected: 'دکترا',
          options: [
            {item: 'کارشناسی', name: 'کارشناسی'},
            {item: 'کارشناسی ارشد', name: 'کارشناسی ارشد'},
            {item: 'دکترا', name: 'دکترا'},
          ]
        },
        user: {
          fname: this.$auth.user.fname,
          lname: this.$auth.user.lname,
          mobile: this.$auth.user.mobile,
          email: this.$auth.user.email
        },
        profileInfo: {},
        changePassword: {
          oldPassword: '',
          password: '',
          retypePassword: ''
        },
        validation: {
          password: '',
          retypePassword: ''
        }
      }
    },
    apollo: {
      profileByUserId: {
        query: profileByUserId,
        variables() {
          return {
            user_id: this.$auth.user._id
          }
        },
        result({data}) {
          this.profileInfo = data.profileByUserId
          this.gender.selected = data.profileByUserId.gender
        }
      }
    },
    methods: {
      async editPersonalData() {
        this.loading = true
        let result = await this.$apollo.mutate({
          mutation: editUser,
          variables: {
            id: this.$auth.user._id,
            fname: this.profileInfo.user.fname,
            lname: this.profileInfo.user.lname
          }
        })
        let id = await this.$apollo.mutate({
          mutation: editProfile,
          variables: {
            user_id: this.$auth.user._id,
            melicode: this.profileInfo.melicode,
            gender: this.gender.selected,
            businessField: this.profileInfo.businessField,
            birthDate: this.profileInfo.birthDate,
            address: this.profileInfo.address[0],
            bio: this.profileInfo.bio
          }
        })
        this.loading = false
      },
      async editBusinessData() {
        this.loading = true
        let id = await this.$apollo.mutate({
          mutation: editProfile,
          variables: {
            user_id: this.$auth.user._id,
            companyName: this.profileInfo.companyName,
            companyId: this.profileInfo.companyId,
            companyManagerName: this.profileInfo.companyManagerName,
            companyField: this.profileInfo.companyField,
            companyPhone: this.profileInfo.companyPhone,
            companyFax: this.profileInfo.companyFax,
            companyBranchAddress: [this.profileInfo.companyBranchAddress[0]],
          }
        })
        console.log(id)
        this.loading = false
      },
      async editContactData() {
        this.loading = true
        let result = await this.$apollo.mutate({
          mutation: editUser,
          variables: {
            id: this.$auth.user._id,
            mobile: this.user.mobile,
            email: this.user.email
          }
        })
        console.log(result)
        let id = await this.$apollo.mutate({
          mutation: editProfile,
          variables: {
            user_id: this.$auth.user._id,
            website: this.profileInfo.website
          }
        })
        console.log(id)
        this.loading = false
      },
      async editPassword() {
        this.loading = true
        let result = await this.$apollo.mutate({
          mutation: changePassword,
          variables: {
            id: this.$auth.user._id,
            oldPassword: this.changePassword.oldPassword,
            password: this.changePassword.password,
            retypePassword: this.changePassword.retypePassword
          }
        })
        console.log(result)
        this.loading = false
      },
      onAvatarSelected() {
        console.log(this.userProfileAvatar)
        console.log(this.imageValidation)
      }
    },
    computed: {
      passwordValidation() {
        return (this.changePassword.password.length >= 8 && this.changePassword.password.match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$') !== null)
      },
      retypePasswordValidation() {
        if (!this.changePassword.retypePassword) {
          this.validation.retypePassword = 'تایید رمز نباید خالی باشد'
          return false
        } else if (this.changePassword.retypePassword === this.changePassword.password) {
          this.validation.retypePassword = 'تایید رمز مطابقت دارد'
          return true
        } else {
          this.validation.retypePassword = 'تایید رمز مطابقت ندارد'
          return false
        }
      },
      imageValidation() {
        if (process.env.MAX_FILE_SIZE >= this.userProfileAvatar.size) {
          console.log('========================IMAGE SIZE VALIDATE======================')
          return true
        }
      }
    },
  }
</script>

<style scoped>
  .address-box-height {
    height: 56px !important;
  }

  .my-relative-position {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .my-absolute-position {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .cursor-pointer {
    cursor: pointer !important;
    z-index: 100000;
  }

  .custom-select {
    padding-right: 50px !important;
    background-position: left 0.75rem center !important;
  }
</style>
