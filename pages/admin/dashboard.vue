<template>
  <b-container fluid class="mt-5">
    <b-row no-gutters >
      <b-col class="bg-light rect-box rounded p-3 d-flex flex-column justify-content-center align-items-center">
        <h5>مجموع کاربران</h5>
        <h1 class="text-left">100,000</h1>
      </b-col>
      <b-col class="bg-light rect-box rounded p-3 d-flex flex-column mr-1 justify-content-center align-items-center">
        <h5>مجموع سفارشات</h5>
        <h1 class="text-left">50,000</h1>
      </b-col>
      <b-col class="bg-light rect-box rounded p-3 d-flex flex-column mr-1 justify-content-center align-items-center">
        <h5>مجموع تراکنش ها</h5>
        <h1 class="text-left">49,000</h1>
      </b-col>
      <b-col class="bg-light rect-box rounded p-3 d-flex flex-column mr-1 justify-content-center align-items-center">
        <h5>مجموع اخبار</h5>
        <h1 class="text-left">1000</h1>
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
          <tr>
            <td>1</td>
            <td>ایفون pro</td>
            <td>خریده شده</td>
            <td>علیپور</td>
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
          <tr>
            <td>1</td>
            <td>2545</td>
            <td>پرداخت شده</td>
            <td>31,000,000</td>
            <td>علیپور</td>
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
        name: "dashboard",
        layout:"admin",
      apollo:{
        dashboard: {
          query:dashboard,
          context(){
            return {
              headers:{
                'authorization':this.token
              }
            }
          }
        }
      },
      data() {
        return {
          token:this.getToken,
          totalUsers: '',
          totalOrders:'',
          totalPayments:'',
          totalNews:'',
          lastOrders: null,
          lastPayments:null
        }
      },
      computed: {
        getToken() {
          return this.$apolloHelpers.getToken('apollo-token')
        }
      },
    }
</script>

<style scoped>

</style>
