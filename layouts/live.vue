<template>
   <div>
      <main-nav />

      <nuxt />
   </div>
</template>

<script>
import mainNav from "@/layouts/navs/main";
// import subNav from '@/layouts/sub-nav';

export default {
   // middleware: 'auth',
   data() {
      return {
         //
      };
   },

   components: {
      mainNav
      //  subNav
   }
};
</script>
