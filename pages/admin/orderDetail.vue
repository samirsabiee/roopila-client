<template>
  <div v-if="!loading">
    <!-- Job Detail Start -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-5 col-12">
            <div class="sidebar rounded shadow">
              <div class="widget border-bottom p-4">
                <h5 class="mb-0">اطلاعات کاربر</h5>
              </div>

              <div class="p-4">
                <div class="widget">
                  <i class="mdi mdi-account-check mdi-24px float-left mr-3"></i>
                  <div class="overflow-hidden d-block">
                    <h4 class="widget-title mb-0">نام و نام خانوادگی:</h4>
                    <p class="text-success">{{order.user.fname}} {{order.user.lname}}</p>
                  </div>
                </div>
                <div class="widget">
                  <i class="mdi mdi-map-marker mdi-24px float-left mr-3"></i>
                  <div class="overflow-hidden d-block">
                    <h4 class="widget-title mb-0">موبایل:</h4>
                    <p class="text-success">{{order.user.mobile}}</p>
                  </div>
                </div>
                <div class="widget">
                  <i class="mdi mdi-monitor mdi-24px float-left mr-3"></i>
                  <div class="overflow-hidden d-block">
                    <h4 class="widget-title mb-0">ایمیل:</h4>
                    <p class="text-success">{{order.user.email}}</p>
                  </div>
                </div>
                <div class="widget">
                  <i class="mdi mdi-briefcase-outline mdi-24px float-left mr-3"></i>
                  <div class="overflow-hidden d-block">
                    <h4 class="widget-title mb-0">کدملی:</h4>
                    <p class="text-success">{{order.user.profile.melicode}}</p>
                  </div>
                </div>
                <div class="widget">
                  <i class="mdi mdi-school mdi-24px float-left mr-3"></i>
                  <div class="overflow-hidden d-block">
                    <h4 class="widget-title mb-0">جنسیت:</h4>
                    <p class="text-success">{{order.user.profile.gender}}</p>
                  </div>
                </div>
                <div class="widget">
                  <i class="mdi mdi-currency-usd mdi-24px float-left mr-3"></i>
                  <div class="overflow-hidden d-block">
                    <h4 class="widget-title mb-0">زمینه فعالیت:</h4>
                    <p class="text-success">{{order.user.profile.businessField}}</p>
                  </div>
                </div>
                <div class="widget">
                  <i class="mdi mdi-currency-usd mdi-24px float-left mr-3"></i>
                  <div class="overflow-hidden d-block">
                    <h4 class="widget-title mb-0">تاریخ ثبت نام:</h4>
                    <p class="text-success">{{jalali(order.user.createdAt)}}</p>
                  </div>
                </div>
                <div class="widget">
                  <i class="mdi mdi-clock-outline mdi-24px float-left mr-3"></i>
                  <div class="overflow-hidden d-block">
                    <h4 class="widget-title mb-0">آدرس:</h4>
                    <p class="text-success mb-0">{{order.user.profile.address[0]}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-8 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="ml-lg-4">
              <h5>درخواست:</h5>
              <p> {{order.itemName}}</p>
              <h6>توضیحات: </h6>
              <p class="text-muted">{{order.description}}</p>

              <h6 class="mt-4">جزئیات سفارش: </h6>
              <p class="text-muted">این اطلاعات به صورت تقریبی بوده و توسط درخواست دهنده ثبت شده است</p>
              <ul class="list-unstyled">
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>تعداد : {{order.itemCount}}</li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>وزن : {{order.itemWeight}}</li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>حجم : {{order.itemVolume}}</li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>وضعیت : {{order.status}}</li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>قیمت استعلامی : <span class="text-success">{{order.inquiryAmount}}</span> تومان </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>قیمت نهایی : <span class="text-success">{{order.finalAmount}}</span> تومان </li>
              </ul>

              <b-row align="center">
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>تعیین قیمت استعلامی </label>
                    <i class="mdi mdi-cash-multiple ml-3 icons"></i>
                    <input v-model="order.inquiryAmount" type="text" class="form-control pl-5"
                           placeholder="قیمت استعلامی را وارد کنید">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label>تعیین قیمت نهایی </label>
                    <i class="mdi mdi-cash ml-3 icons"></i>
                    <input v-model="order.finalAmount" type="text" class="form-control pl-5"
                           placeholder="قیمت نهایی را وارد کنید">
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <b-form-select
                    v-model="order.status"
                    :options="orderStatusOptions"
                  ></b-form-select>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <b-button @click="saveAmount(order.id)" variant="primary" class="mt-2">ذخیره اطلاعات</b-button>
                </div>
              </b-row>

              <h6 class="mt-4">تجربه ، مهارت ها و مهارت های لازم: </h6>
              <p class="text-muted">تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                بلکه روزنامه.</p>
              <ul class="list-unstyled">
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>تجربه اثبات شده به
                  عنوان یک توسعه دهنده یا برنامه نویس دات نت
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>درک خوب از SQL و
                  پایگاه داده های رابطه ای ، به ویژه سرور مایکروسافت SQL.
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>طراحی ، توسعه و ایجاد
                  سرویس های وب و API های رستفول را تجربه کنید
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>پایه و اساس می داند
                  که چگونگی روند و روشهای چابک
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>درک خوب از برنامه
                  نویسی شی گرا.
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>درک خوب از برنامه
                  نویسی همزمان.
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>دانش صحیح از معماری
                  کاربرد و طراحی.
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>مهارت های عالی برای
                  حل مسئله و مهارت های تحلیلی
                </li>
              </ul>

              <div class="mt-4">
                <a href="page-job-apply.html" class="btn btn-outline-primary">انجام دهید <i
                  class="mdi mdi-send"></i></a>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Job Detail End -->
  </div>
</template>

<script>
  import {orderById} from "../../graphql/orderById";
  import moment from "jalali-moment";
  import {editOrder} from "../../graphql/mutation/editOrder";
  import orderStatus from "../../services/orderStatus";

  export default {
    name: "orderDetail",
    layout: 'admin',
    data() {
      return {
        loading: true,
        orderStatusOptions: orderStatus,
        order: {}
      }
    },
    mounted() {
      if (this.$route.query.id !== undefined) {
        this.showMore(this.$route.query.id)
      }
    },
    methods: {
      showMore(orderId) {
        this.$apollo.query({
          query: orderById,
          variables: {id: orderId}
        }).then(({data}) => {
          this.order = data.orderById
          this.loading = false
        })
      },
      jalali(date) {
        return moment(parseInt(date)).locale('fa').format('dddd، YYYY/MM/DD')
      },
      saveAmount(id){
        this.$apollo.mutate({
          mutation:editOrder,
          variables:{
            id,
            inquiryAmount:parseInt(this.order.inquiryAmount),
            finalAmount:parseInt(this.order.finalAmount),
            status:this.order.status
          }
        }).then(({data}) => {
          console.log(data)
        })
      }
    },
  }
</script>

<style scoped>

</style>
