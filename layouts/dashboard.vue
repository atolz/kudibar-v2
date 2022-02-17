<template>
  <div>
    <main-nav />

    <div class="offline" v-if="$nuxt.isOffline">Oops! You are offline.</div>

    <!-- <nuxt class="pt-lg-4 pb-5" style="padding-top: 90px;" /> -->
    <nuxt />

    <mobile-nav v-if="$auth.loggedIn" />

    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import mobileNav from "@/layouts/navs/mobile";
import mainNav from "@/layouts/navs/main";
// import subNav from "@/layouts/navs/sub";

export default {
   middleware: "auth",

  // data() {
  //    return {
  //       isMobile: false
  //    };
  // },

  methods: {
    checkMessages() {
      if (this.authenticated) {
        let id = this.user._id;

        setInterval((_) => {
          this.$sio.emit("fetch notifications", {
            id: id,
            limit: 10,
            page: 0,
          });
        }, 5000);

        this.$sio.on("show notifications " + id, (res) => {
          console.log({ messages: res.data });
          this.$store.commit("page/setMessages", res.data);
        });
      }
    },
  },

  mounted() {
    // this.checkMessages();
  },

  components: {
    mobileNav,
    mainNav,
    // subNav
  },
};
</script>
