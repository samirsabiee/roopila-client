<template>
  <b-container fluid class="m-2 p-0 bg-light" v-if="!$apollo.queries.users.loading">
    <b-row>
      <b-col>
        <b-form-input class="m-3" placeholder="جستجوی کاربر"></b-form-input>
        <table class="table table-striped table-bordered text-center m-3">
          <thead>
          <tr>
            <th>#</th>
            <th>نام و نام خانوادگی</th>
            <th>کد ملی</th>
            <th>تعداد سفارشات</th>
            <th>عملیات</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user,index) in users.users" :key="index">
            <td>{{++index}}</td>
            <td>{{user.fname}} {{user.lname}}</td>
            <td v-if="user.profile !== null && user.profile.melicode !== null"> {{user.profile.melicode}}</td>
            <td v-else> -</td>
            <td v-if="user.orders !== null">{{user.orders.length}}</td>
            <td><i class="fas fa-eye"></i></td>
          </tr>
          </tbody>
        </table>
        <b-pagination align="center" v-model="usersArgs.page" :total-rows="users.paginate.total"
                      :per-page="users.paginate.limit"></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {users} from "../../graphql/users";

  export default {
    name: "users",
    layout: "admin",
    data() {
      return {
        usersArgs: {
          page: 1,
          limit: 10
        }
      }
    },
    apollo: {
      users: {
        query: users,
        variables() {
          return {
            page: this.usersArgs.page,
            limit: this.usersArgs.limit
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
