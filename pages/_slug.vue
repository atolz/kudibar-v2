<template>
   <div>
      <div v-if="!hasError">
        <account-box v-if="type === 'account'" :data="accountData" />
        <event-detail-box v-if="type === 'event'" :event="event" />
      </div>
      <error-page v-else />
   </div>
</template>

<script>

// import modal from '@/components/util/modal';
import errorPage from '@/components/util/error';
import eventDetailBox from '@/components/events/details';
import accountBox from '@/components/account';

export default {
   // layout: 'dashboard',
   async asyncData({ $axios, params, store }) {

      try{
         let slug = params.slug;
         let isTicketActive = false;
         let hasError = false;
         let response = null;
         let accountData = {};
         let title = "";
         let desc = "";
         let event = {};
         let type = "";

         if(slug.toString().charAt(0) === "@"){
            type = "account";
            // let res = await $axios.$post('/user/mix', {
            //    id: slug,
            //    limit: 24,
            //    page: 0,
            // });

            accountData = {};

            // title = `${res.user.firstname} ${res.user.lastname}`;
            // console.log({res});
         }else{
            type = "event";
            let obj = { trash: false, slug };
            // event = await $axios.$post('/events/details', obj);
            event = {};

            // if(event == null) {
            //    throw "Event not found!";
            // }

            // event.payments.tickets.forEach((v, i) =>{
            //    event.payments.tickets[i].qty = 0;
            //    event.payments.tickets[i].maxed = false;
            // });
            // title = event.title;
            // desc = event.description;
         }

         return {
            event, accountData, hasError, isTicketActive, response, type, title, desc,
         };
      }catch(error){
         console.log(error);
         return {
            hasError: true,
            title: 'Page not found',
            event: {
               payments: [],
               reviews: [],
            }
         }
      }
   },

   head() {
      return {
         title: this.$helper.ucFirst(this.title) + ' - Kudibar' || 'Page not available'+' - Kudibar',
         meta: [
            {
               hid: 'description',
               name: 'description',
               content: this.$helper.str_limit(this.desc || 'Page not available', 150)
            },
            {
               hid: 'twitter:card',
               name: 'twitter:card',
               content: `${this.$helper.ucFirst(this.title) || 'Event removed'} - Kudibar`
            },
            {
               hid: 'twitter:title',
               name: 'twitter:title',
               content: `${this.$helper.ucFirst(this.title) || 'Event removed'} - Kudibar`
            },
            {
               hid: 'twitter:description',
               name: 'twitter:description',
               content: this.$helper.str_limit(this.desc || 'Event removed', 150)
            },
            {
               hid: 'og:title',
               name: 'og:title',
               content: `${this.$helper.ucFirst(this.title) || 'Event removed'} - Kudibar`
            },
            {
               hid: 'og:description',
               name: 'og:description',
               content: this.$helper.str_limit(this.desc || 'Event removed', 150)
            }
         ]
      };
   },

   data(){
      return {
         //
      }
   },

   methods: {
      // loadScript(callback) {
      //    const script = document.createElement("script");
      //    script.src = "https://js.paystack.co/v1/inline.js";
      //    document.getElementsByTagName("head")[0].appendChild(script);
      //    if (script.readyState) {
      //          // IE
      //          script.onreadystatechange = () => {
      //             if (
      //                script.readyState === "loaded" ||
      //    script.readyState === "complete"
      //             ) {
      //                script.onreadystatechange = null;
      //                callback();
      //             }
      //          };
      //    } else {
      //          // Others
      //          script.onload = () => {
      //             callback();
      //          };
      //    }
      // }
   },

   mounted(){
   },

   created() {
      // this.scriptLoaded = new Promise(resolve => {
      //    this.loadScript(() => {
      //          resolve();
      //    });
      // });
   },

   components: {
      errorPage,
      accountBox,
      eventDetailBox
   }
}
</script>
