<template>
  <b-container fluid class="bg-light p-2 m-2" v-if="!$apollo.queries.orders.loading">
    <div class="col p-0 form-group">
      <input class="col form-control" type="text" placeholder="جستجو ...">
    </div>
    <table class="table table-striped table-bordered text-center">
      <thead>
      <tr>
        <th>#</th>
        <th>نام سفارش دهنده</th>
        <th>نام کالا</th>
        <th>تعداد</th>
        <th>قیمت استعلام</th>
        <th>قیمت نهایی</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(order,index) in orders.orders" :key="index">
        <td>{{++index}}</td>
        <td v-if="order.user !== null && order.user.fname !== null">{{order.user.fname}} {{order.user.lname}}</td>
        <td v-else>-</td>
        <td>{{order.itemName}}</td>
        <td>{{order.itemCount}}</td>
        <td>{{order.inquiryAmount}}</td>
        <td>{{order.finalAmount}}</td>
        <td>{{order.status}}</td>
        <td>
          <nuxt-link :to="{path:'/admin/orderDetail',query:{id:order.id}}"><i class="fas fa-eye"></i></nuxt-link>
        </td>
      </tr>
      </tbody>
    </table>
    <b-pagination align="center" v-model="paginate.page" :total-rows="orders.paginate.total"
                  :per-page="orders.paginate.limit"></b-pagination>
  </b-container>
</template>

<script>
  import {orders} from '../../graphql/orders'
  import {orderById} from "../../graphql/orderById";
  import search from "../../services/search";

  export default {
    middleware: ['adminOrSuperAdmin'],
    name: "orders",
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
      this.paginate.page = this.$store.state.pagination.adminOrdersPaginate.page
    },
    apollo: {
      orders: {
        query: orders,
        variables() {
          return {
            page: this.paginate.page,
            limit: this.paginate.limit
          }
        }
      }
    },
    computed: {
      page() {
        return this.paginate.page;
      }
    },
    watch: {
      page(newValue, oldValue) {
        this.$store.dispatch('pagination/setAdminOrdersPaginateData', {page: this.paginate.page})
      }
    },
  }
</script>

<style scoped>

</style>
