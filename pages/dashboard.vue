<template>
  <div>
    Authenticated! A Chief

    <button type="button" @click="$auth.logout()">Logout</button>
  </div>
</template>

<script>
export default {
  layout: "locked",
  data() {
    return {
      ///
    }
  },

  methods: {
    logout(){
      this.$auth.logout();
    }
  }
}
</script>
