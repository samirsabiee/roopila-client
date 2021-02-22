<template>
  <b-container fluid class="bg-light p-2 m-2" v-if="!$apollo.queries.payments.loading">
    <div class="form-group p-0">
      <input class="form-control" type="text" name="search" id="search" placeholder="جستجو">
    </div>
    <table class="table table-bordered table-striped text-center">
      <thead>
      <tr>
        <th>#</th>
        <th>شماره تراکنش</th>
        <th>شماره پیگیری</th>
        <th>شماره محصول</th>
        <th>وضعیت انجام</th>
        <th>نام پرداخت کننده</th>
        <th>مبلغ پرداختی</th>
        <th>تاریخ پرداخت</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(payment,index) in payments.payments" :key="index">
        <td>{{++index}}</td>
        <td>213225</td>
        <td>{{payment.pursuitNumber}}</td>
        <td>{{payment.order_id}}</td>
        <td>{{payment.paymentStatus}}</td>
        <td>{{payment.user.fname}} {{payment.user.lname}}</td>
        <td>{{payment.amountPay}}</td>
        <td>{{payment.createdAt}}</td>
      </tr>
      </tbody>
    </table>
    <b-pagination align="center" v-model="paymentsArgs.page" :total-rows="payments.paginate.total"
                  :per-page="payments.paginate.limit"></b-pagination>
  </b-container>
</template>

<script>
  import {payments} from "../../graphql/payments";

  export default {
    name: "payments",
    layout: "admin",
    data() {
      return {
        paymentsArgs: {
          page: 1,
          limit: 10
        }
      }
    },
    apollo:{
      payments:{
        query:payments,
        variables() {
          return {
            page: this.paymentsArgs.page,
            limit: this.paymentsArgs.limit
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
