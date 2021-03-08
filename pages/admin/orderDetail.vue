<template>
  <div v-if="!loading">
    <!-- Job Detail Start -->
    <section class="section p-0 pt-2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-5 col-12">
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

          <div class="col-lg-9 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="ml-lg-4">
              <h5>درخواست:</h5>
              <p> {{order.itemName}}</p>
              <h6>توضیحات: </h6>
              <p class="text-muted">{{order.description}}</p>

              <h6 class="mt-4">جزئیات سفارش: </h6>
              <p class="text-muted">اطلاعات <span class="text-danger">تعداد</span>، <span class="text-danger">وزن</span>
                و <span class="text-danger">حجم</span> به صورت تقریبی بوده و توسط کاربر وارد شده است</p>
              <ul class="list-unstyled">
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>تعداد :
                  {{order.itemCount}}
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>وزن :
                  {{order.itemWeight}}
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>حجم :
                  {{order.itemVolume}}
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>وضعیت :
                  {{order.status}}
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>قیمت استعلامی : <span
                  class="text-success">{{order.inquiryAmount}}</span> تومان
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>قیمت نهایی : <span
                  class="text-success">{{order.finalAmount}}</span> تومان
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>تاریخ درخواست :
                  {{jalali(order.createdAt)}}
                </li>
                <li class="text-muted"><i class="mdi mdi-pan-right text-success mdi-18px mr-2"></i>تاریخ به روز رسانی :
                  {{jalali(order.updatedAt)}}
                </li>
              </ul>

              <b-row align="center" v-if="showChangeAmountBox">
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
                    v-model="orderStatusSelected"
                    :options="orderStatusOptions"
                  ></b-form-select>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <b-button @click="saveAmount(order.id)" variant="primary" class="mt-2">ذخیره اطلاعات</b-button>
                </div>
              </b-row>

              <h6 class="mt-4"> فایل الصاقی و نمونه کالای درخواستی <a :href="assetsURL(order.itemSample)"
                                                                      target="_blank">دانلود</a></h6>
              <h6 class="mt-4">اطلاعات پرداخت</h6>
              <div class="row justify-content-center mb-5">
                <div class="col-12 mt-3">
                  <div class="table-responsive crypto-table bg-white shadow rounded m-0">
                    <table class="table mb-0 table-center">
                      <thead>
                      <tr class="text-center">
                        <th scope="col">#</th>
                        <th scope="col">ip کاربر</th>
                        <th scope="col" style="max-width: 150px;">شماره پیگیری</th>
                        <th scope="col" style="max-width: 150px;">مبلغ پرداختی</th>
                        <th scope="col" style="max-width: 150px;">وضعیت پرداخت</th>
                        <th scope="col" style="width: 350px;">شماره شبا</th>
                        <th scope="col" style="max-width: 150px;">درگاه</th>
                        <th scope="col" style="max-width: 150px;">تاریخ پرداخت</th>
                      </tr>
                      </thead>
                      <tbody class="text-center">
                      <tr v-for="(payment,index) in order.payment.payments" :key="index">
                        <td scope="row">{{index+1}}</td>
                        <td>
                          <p class="font-weight-bold">{{payment.user_ip}}</p>
                        </td>
                        <td class="text-success">{{payment.pursuitNumber}}</td>
                        <td>{{payment.amountPay}}</td>
                        <td>{{payment.paymentStatus}}</td>
                        <td><p>{{payment.cardShaba}}</p></td>
                        <td>{{payment.bankPortId}}</td>
                        <td>{{jalali(payment.createdAt)}}</td>
                      </tr>
                      </tbody>
                    </table><!--end table-->
                  </div>
                </div><!--end col-->
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
        orderStatusSelected:'در انتظار بررسی',
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
          this.orderStatusSelected = data.orderById.status
          this.loading = false
        })
      },
      jalali(date) {
        return moment(parseInt(date)).locale('fa').format('dddd، YYYY/MM/DD')
      },
      saveAmount(id) {
        this.$apollo.mutate({
          mutation: editOrder,
          variables: {
            id,
            inquiryAmount: parseInt(this.order.inquiryAmount),
            finalAmount: parseInt(this.order.finalAmount),
            status: this.orderStatusSelected
          }
        }).then(({data}) => {
         this.order.status = data.editOrder.status
        })
      }
    },
    computed: {
      showChangeAmountBox() {
        return this.order.status !== 'انجام شده';
      }
    },
  }
</script>

<style scoped>

</style>
