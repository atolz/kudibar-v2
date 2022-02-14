<template>
   <div class="wrap">
      <header class="sub-nav">
         <div class="row">
            <div class="col-sm-8 col-md-5 col-5">
               <ul class="nav">
                  <li class="list">
                     <nuxt-link to="/" class="icon">
                        <i class="far fa-chart-bar" v-if="$route.name == 'o'"></i>
                        <i class="fa fa-arrow-left" v-else></i>
                     </nuxt-link>
                  </li>
                  <li class="list hide-on-mobile">
                     <strong>{{ setPageTitle($route.name) }}</strong>
                  </li>
                  <!-- <li class="list" v-for="(nav, i) in navs" :key="i">
                     <nuxt-link :to="'/o/'+nav.name.toLowerCase()" :class="{active: ($route.name === nav.link) }">
                        {{ nav.name }}
                     </nuxt-link>
                  </li> -->
               </ul>
            </div>

            <div class="col-sm-4 col-md-7 col-7">
               <div class="float-end">
                  <nuxt-link to="/events/create" class="kbtn solid dark gs" v-if="create">
                     Create Event
                     <i class="icon fas fa-chevron-right"></i>
                  </nuxt-link>

                  <div class="" v-if="edit">
                     <nuxt-link :to="'/events/edit?q='+$route.params.slug"
                        class="kbtn stroke dark gs">
                        Quick edit
                        <i class="icon fas fa-chevron-right"></i>
                     </nuxt-link>

                     <nuxt-link :to="'/events/subscribers?q='+$route.params.slug" class="kbtn solid dark gs">
                        Subscribers
                        <i class="icon fas fa-chevron-right"></i>
                     </nuxt-link>
                  </div>

                  <div v-if="account">
                     <nuxt-link to="/account/profile" class="kbtn stroke dark gs">
                        Edit profile
                        <i class="icon fas fa-chevron-right"></i>
                     </nuxt-link>

                     <a href="#" @click.prevent="logout" class="kbtn solid dark gs" style="background: #e40101">
                        Logout
                        <i class="icon fas fa-sign-out-alt"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   </div>
</template>

<script>
export default {
   data(){
      return {
         active: 'dash',
         navs: [
            // {
            //    active: false,
            //    name: 'Events',
            //    link: 'o-events',
            // },
            {
               active: false,
               name: 'Tickets',
               link: 'tickets',
            },
            {
               active: false,
               name: 'Referrals',
               link: 'referrals',
            },
            {
               active: false,
               name: 'Accounts',
               link: 'accounts',
            },
            {
               active: false,
               name: 'Messages',
               link: 'messages',
            },
            // {
            //    active: false,
            //    name: 'Media',
            //    link: 'o-media',
            // }
         ]
      }
   },

   computed: {
      create(){
         let name = this.$route.name;
         return name !== 'events-create' && name !== 'events-slug' && name !== 'account';
      },

      edit(){
         return this.$route.name == 'events-slug';
      },

      account(){
         return this.$route.name == 'account';
      }
   },

   methods: {
      checkActive(){
         // let name = this.$route.name;
         // console.log(name);
      },

      setPageTitle(str){
         if(str === 'o'){
            return 'Insights';
         }else{
            let n = str.replace('o-', '');
            n = n.replace('-', ' ');
            n = n.replace(' slug', '');
            n = n.replace('events ', '');
            return this.$helper.ucFirst(n);
         }
      },

      logout(){
         this.$store.commit('add', false);
         this.$store.commit('login', false);
         this.$auth.logout();
      }
   },

   mounted(){
   }
}
</script>
