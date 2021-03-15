<template>
  <b-container fluid v-if="!$apollo.queries.profileByUserId.loading">
    <!-- Hero Start -->
    <section class="bg-profile pt-0">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="public-profile position-relative p-4 bg-white overflow-hidden rounded shadow"
                     style="z-index: 1;">
                  <div class="row align-items-center">
                    <div class="col-lg-2 col-md-3 text-md-left text-center">
                      <b-img-lazy :src="assetsURL(profileInfo.avatar)"
                                  class="avatar avatar-medium rounded-pill shadow d-block mx-auto" alt=""></b-img-lazy>
                    </div><!--end col-->

                    <div class="col-lg-10 col-md-9">
                      <div class="row align-items-center">
                        <div class="col-md-7 text-md-left text-center mt-4 mt-sm-0">
                          <h3 class="title mb-0">{{fullName}}</h3>
                          <small class="text-muted h6 mr-2">{{profileInfo.businessField}}</small>
                          <ul class="list-inline mb-0 mt-3">
                            <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted"
                                                                 title="لینکدین"><i class="mdi mdi-instagram mr-2"></i>samir</a>
                            </li>
                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted" title="اسکایپ"><i
                              class="mdi mdi-skype mr-2"></i>@samir</a></li>
                          </ul>
                        </div><!--end col-->
                        <div class="col-md-5 text-md-right text-center">
                          <ul class="list-unstyled profile-icons mb-0 mt-4">
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded-pill"><i
                              class="mdi mdi-email" title="پیام ها"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded-pill"><i
                              class="mdi mdi-bell" title="اعلانات"></i></a></li>
                            <li class="list-inline-item">
                              <nuxt-link to="/editProfile"
                                         class="rounded-pill bg-dark"><i
                                class="mdi mdi-tools text-light" title="ویرایش پروفایل"></i></nuxt-link>
                            </li>
                          </ul><!--end icon-->
                        </div><!--end col-->
                      </div><!--end row-->
                    </div><!--end col-->
                  </div><!--end row-->
                </div>
              </div><!--end col-->
            </div><!--end row-->
          </div><!--ed container-->
        </div>
      </div>
    </section><!--end section-->
    <!-- Hero End -->
    <!-- Profile Start -->
    <section class="section mt-60">
      <div class="container mt-lg-3">
        <div class="row">
          <div class="col-lg-4 col-md-5 col-12">
            <div class="p-4 rounded shadow">
              <h5>وضعیت پروفایل</h5>
              <div class="progress-box mt-4">
                <h6 class="title text-muted">پیشرفت</h6>
                <div class="progress">
                  <div class="progress-bar position-relative bg-primary" style="width:50%;">
                    <div class="progress-value d-block text-muted h6">24 / 48</div>
                  </div>
                </div>
              </div><!--end process box-->
            </div>
          </div><!--end col-->

          <div class="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="ml-lg-3">
              <div class="border-bottom pb-4">
                <h5>{{fullName}}</h5>
                <p class="text-muted mb-0">{{profileInfo.bio}}</p>
              </div>

              <div class="border-bottom pb-4">
                <div class="row">
                  <div class="col-lg-6 mt-4">
                    <h5>جزئیات شخصی :</h5>
                    <ul class="list-inline mb-0 mt-4">
                      <li>
                        <i class="mdi mdi-email float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">کدملی :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{profileInfo.melicode}}</a>
                        </div>
                      </li>
                      <li class="mt-3">
                        <i class="mdi mdi-phone float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">شماره تماس :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{profileInfo.user.mobile}}</a>
                        </div>
                      </li>
                      <li class="mt-3">
                        <i class="mdi mdi-email float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">ایمیل :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{profileInfo.user.email}}</a>
                        </div>
                      </li>
                      <li class="mt-3">
                        <i class="mdi mdi-book float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">جنسیت :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{profileInfo.gender}}</a>
                        </div>
                      </li>

                      <li class="mt-3">
                        <i class="mdi mdi-google float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">تاریخ تولد :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{profileInfo.birthDate}}</a>
                        </div>
                      </li>

                      <li class="mt-3">
                        <i class="mdi mdi-earth float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">وب سایت :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{profileInfo.website}}</a>
                        </div>
                      </li>

                      <li class="mt-3">
                        <i class="mdi mdi-cake-variant float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">زمینه فعالیت :</h6>
                          <p class="text-muted mb-0">{{profileInfo.businessField}}</p>
                        </div>
                      </li>

                      <li class="mt-3">
                        <i class="mdi mdi-map-marker float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">محل زندگی :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{profileInfo.address[0]}}</a>
                        </div>
                      </li>
                    </ul>
                  </div><!--end col-->

                  <div class="col-lg-6 mt-4 pt-2 pt-sm-0">
                    <h5>جزئیات حقوقی :</h5>

                    <ul class="list-inline mb-0 mt-4">
                      <li class="key-feature d-flex p-3 bg-white rounded shadow">
                        <div class="icons text-center rounded-pill mr-3 mt-2">
                          <img src="" class="avatar avatar-ex-sm" alt="">
                        </div>
                        <div class="content">
                          <h4 class="title mb-0">نام شرکت: {{profileInfo.companyName}}</h4>
                          <p class="text-muted mb-0">سابقه کاری</p>
                          <p class="text-muted mb-0">شناسه شرکت: {{profileInfo.companyId}}</p>
                        </div>
                      </li>

                      <li class="key-feature d-flex p-3 bg-white rounded shadow mt-4">
                        <div class="icons text-center rounded-pill mr-3 mt-2">
                          <img src="" class="avatar avatar-ex-sm" alt="">
                        </div>
                        <div class="content">
                          <h4 class="title mb-0">مدیرعامل: {{profileInfo.companyManagerName}}</h4>
                          <p class="text-muted mb-0">زمینه فعالیت: {{profileInfo.companyField}}</p>
                          <p class="text-muted mb-0">میزان تحصیلات</p>
                        </div>
                      </li>

                      <li class="key-feature d-flex p-3 bg-white rounded shadow mt-4">
                        <div class="icons text-center rounded-pill mr-3 mt-2">
                          <img src="" class="avatar avatar-ex-sm" alt="">
                        </div>
                        <div class="content">
                          <h4 class="title mb-0">آدرس شرکت: {{profileInfo.companyBranchAddress[0]}}</h4>
                          <p class="text-muted mb-0">شماره تلفن: {{profileInfo.companyPhone}}</p>
                          <p class="text-muted mb-0">شماره فکس: {{profileInfo.companyFax}}</p>
                        </div>
                      </li>
                    </ul>
                  </div><!--end col-->
                </div><!--end row-->
              </div>
            </div>
          </div><!--end col-->
        </div><!--end row-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- Profile End -->
  </b-container>
</template>

<script>
  import {profileByUserId} from "../graphql/profileByUserId";

  export default {
    name: "myProfile",
    data() {
      return {
        profileInfo: {}
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
        }
      }
    },
    computed: {
      fullName() {
        return `${this.profileInfo.user.fname} ${this.profileInfo.user.lname}`;
      }
    },
  }
</script>

<style scoped>

</style>
