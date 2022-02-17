<template>
   <div>
      <div class="wrap layer">
         <div class="row justify-content-md-center mt-5">

            <div class="col-sm-6 col-md-6 col-lg-6">
               <auth-box />
               <div class="mt-3 text-center">
                  <small>
                     Click “Sign In” to agree to Kudibar’s Terms of Service and acknowledge that Kudibar’s Privacy Policy applies to you.
                  </small>
               </div>
            </div>

         </div>
      </div>
   </div>
</template>

<script>
import authBox from '@/components/auth/auth';

export default {
   layout: 'guest',
   title: 'Signin - Kudibar',
   head(){
      return {
         title: 'Sign in - Kudibar'
         // meta: []
      }
   },

   data(){
      return {
         //
      }
   },

   components: {
      authBox
   }
}
</script>
