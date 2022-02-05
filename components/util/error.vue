<template>
   <div class="wrap s-top s-down">
      <div class="text-centert">
         <div class="s-top"></div>
         <h1 class="title x-big dark" style="font-size: 4rem;">
            Hmmmmmm…
         </h1>
         <div class="s-down"></div>

         <p style="font-size: 32px;">
            Our juju could not find this page, let's consult the gods! <br>
            <!-- Meanwhile, you can Create or Explore new events. -->
         </p>


         <div class="s-top s-down">
            <nuxt-link to="/events/create" class="kbtn stroke dark gs">
               Create event
               <i class="icon fas fa-chevron-right"></i>
            </nuxt-link>

            <nuxt-link to="/explore" class="kbtn solid dark gs">
               Explore
               <i class="icon fas fa-chevron-right"></i>
            </nuxt-link>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      code: {
         // type: Number,
         required: false
      }
   }
}
</script>
