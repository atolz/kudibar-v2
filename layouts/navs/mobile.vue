<template>
   <div class="d-block d-sm-none ">
      <div class="position-fixed native-nav text-center">
         <div class="inner">
            <div class="row">
               <div class="col">
                  <nuxt-link to="/" title="Home">
                     <!-- <i class="fas fa-home"></i> -->
                     <svg-loader path="svg" icon="home" />
                  </nuxt-link>
               </div>
               <div class="col">
                  <nuxt-link to="/search" title="Search">
                     <svg-loader path="svg" icon="search" />
                     <!-- <svg-loader path="svg" icon="voyage" /> -->
                  </nuxt-link>
               </div>
               <div class="col">
                  <nuxt-link to="/events/create" title="Create Event">
                     <!-- <i class="fas fa-plus"></i> -->
                     <svg-loader path="svg" icon="create" />
                  </nuxt-link>
               </div>
               <div class="col">
                  <nuxt-link to="/messages" title="Notification">
                     <!-- <i class="far fa-user"></i> -->
                     <svg-loader path="svg" icon="notification" />
                  </nuxt-link>
               </div>
               <div class="col">
                  <!-- <nuxt-link :to="'/@' + user.username" title="Profile"> -->
                  <!-- <i class="far fa-user"></i> -->
                  <svg-loader path="svg" icon="profile" />
                  <!-- </nuxt-link> -->
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import svgLoader from "@/components/util/svg-loader";

export default {
   data() {
      return {
         //
      };
   },

   components: {
      svgLoader
   }
};
</script>

<style lang="scss" scoped>
.icon {
   svg {
      width: 25px;
   }
}
</style>
