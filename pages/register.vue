<template>
    <b-container>
      <b-form-group class="text-right" label="ایمیل">
        <b-form-input type="email"></b-form-input>
      </b-form-group>
      <b-form-group class="text-right" label="پسورد">
        <b-form-input type="password"></b-form-input>
      </b-form-group>
      <b-form-group class="text-right" label="تایید پسورد">
        <b-form-input type="password"></b-form-input>
      </b-form-group>
    </b-container>
</template>

<script>
    export default {
        name: "register",
      data() {
        return {
          form:{
            email:'samirsabiee1@gmail.com',
            password:'A12345678z@',
            retypePassword:'A12345678z@'
          }
        }
      },
      mounted() {
          this.register()
      },
      methods: {
        async register() {
          try{
            await this.$axios.$post('/register',this.form)
            await this.$auth.loginWith('express',{data:this.form})
            await this.$apolloHelpers.onLogin(this.$auth.strategy.token.get())
            this.$auth.redirect('dashboard')
            this.$bvToast.toast(`Welcome ${this.$auth.user.email}`,{
              title:'Register Success',
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

<style scoped>

</style>
