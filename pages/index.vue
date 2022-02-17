<template>
   <div>
      <landing v-if="!$auth.loggedIn" />
      <event-box v-else :events="events" :featured="featured" :total="total" />
   </div>
</template>

<script>
import svgLoader from '@/components/util/svg-loader';
import oneSlider from '@/components/util/one-slider';
import eventBox from '@/components/events/all';
import landing from '@/components/home';

export default {
   async asyncData({error, $axios}) {
      try{
         let res = await $axios.$post('/events', {
            limit: 50,
            page: 0
         });
         // console.log({res})

         // let data = res.data

         return {
            total:  res.total,
            events: res.data,
            featured: [],
         }
      }catch(e){
         console.log({error: e});
         // error({ statusCode: 404, message: 'Could not fetch data.' })
         return {event: []}
         // console.log(res);
      }
   },

   // async fetch() {
   //    try{
   //       let res = await this.$axios.$post('/events', {
   //          limit: 50,
   //          page: 0
   //       });

   //       // TODO: Store in vuex storage

   //       this.events = res.data;
   //       this.total = res.data.length;
   //    }catch(error){
   //       console.log(error);
   //    }
   // },

   head(){
      return {
         title: 'An Arena for Everyone'
      }
   },

   data(){
      return {
         total: 0,
         events: [],
         featured: [],
      }
   },

   methods: {
      async logout(){
         this.$auth.logout();
         // this.$router.push({name: 'account'});
         // this.$nuxt.refresh();
      },

      picture(m){
         let pic = m.picture;
         return pic !== undefined && pic !== '' ? pic : '/images/game-exhibition.jpg';
      },
   },

   async mounted() {
      // const coordinates = await this.$CapacitorGeolocation.getCurrentPosition();

      console.log({isOffline: this.isOffline});
      // console.log({coordinates});
   },

   components: {
      svgLoader,
      oneSlider,
      eventBox,
      landing
   }
}
</script>
