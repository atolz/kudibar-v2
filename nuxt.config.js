export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kudibar",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      // Cairo, Roboto, PermanentMarker Fonts
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&family=Permanent+Marker&family=Righteous&family=Roboto:wght@400;500;700&display=swap",
      },

      // Segoe UI
      {
        rel: "stylesheet",
        href: "http://fonts.cdnfonts.com/css/segoe-ui-4",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/main.scss",
    "@/assets/css/icon-fonts.css",
    // "@/assets/css/font-awesome.css",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          // global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: "data",
          // autoFetch: true
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/token", method: "get" },
        },
      },
      facebook: {
        endpoints: {
          userInfo:
            "https://graph.facebook.com/v9.0/me?fields=about,name,picture{url},email,birthday",
          // userInfo: "https://graph.facebook.com/v6.0/me?fields=id,about,name,picture{url},email,birthday"
        },
        clientId: process.env.FB_ID,
        // clientSecret: "f01cbbb3af1be707b37ed35dc8aa61d8",
        scope: ["public_profile", "email"],
        redirectUri: process.env.BASE_URL + "/signin",
      },
      google: {
        clientId: process.env.GOOGLE_ID,
        redirectUri: process.env.BASE_URL + "/signin",
        codeChallengeMethod: "",
        responseType: "token id_token",
        // grantType: "authorization_code",
        scope: ["profile", "email"],
        // token: { property: "false" }
      },
    },
  },

  plugins: [
    "./plugins/axios",
    "./plugins/helpers",
    // "./plugins/rave",
    // "./plugins/socket",
    "./plugins/validate",
    "./plugins/datepicker",

    // "@/plugins/notify",
    // "@/plugins/moment",
    // "@/plugins/encrypt",
    // "@/plugins/number",

    // "~/plugins/vue-tooltip.js",
    { src: "@/plugins/vue-datepicker", mode: "client" },
    // { src: "@/plugins/qr-scanner", mode: "client" },
    // { src: "@plugins/ga.js", mode: "client" },
    // {
    //    src: "~/plugins/capacitor.js",
    //    mode: "client"
    // }
  ],

  server: {
    port: process.env.PORT, // default: 3000
    host: "0.0.0.0", // default: localhost,
    timing: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
