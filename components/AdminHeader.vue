<template>
  <div>
    <div class="d-flex flex-row justify-content-between align-items-center bg-light shadow shadow-sm p-3">
      <nuxt-link to="/"><h4>روپیلا</h4></nuxt-link>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="info" :src="assetsURL(userProfileAvatar)" class="mr-3"></b-avatar>
        <span class="mr-auto m-2 pr-3 pl-3">{{this.$auth.user.fname}} {{this.$auth.user.lname}}</span>
        <b-badge>9</b-badge>
      </b-list-group-item>
      <b-button @click="logout" class="btn-danger">خروج</b-button>

    </div>
  </div>
</template>

<script>
  import {profileByUserIdAvatar} from "../graphql/profileByUserIdAvatar";

  export default {
    name: "AdminHeader",
    data() {
      return {
        userProfileAvatar: null
      }
    },
    apollo: {
      profileByUserId: {
        query: profileByUserIdAvatar,
        variables() {
          return {
            user_id: this.$auth.user._id
          }
        },
        result({data}) {
          this.userProfileAvatar = data.profileByUserId.avatar
        }
      }
    },
    methods: {
      logout() {
        this.$auth.logout()
      }
    },
  }
</script>

<style scoped>
  .circle-avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    object-fit: cover;
    object-position: center;
  }
</style>
