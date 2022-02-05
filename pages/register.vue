<template>
  <div>
    <h1>Register!</h1>
    <form @submit.prevent="register">
      <div>
        <label>First name</label>
        <input type="text" v-model="form.firstname" />
      </div>

      <div>
        <label>Last name</label>
        <input type="text" v-model="form.lastname" />
      </div>

      <div>
        <label>Email</label>
        <input type="text" v-model="form.email" />
      </div>

      <div>
        <label>Phone</label>
        <input type="text" v-model="form.phone" />
      </div>

      <div>
        <label>Phone code.</label>
        <input type="text" v-model="form.phoneIntl" />
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
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        phoneIntl: "+234",
      }
    }
  },
  methods: {
    async register() {
      try {
        let res = await this.$axios.$post('/auth/create', this.form);
        console.log({res})
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

