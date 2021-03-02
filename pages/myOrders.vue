<template>
  <b-container fluid class="mt-74px">
    <b-table striped hover :items="orders"></b-table>
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
</style>
