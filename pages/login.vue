<template>
  <div class="d-absolute d-flex flex-row justify-content-center align-items-center bg-light">
    <div class="col-4 h-50 rounded form-group d-flex flex-column justify-content-center align-items-center shadow shadow-sm">
      <img class="user_face img-fluid m-3 border border-success" src="/static/img/avatar.jpg" />
      <input v-model="form.email" type="text" class="form-control" placeholder="ایمیل" />
      <input v-model="form.password" type="text" class="form-control m-3" placeholder="رمز عبور" />
      <input @click="login" type="submit" class="btn btn-success btn-block" value="ورود" />
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      data() {
        return {
          form:{
            email:'samirsabiee@gmail.com',
            password:'A123456z@'
          }
        }
      },
      methods: {
        async login() {
          try{
            await this.$auth.loginWith('express',{data:this.form})
            this.$auth.redirect('dashboard')
            this.$bvToast.toast(`Welcome ${this.$auth.user.email}`,{
              title:'Login Success',
              noAutoHide:true
            })
          }catch (e) {
            this.$bvToast.toast(e.message,{
              title:'Login Failed',
              noAutoHide:true
            })
          }
        }
      },
    }
</script>

<style scoped src="@/assets/css/login.css">

</style>
