<template>
  <b-container fluid class="m-2 p-0 bg-light" v-if="!$apollo.queries.users.loading">
    <b-row>
      <b-col>
        <b-form-input class="m-3" :onchange="searchUsers()" v-model="search" placeholder="جستجوی کاربر"></b-form-input>
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
          <tr v-for="(user,index) in users" :key="index">
            <td>{{++index}}</td>
            <td>{{user.fname}} {{user.lname}}</td>
            <td v-if="user.profile !== null && user.profile.melicode !== null"> {{user.profile.melicode}}</td>
            <td v-else> -</td>
            <td v-if="user.orders !== null">{{user.orders.length}}</td>
            <td>
              <nuxt-link :to="{name:'admin-userDetail',query:{id:user.id}}"><i class="fas fa-eye"></i></nuxt-link>
            </td>
          </tr>
          </tbody>
        </table>
        <b-pagination align="center" v-model="paginate.page" :total-rows="paginate.total"
                      :per-page="paginate.limit"></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {users} from "../../graphql/users";
  import search from "../../services/search";
  import {userSearch} from "../../graphql/front/userSearch";

  export default {
    middleware: ['adminOrSuperAdmin'],
    name: "users",
    layout: "admin",
    data() {
      return {
        users: [],
        paginate: {
          page: 1,
          limit: 10,
          total: 0
        },
        search: ''
      }
    },
    apollo: {
      users: {
        query: users,
        variables() {
          return {
            page: this.paginate.page,
            limit: this.paginate.limit
          }
        },
        result({data}) {
          this.users = data.users.users
          this.paginate.page = data.users.paginate.page
          this.paginate.limit = data.users.paginate.limit
          this.paginate.total = data.users.paginate.total
        }
      }
    },
    methods: {
      searchUsers() {
        if (this.search !== '') {
          this.$apollo.query({
            query: userSearch,
            variables: {needle: this.search}
          }).then(({data}) => {
            this.users = data.userSearch.users
            this.paginate.page = data.userSearch.paginate.page
            this.paginate.limit = data.userSearch.paginate.limit
            this.paginate.total = data.userSearch.paginate.total
          })
        } else {
          this.$apollo.query({
            query: users,
            variables: {
              page: 1,
              limit: 10
            }
          }).then(({data}) => {
            this.users = data.users.users
            this.paginate.page = data.users.paginate.page
            this.paginate.limit = data.users.paginate.limit
            this.paginate.total = data.users.paginate.total
          })
        }
      }
    },
  }
</script>

<style scoped>

</style>
