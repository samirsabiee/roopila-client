<template>
  <b-container fluid class="container section border-top mt-74px">
    <div class="row justify-content-center">
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
              <th scope="col" style="max-width: 150px;">عملیات</th>
            </tr>
            </thead>
            <tbody class="text-center">
            <tr v-for="(order,index) in orders" :key="index">
              <td scope="row">{{index+1}}</td>
              <td>
                <p class="font-weight-bold">{{order.itemName}}</p>
              </td>
              <td class="text-success">{{order.itemCount}}</td>
              <td>{{order.inquiryAmount}} تومان</td>
              <td>{{order.finalAmount}} تومان</td>
              <td><p>{{order.description}}</p></td>
              <td><span class="bg-info shadow shadow-sm p-2 rounded text-white">درحال بررسی</span></td>
              <td><a href="javascript:void(0)" class="btn btn-danger">لغو درخواست</a></td>
            </tr>
            </tbody>
          </table><!--end table-->
        </div>
      </div><!--end col-->
    </div><!--end row-->
  </b-container>
</template>

<script>
  import {ordersByUserId} from "../graphql/ordersByUserId";

  export default {
    name: "myOrders",
    data() {
      return {
        orders: [],
      }
    },
    apollo: {
      ordersByUserId: {
        query: ordersByUserId,
        variables() {
          return {
            user_id: this.$auth.user._id
          }
        },
        result({data}){
          this.orders = data.ordersByUserId.orders
        }
      }
    }
  }
</script>

<style scoped>
 .mt-74px{
   margin-top: 74px;
 }
 .table th, .table td {
   vertical-align: baseline;
 }
</style>
