<template>
   <div class="s-top">
      <!-- <div class="divider"></div> -->

      <form @submit.prevent="login">

         <div class="mb-3">
            <div
               class="field sm"
               :class="{ 'form-group--error': $v.form.email.$error }"
            >
               <span class="ta-title">Email or Phone number</span>
               <input
                  type=""
                  class="input"
                  placeholder="Email or Phone"
                  v-model="form.email"
                  name="email"
                  autofocus
               />
            </div>

            <validation v-if="$v.form.email.$error" :field="$v.form.email" />
         </div>

         <div class="mb-2">
            <div
               class="field sm"
               :class="{ 'form-group--error': $v.form.password.$error }"
            >
               <span class="ta-title">Password</span>
               <div class="password--box">
                  <div v-if="!passwordShow">
                     <input
                        type="password"
                        class="input"
                        placeholder="Password"
                        name="password"
                        v-model="form.password"
                     />
                     <span class="icon--show" @click="showPassword">
                        <i class="fas fa-eye"></i>
                     </span>
                  </div>

                  <div v-else>
                     <input
                        type="text"
                        class="input"
                        placeholder="Password"
                        name="password"
                        v-model="form.password"
                     />

                     <span class="icon--show" @click="showPassword">
                        hide
                        <i class="fas fa-eye-slash"></i>
                     </span>
                  </div>
               </div>
            </div>
            <validation
               v-if="$v.form.password.$error"
               :field="$v.form.password"
            />
         </div>

         <div class="form-group stay mb-3">
            <span class="checkbox">
               <input type="checkbox" checked id="stay_signin" />
               <label for="stay_signin">Stay signed in</label>
            </span>

            <span class="float-md-end float-lg-End">
               <a
                  href="#forgot-password"
                  title="Forgot password?"
                  @click="noPassword"
               >
                  Having troubles signing in?
               </a>
            </span>
         </div>

         <div class="form-group">
            <button class="kbtn solid fw kudi-dark" :disabled="isLoading">
               <span v-if="!isLoading">
                  Sign In
                  <i class="fas fa-chevron-right icon"></i>
               </span>

               <loader v-else class="loader" :option="{ color: '#fff' }" />
            </button>
         </div>
      </form>

      <!-- Forgot password -->
      <forgot class="forgot-pass" v-if="forgotPassword">
         <button aria-label="Close" class="btn me-3" type="button" @click.prevent="noPassword">
            <i class="fas fa-chevron-left"></i>
         </button>
      </forgot>
   </div>
</template>

<script>
import loader from "@/components/util/loader";
import forgot from "@/components/auth/forgot";
import validation from "@/components/input/validation";
import svgIcon from "@/components/util/svg-loader";
import { required, minLength } from "vuelidate/lib/validators";

const api = process.env.API_URL;
// const api = 'http://localhost:5410/v1';

export default {
   // props: ['redirect'],
   props: {
      redirect: {
         required: false
      },
      eventQuery: {
         type: Object,
         required: false
      }
   },
   data() {
      return {
         form: {
            email: "",
            password: ""
         },
         passwordShow: false,
         stay: "",
         error: null,
         message: "",
         isLoading: false,
         mgsClass: "alert-danger",
         forgotPassword: false
      };
   },

   validations: {
      form: {
         email: { required },
         password: { required }
      }
   },

   methods: {
      /**
       * Login
       * @return {[type]} [description]
       */
      async login() {
         let qry = this.eventQuery;

         // Form validation
         this.$v.form.$touch();
         if (this.$v.form.$pending || this.$v.form.$error) return;

         // Try submiting data
         try {
            this.isLoading = true;
            this.form.eventQuery = qry;

            let res = await this.$auth.loginWith("local", { data: this.form });
            this.$auth.setUser(res.data.user);
            // this.$store.commit("add", res.data.user);
            // console.log({ user: this.user });

            // this.status("Login successful", "success");

            // Redirect
            let query = this.$route.query ? this.$route.query : "";
            let url = this.returnUrl();
            console.log(url);

            this.$router.push({ name: url, query });
         } catch (error) {
            this.isLoading = false;
            let dd = this.$helper.errorBag(error);
            this.errors = dd.errors;
            this.status(dd.message, 'error');

            console.log({error})
         }
      },

      /**
       * Status
       * @param  {[type]} res    [description]
       * @param  {[type]} status [description]
       * @return {[type]}        [description]
       */
      status(message, status) {
         console.log(message);
        //  let notify = this.$snotify;

        //  notify[status](message, "", {
        //     timeout: 3000,
        //     showProgressBar: false
        //  });
      },

      /**
       * Toggle password display
       * @return {[type]} [description]
       */
      showPassword() {
         this.passwordShow = this.passwordShow ? false : true;
      },

      /**
       * Return url
       * @return {[type]} [description]
       */
      returnUrl() {
         let a = this.$route.name;
         if (a === "slug") return a;

         return "index";
      },

      /**
       * Reset password
       * @return {[type]} [description]
       */
      noPassword() {
         this.forgotPassword = this.forgotPassword ? false : true;
      }
   },

   components: {
      loader,
      forgot,
      validation,
      svgIcon
   }
};
</script>
