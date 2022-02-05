<template>
  <nuxt />
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      //
    }
  },
}
</script>
