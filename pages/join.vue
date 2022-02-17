<template>
   <div>
      <div class="wrap layer">
         <div class="row justify-content-md-center s-top s-down">
            <div class="col-sm-6 col-lg-5">
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
   title: 'Get started - Kudibar',
   layout: 'guest',
   head(){
      return {
         title: 'Try for free'
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
