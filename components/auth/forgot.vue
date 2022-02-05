<template>
   <div>
      <!-- <div class="close">
         <slot />
      </div> -->

      <div class="pb-5">
         <h3 class="d-flex justify-content-start">
            <slot />
            <span>Reset password</span>
         </h3>
         <!-- <p>Worry no more, we got you covered!</p> -->
      </div>

      <!-- message -->
      <!-- <div :class="messageClass" v-if="message !== ''">
         {{ message }}
      </div> -->
      <!-- end message -->

      <div>
         <div class="form-group">
            <validation v-if="$v.email.$error" :field="$v.email" />
            <div
               class="field sm"
               :class="{ 'form-group--error': $v.email.$error }"
            >
               <span class="ta-title">Email or Phone number</span>
               <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Type here..."
                  v-model="email"
               />
            </div>
         </div>

         <div class="form-group">
            <button class="kbtn solid dark fw" :disabled="isLoading" @click.prevent="verifyEmail">
               <span v-if="!isLoading">
                  Reset Password
                  <i class="fas fa-chevron-right"></i>
               </span>
               <loader v-else class="loader" :option="{ color: '#fff' }" />
            </button>
         </div>
      </div>
   </div>
</template>

<script>
// import loader from "@/components/util/loader";
// import fieldErrors from "@/components/input/validation";
import { required, email } from "vuelidate/lib/validators";

export default {
   data() {
      return {
         email: "",
         message: "",
         messageClass: "",
         isLoading: false
      };
   },

   validations: {
      email: { required }
   },

   methods: {
      async verifyEmail() {
         this.$v.$touch();
         if (this.$v.$invalid) return;

         try {
            this.isLoading = true;

            // /password-reset
            let res = await this.$axios.post("/auth/password-reset", {
               email: this.email
            });

            // messages
            this.alertBox(
               "Password reseted. Please check your mail to verify.",
               "success"
            );
            this.status("Reset successful", "success");
            this.isLoading = false;
            // this.email = "";
         } catch (error) {
            this.isLoading = false;
            console.log({ error });
            // this.alertBox(error, 'danger');
            this.status(error.response.data.message, "error");
         }
      },

      alertBox(m, type) {
         this.message = m;
         this.messageClass = "alert alert-" + type;
         setTimeout(() => {
            this.message = "";
         }, 4000);
      },

      /**
       * Status
       * @param  {[type]} res    [description]
       * @param  {[type]} status [description]
       * @return {[type]}        [description]
       */
      status(message, status) {
         let notify = this.$snotify;

         notify[status](message, "", {
            timeout: 3000,
            showProgressBar: false
         });
      }
   },

   components: {
      // fieldErrors,
      // loader
   }
};
</script>

<style>
.form-gap {
   padding-top: 70px;
}
</style>
