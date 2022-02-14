<template>
   <div>
      <main-nav />

      <nuxt />

      <vue-snotify></vue-snotify>
   </div>
</template>

<script>
import mainNav from "@/layouts/navs/main";

export default {
   // data() {},

   // methods: {},

   // mounted() {},

   components: {
      mainNav
      // mobileHead
   }
};
</script>
