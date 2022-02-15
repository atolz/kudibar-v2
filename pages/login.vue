<template>
  <div class="content-box signup-title text-center pb-5">
    <!-- Good to have you back! -->
    <section class="text-center pt-5">
      <h1>Good to have you back!</h1>
    </section>

    <div class="text-center d-flex align-items-center justify-content-center">
      <p class="py-4">Let’s continue from where we left off.</p>
    </div>

    <div
      class="
        col-12 col-md-12 col-lg-12 col-xl-12
        text-center
        align-items-center
        justify-content-center
      "
    >
      <div class="contact-card py-5">
        <!-- Continue with Facebook -->
        <button
          type="submit"
          class="
            fb-reg-btn
            col-8
            text-center text-white
            align-items-center
            btn
            rounded-pill
          "
        >
          <img class="pe-3" src="/images/img/fb.svg" alt="" />
          Continue with Facebook
        </button>

        <!-- Continue with Google -->
        <button
          type="submit"
          class="
            google-reg-btn
            col-8
            text-center text-black
            align-items-center
            btn
            rounded-pill
            mt-3
          "
        >
          <img class="pe-3" src="/images/img/google.svg" alt="" />
          Continue with Google
        </button>

        <!-- Continue with Apple ID -->
        <button
          type="submit"
          class="
            apple-reg-btn
            col-8
            text-center text-white
            align-items-center
            btn
            rounded-pill
            mt-3
          "
        >
          <img class="pe-3" src="/images/img/apple.svg" alt="" />
          Continue with Apple ID
        </button>

        <!-- Sign Up with Email -->
        <button
          type="submit"
          class="
            col-8
            text-center text-white
            align-items-center
            btn btn-primary
            rounded-pill
            mt-3
          "
          @click="signInEmail()"
        >
          Sign in with Email
        </button>

        <!-- Sign Unp -->
        <div class="account-auth text-black mt-5">
          Don't Have have an account?
          <nuxt-link class="ps-1" to="/register"> Sign Up </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // layout: "guest",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let res = await this.$auth.loginWith("local", { data: this.form });
        console.log({ res });
      } catch (err) {
        console.log(err);
      }
    },

    signInEmail() {
      this.$router.push("/emailSignin");
    },
  },
};
</script>

<style lang="scss" scoped>
.signup-title {
  background: url(/images/img/auth-bg.svg);
}

.signup-title h1 {
  font-family: "Cairo";
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 62px;
  text-transform: capitalize;
  color: #023e4f;
}

.signup-title p {
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.0025em;
  color: #000000;
}

.contact-card {
  background: #ffffff;
  box-shadow: 10px 10px 40px rgba(21, 21, 21, 0.08);
  border-radius: 10px;
  margin: 0 30% auto;
}

.contact-card button {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 26px;
}

.fb-reg-btn {
  background: #395185;
}

.google-reg-btn {
  border: 0.5px solid #023e4f;
}

.apple-reg-btn {
  background: #121212;
}

.account-auth {
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 15px;
}

.account-auth nuxt-link {
  color: red;
}

@media (max-width: 600px) {
  .contact-card {
    margin: 0 3% auto;
  }
}
</style>


