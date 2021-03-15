<template>
  <b-container fluid class="bg-light p-2 m-2" v-if="!$apollo.queries.payments.loading">
    <div class="form-group p-0">
      <input class="form-control" type="text" name="search" id="search" placeholder="جستجو">
    </div>
    <table class="table table-bordered table-striped text-center">
      <thead>
      <tr>
        <th>#</th>
        <th>ip کاربر</th>
        <th>شماره پیگیری</th>
        <th>شماره محصول</th>
        <th>وضعیت انجام</th>
        <th>شماره کارت</th>
        <th>شماره شبا</th>
        <th>شماره درگاه</th>
        <th>نام پرداخت کننده</th>
        <th>مبلغ پرداختی</th>
        <th>تاریخ پرداخت</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(payment,index) in payments.payments" :key="index">
        <td>{{++index}}</td>
        <td :title="payment.user_ip">{{payment.user_ip}}</td>
        <td :title="payment.pursuitNumber">{{payment.pursuitNumber}}</td>
        <td :title="payment.order_id">{{payment.order_id}}</td>
        <td :title="payment.paymentStatus">{{payment.paymentStatus}}</td>
        <td :title="payment.cardNumber">{{payment.cardNumber}}</td>
        <td :title="payment.cardShaba">{{payment.cardShaba}}</td>
        <td :title="payment.bankPortId">{{payment.bankPortId}}</td>
        <td :title="`${payment.user.fname} ${payment.user.lname}`">{{payment.user.fname}} {{payment.user.lname}}</td>
        <td :title="payment.amountPay">{{payment.amountPay}}</td>
        <td :title="jalali(payment.createdAt)">{{jalali(payment.createdAt)}}</td>
      </tr>
      </tbody>
    </table>
    <b-pagination align="center" v-model="paginate.page" :total-rows="payments.paginate.total"
                  :per-page="payments.paginate.limit"></b-pagination>
  </b-container>
</template>

<script>
  import {payments} from "../../graphql/payments";
  import moment from "jalali-moment";
  import search from "../../services/search";

  export default {
    middleware: ['adminOrSuperAdmin'],
    name: "payments",
    layout: "admin",
    data() {
      return {
        paginate: {
          page: 1,
          limit: 10
        }
      }
    },
    mounted() {
      this.paginate.page = this.$store.state.pagination.adminPaymentsPaginate.page
    },
    apollo: {
      payments: {
        query: payments,
        variables() {
          return {
            page: this.paginate.page,
            limit: this.paginate.limit
          }
        }
      }
    },
    methods: {
      jalali(date) {
        return moment(parseInt(date)).locale('fa').format('dddd، YYYY/MM/DD')
      },
    },
    computed: {
      page() {
        return this.paginate.page;
      }
    },
    watch: {
      page(newValue, oldValue) {
        this.$store.dispatch('pagination/setAdminPaymentsPaginateData', {page: this.paginate.page})
      }
    },
  }
</script>

<style scoped>

</style>
