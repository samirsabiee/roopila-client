<template>
  <b-container fluid class="m-2 p-0" v-if="!$apollo.queries.dashboard.loading">
    <b-row no-gutters>
      <b-col class="bg-light rect-box rounded p-3 d-flex flex-column justify-content-center align-items-center">
        <h5>مجموع کاربران</h5>
        <h1 class="text-left">{{dashboard.totalUsers}}</h1>
      </b-col>
      <b-col class="bg-light rect-box rounded p-3 d-flex flex-column mr-1 justify-content-center align-items-center">
        <h5>مجموع سفارشات</h5>
        <h1 class="text-left">{{dashboard.totalOrders}}</h1>
      </b-col>
      <b-col class="bg-light rect-box rounded p-3 d-flex flex-column mr-1 justify-content-center align-items-center">
        <h5>مجموع تراکنش ها</h5>
        <h1 class="text-left">{{dashboard.totalPayments}}</h1>
      </b-col>
      <b-col class="bg-light rect-box rounded p-3 d-flex flex-column mr-1 justify-content-center align-items-center">
        <h5>مجموع اخبار</h5>
        <h1 class="text-left">{{dashboard.totalNews}}</h1>
      </b-col>
    </b-row>
    <b-row no-gutters align-h="center" class="mt-3">
      <b-col class="bg-light rounded p-3">
        <h5 align="center">آخرین سفارشات</h5>
        <hr>
        <table class="table table-bordered table-striped text-center">
          <thead>
          <tr>
            <th>#</th>
            <th>نام کالا</th>
            <th>وضعیت</th>
            <th>مشتری</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(order,index) in dashboard.lastOrders" :key="index">
            <td>{{++index}}</td>
            <td>{{order.itemName}}</td>
            <td>{{order.status}}</td>
            <td v-if="order.user !== null">{{order.user.fname}}</td>
          </tr>
          </tbody>
        </table>
      </b-col>
      <b-col class="bg-light rounded p-3 mr-1">
        <h5 align="center">آخرین تراکنش ها</h5>
        <hr>
        <table class="table table-bordered table-striped text-center">
          <thead>
          <tr>
            <th>#</th>
            <th>شماره سفارش</th>
            <th>وضعیت</th>
            <th>مبلغ</th>
            <th>پرداخت کننده</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(payment,index) in dashboard.lastPayments" :key="index">
            <td>{{++index}}</td>
            <td>{{payment.pursuitNumber}}</td>
            <td>{{payment.paymentStatus}}</td>
            <td>{{payment.amountPay}}</td>
            <td v-if="payment.user !== null">{{payment.user.fname}}</td>
          </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import {dashboard} from "../../graphql/dashboard";

    export default {
      middleware:['admin'],
        name: "dashboard",
        layout:"admin",
      apollo:{
        dashboard: {
          query:dashboard
        }
      },
      data() {
        return {
          totalUsers: '',
          totalOrders:'',
          totalPayments:'',
          totalNews:'',
          lastOrders: null,
          lastPayments:null
        }
      },
    }
</script>

<style scoped>

</style>
