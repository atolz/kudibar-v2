<template>
  <div>
    <!-- <spinner v-if="showHideSpinner" /> -->

    <!-- main nav -->
    <!-- <mobile-head /> -->
    <main-nav />

    <nuxt />

    <!-- <mobile-nav v-if="authenticated" /> -->

    <!-- footer -->
    <!-- <footer-nav v-if="!authenticated" /> -->

    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
// import mobileHead from "@/layouts/navs/mobile-head";
import mobileNav from "@/layouts/navs/mobile";
import mainNav from "@/layouts/navs/main";
import footerNav from "@/layouts/footer";

import spinner from "@/components/spinner";

export default {
  data() {
    return {
      popOut: true,
      showHideSpinner: true,
      // isMobile: false
    };
  },

  methods: {
    closePopout() {
      this.popOut = false;
      // console.log("Here muan!");
    },
  },

  beforeCreate() {
    // this.showHideSpinner = true;
  },

  mounted() {
    // this.showHideSpinner = false;
  },

  components: {
    mainNav,
    footerNav,
    mobileNav,
    // mobileHead,
    spinner,
  },
};
</script>
