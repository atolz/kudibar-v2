<template>
  <div>
    <h1>Login!</h1>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="form.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="form.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: "guest",
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let res = await this.$auth.loginWith('local', { data: this.form });
        console.log({res})
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

