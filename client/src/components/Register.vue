<template>
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>

    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>

    <button
    @click="register">register</button>
  </div>
</template>

<script>
  import authentication from '@/services/authentication'

  export default {
    data () {
      return {
        email: ' ',
        password: ' '
      }
    },
    watch: {
      email (value) {
        console.log('email has changed', value)
      }
    },
    mounted () {
      setTimeout(() => {
        this.email = 'hello email'
      }, 2000)
    },
    methods: {
      async register () {
        console.log('register was clicked', this.email, this.password)

        const response = await authentication.register({
          email: this.email,
          password: this.password
        })

        console.log(response.data)
      }
    }
  }
</script>

<style scoped>

</style>
