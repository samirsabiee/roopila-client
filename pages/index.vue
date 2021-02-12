<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        roopila
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <div class="jumbotron">
      <label>Email</label><input v-model="form.email" type="text" >
      <label>Password</label><input v-model="form.password" type="text">
      <button @click="login" >Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        email: null,
        password:null
      }
    }
  },
  methods: {
    login() {
      console.log('Enter login..................................')
      this.$auth.loginWith('express', {
        data: this.form
      }).then(({data}) => {
        console.log(data)
      }).catch(e => {
        console.log(e)
      })
    }
  },

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #dd0033;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
