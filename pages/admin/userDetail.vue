<template>
  <b-container fluid v-if="!$apollo.queries.user.loading">
    <!-- Hero Start -->
    <section class="bg-profile pt-0">
      <div class="home-center">
        <div class="home-desc-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="public-profile position-relative top-position p-4 bg-white overflow-hidden rounded shadow"
                     style="z-index: 1;">
                  <div class="row align-items-center">
                    <div class="col-lg-2 col-md-3 text-md-left text-center">
                      <b-img-lazy :src="user.profile.avatar"
                                  class="avatar avatar-medium rounded-pill shadow d-block mx-auto" alt=""></b-img-lazy>
                    </div><!--end col-->

                    <div class="col-lg-10 col-md-9">
                      <div class="row align-items-center">
                        <div class="col-md-7 text-md-left text-center mt-4 mt-sm-0">
                          <h3 class="title mb-0">{{fullName}}</h3>
                          <small class="text-muted h6 mr-2">{{user.profile.businessField}}</small>
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
    <section class="section p-0">
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
                <p class="text-muted mb-0">{{user.profile.bio}}</p>
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
                          <a href="javascript:void(0)" class="text-muted">{{user.profile.melicode}}</a>
                        </div>
                      </li>
                      <li class="mt-3">
                        <i class="mdi mdi-phone float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">شماره تماس :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{user.mobile}}</a>
                        </div>
                      </li>
                      <li class="mt-3">
                        <i class="mdi mdi-email float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">ایمیل :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{user.email}}</a>
                        </div>
                      </li>
                      <li class="mt-3">
                        <i class="mdi mdi-book float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">جنسیت :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{user.profile.gender}}</a>
                        </div>
                      </li>

                      <li class="mt-3">
                        <i class="mdi mdi-google float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">تاریخ تولد :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{user.profile.birthDate}}</a>
                        </div>
                      </li>

                      <li class="mt-3">
                        <i class="mdi mdi-earth float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">وب سایت :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{user.profile.website}}</a>
                        </div>
                      </li>

                      <li class="mt-3">
                        <i class="mdi mdi-cake-variant float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">زمینه فعالیت :</h6>
                          <p class="text-muted mb-0">{{user.profile.businessField}}</p>
                        </div>
                      </li>

                      <li class="mt-3">
                        <i class="mdi mdi-map-marker float-left text-muted mr-2"></i>
                        <div class="overflow-hidden d-block">
                          <h6 class="text-primary mb-0">محل زندگی :</h6>
                          <a href="javascript:void(0)" class="text-muted">{{user.profile.address[0]}}</a>
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
                          <h4 class="title mb-0">نام شرکت: {{user.profile.companyName}}</h4>
                          <p class="text-muted mb-0">سابقه کاری</p>
                          <p class="text-muted mb-0">شناسه شرکت: {{user.profile.companyId}}</p>
                        </div>
                      </li>

                      <li class="key-feature d-flex p-3 bg-white rounded shadow mt-4">
                        <div class="icons text-center rounded-pill mr-3 mt-2">
                          <img src="" class="avatar avatar-ex-sm" alt="">
                        </div>
                        <div class="content">
                          <h4 class="title mb-0">مدیرعامل: {{user.profile.companyManagerName}}</h4>
                          <p class="text-muted mb-0">زمینه فعالیت: {{user.profile.companyField}}</p>
                          <p class="text-muted mb-0">میزان تحصیلات</p>
                        </div>
                      </li>

                      <li class="key-feature d-flex p-3 bg-white rounded shadow mt-4">
                        <div class="icons text-center rounded-pill mr-3 mt-2">
                          <img src="" class="avatar avatar-ex-sm" alt="">
                        </div>
                        <div class="content">
                          <h4 class="title mb-0">آدرس شرکت: {{user.profile.companyBranchAddress[0]}}</h4>
                          <p class="text-muted mb-0">شماره تلفن: {{user.profile.companyPhone}}</p>
                          <p class="text-muted mb-0">شماره فکس: {{user.profile.companyFax}}</p>
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

    <div class="row justify-content-center mb-5">
      <div class="col-12 col-lg-10">
        <div class="table-responsive crypto-table bg-white shadow rounded m-0">
          <table class="table mb-0 table-center">
            <thead>
            <tr class="text-center">
              <th scope="col">#</th>
              <th scope="col">نام کالا</th>
              <th scope="col" style="max-width: 150px;">تعداد</th>
              <th scope="col" style="max-width: 150px;">قیمیت پیشنهادی</th>
              <th scope="col" style="max-width: 150px;">قیمیت نهایی</th>
              <th scope="col" style="max-width: 350px;">توضیحات</th>
              <th scope="col" style="max-width: 150px;">وضعبت</th>
            </tr>
            </thead>
            <tbody class="text-center">
            <tr v-for="(order,index) in user.orders" :key="index">
              <td scope="row">{{index+1}}</td>
              <td>
                <p class="font-weight-bold">{{order.itemName}}</p>
              </td>
              <td class="text-success">{{order.itemCount}}</td>
              <td>{{order.inquiryAmount}} تومان</td>
              <td>{{order.finalAmount}} تومان</td>
              <td><p>{{order.description}}</p></td>
              <td>
                <b-form-select
                  v-model="order.status"
                  :options="orderStatusOptions"
                  @change="saveOrderStatus(order.id,order.status)"
                ></b-form-select>
              </td>
            </tr>
            </tbody>
          </table><!--end table-->
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </b-container>
</template>

<script>
  import {user} from "../../graphql/user";
  import {editOrder} from "../../graphql/mutation/editOrder";

  export default {
    middleware: ['adminOrSuperAdmin'],
    name: "userDetail",
    layout: 'admin',
    data() {
      return {
        user: {},
        orderStatusOptions: [
          {value: 'در انتظار بررسی', text: 'در انتظار بررسی'},
          {value: 'در حال بررسی', text: 'در حال بررسی'},
          {value: 'تایید شده', text: 'تایید شده'},
          {value: 'در حال استعلام قیمت', text: 'در حال استعلام قیمت'},
          {value: 'انجام شده', text: 'انجام شده'},
          {value: 'لغو شده', text: 'لغو شده'},
        ]
      }
    },
    apollo: {
      user: {
        query: user,
        variables() {
          return {
            id: this.$route.query.id
          }
        },
        result({data}) {
          this.user = data.user
        }
      }
    },
    computed: {
      fullName() {
        return `${this.user.fname} ${this.user.lname}`;
      }
    },
    methods: {
      async saveOrderStatus(id, status) {
        console.log(id, status)
        let result = await this.$apollo.mutate({
          mutation: editOrder,
          variables: {id, status}
        })
        console.log(result)
      }
    }
  }
</script>

<style scoped>
  .table th, .table td {
    vertical-align: baseline;
  }

  .top-position {
    top: 10px !important;
  }
</style>
