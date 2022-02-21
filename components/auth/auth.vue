<template>
	<div class="auth-box text-center">
		<div v-if="!processing">

         {{ redirect }}

         <div class="text-start position-absolute">
            <button type="button" aria-label="Close" class="btn ms-auto" @click.prevent="toggleWithEmail" v-if="withEmail">
               <i class="fas fa-chevron-left"></i>
            </button>
         </div>

			<!-- title -->
			<h2 class="title big dark">
				<span v-if="!isLogin">
			   	Sign up
			   </span>
			   <span v-else>
			   	Welcome back
			   </span>
			</h2>
			<!-- end title -->

         <!-- Social auth -->
         <div class="sw text-center s-top" v-if="!withEmail">
            <div class="mb-3">
               <a href="#facebook" class="kbtn stroke fb" @click.prevent="socialLogin('facebook')">
                  <!-- <svg-icon icon="facebook" /> -->
                  <!-- <i class="fab fa-facebook-f icon"></i> -->
                  <img class="pe-3" src="/images/images/home/fb.svg" alt="" />
                  <span>{{ authScreen }} with Facebook</span>
               </a>
            </div>

            <div class="mb-3">
               <a href="#google" class="kbtn stroke gg" @click.prevent="socialLogin('google')">
                  <!-- <svg-icon icon="google" /> -->
                  <img class="pe-3" src="/images/images/home/google.svg" alt="" />
                  <span>{{ authScreen }} with Google</span>
               </a>
            </div>

            <div class="mb-3">
               <a href="#" class="kbtn solid google" @click.prevent="toggleWithEmail">
                  <!-- <svg-icon icon="google" /> -->
                  <i class="fas fa-at" style="color: #25a7c3"></i>
                  <span>{{ authScreen }} with Email</span>
               </a>
            </div>
         </div>
         <!-- end social auth -->

         <div class="divider" v-if="!withEmail"></div>

         <!-- sign in/up box -->
         <div class="text-start mb-4" v-if="withEmail">
            <div class="ps-4 pe-4">
               <login v-if="isLogin" :eventQuery="eventQuery" />
               <register :withdata="userdata" :eventQuery="eventQuery" v-else />
            </div>
         </div>
         <!-- sign in/up box -->

			<div style="font-weight: 700">
			   <small>
					<span v-if="!isLogin">
						Already have an account?
					</span>
					<span v-else>
						Don't have an account yet?
					</span>
					<a href="#" @click.prevent="toggleView">
						{{ authView }}
					</a>
				</small>
			</div>

		</div>

		<div class="text-center" v-else>
			<p>Authenticating...</p>
			<p><strong>Please wait!</strong></p>
			<loader :option="{color: '#221'}" />
		</div>
	</div>
</template>


<script>
import axios from 'axios';

import register from './register';
import login from './login';
// import svgIcon from '@/components/util/svg-loader';
// import loader from '@/components/util/loader';

const client_id = process.env.GOOGLE_ID;
const client_secret = process.env.GOOGLE_SECRETE;

export default {
   props: {
      view: {
         required: false,
         type: String
      },
      redirect: {
         required: false,
         type: String
      }
   },

   data(){
      return {
         isLogin: true,
         provider: '',
         userdata: {},
         processing: false,
         withEmail: false,
         eventQuery: {},
         count: 0
      }
   },

   computed: {
      authView(){
         return this.isLogin ? 'Sign Up' : 'Sign in';
      },

      authScreen(){
        //  return !this.isLogin ? 'Sign Up' : 'Sign in';
        return "Continue";
      }
   },

   methods: {
      /**
       * Check Query
       */
      checkQuery(){
         let rQry = this.$route.query;
         if(rQry.qry !== undefined){
            let dq = window.atob(rQry.qry);
            this.eventQuery = JSON.parse(dq);
         }
         console.log({rQry});
      },

      /**
       * Initiate Oauth
       * @return {[type]} [description]
       */
      oauthInit(){
         this.provider = window.localStorage['kb-sys-oauth'];

         let at = this.$helper.strArr(this.$route.hash, '#', 1);
         let arr = this.$helper.strArr(at);
         let token = '';

         if(arr.length > 0) this.processing = true;

         arr.forEach(v => {
            let s = this.$helper.strArr(v, '=');
            if(s[0] === 'access_token') token = s[1]
         });

         if(token !== '' && this.provider !== undefined){
            this.processing = true;

            if(this.provider === 'facebook') this.facebookVerifyToken(token);
            if(this.provider === 'google') this.googleVerifyToken(token);
         }

         window.localStorage.clear('kb-sys-oauth');
      },

      /**
       * Set localstorage
       * @param  {[type]} provider [description]
       * @return {[type]}          [description]
       */
      async socialLogin(provider){
         this.provider = provider;

         try{
            this.processing = true;
            window.localStorage['kb-sys-oauth'] = provider;
            let res = await this.$auth.loginWith(provider);
         }catch(error){
            if(this.count <= 1){
               this.socialLogin(this.provider);
               this.count++;
            }else{
               this.processing = false;
            }
         }
      },

      /**
       * Toggle view
       * @return {[type]} [description]
       */
      toggleView(){
         this.isLogin = this.isLogin ? false : true;
      },

      /**
       * Get user google
       * @param  {[type]} token [description]
       * @return {[type]}       [description]
       */
      async googleVerifyToken(token){
         let url = 'https://www.googleapis.com/oauth2/v2/userinfo';

         try{

            let res = await axios.get(url, {
               headers: {
                  'Authorization': "Bearer " + token
               }
            });

            // store or authenticate user
            this.checkAuth(res.data);

            // this.$store.commit('page/setAuthData', {
            //    firstname: res.data.given_name,
            //    lastname:  res.data.family_name,
            //    email:  res.data.email,
            //    avatar: res.data.picture,
            //    phone: ''
            // });
         }catch(e){
            this.processing = false;
            console.log(e);
         }
      },

      /**
       * Verify token
       * @param  {[type]} token [description]
       * @return {[type]}       [description]
       */
      async facebookVerifyToken(token){
         let url = `https://graph.facebook.com/debug_token?input_token=${token}&access_token=${token}`;

         try{
            let res = await axios.get(url);
            let rdata = res.data.data;

            if(rdata.is_valid){
               this.facebookGetUser(rdata.user_id, token);
            }
            // throw error
            // console.log(res.data);
         }catch(e){
         this.processing = false;
            console.log(e);
         }
      },

      /**
       * Get user facebook
       * @param  {[type]} id    [description]
       * @param  {[type]} token [description]
       * @return {[type]}       [description]
       */
      async facebookGetUser(id, token){
         let url = `https://graph.facebook.com/${id}?fields=id,name,first_name,last_name,picture,email&access_token=${token}`;

         try{
            let res = await axios.get(url);

            this.checkAuth(res.data);
            // this.$store.commit('page/setAuthData', {
            //    firstname: res.data.first_name,
            //    lastname:  res.data.last_name,
            //    email:  res.data.email,
            //    avatar: res.data.picture.data.url,
            //    phone: ''
            // });

         }catch(e){
         this.processing = false;
            console.log(e);
         }
      },

      /**
       * Check auth
       * @param  {[type]} data [description]
       * @return {[type]}      [description]
       */
      async checkAuth(data){
         try{
            let userData = this.buildProviderData(data, this.provider);
            userData.eventQuery = this.eventQuery;

            let res = await this.$auth.loginWith('local', { data: userData });
            this.$store.commit('add', res.data.user);
            this.$store.commit('login', true);

            this.status('Login successful', 'success');

            // Redirect back to intended page
            let rurl = window.localStorage['kb-sys-redirect'];
            console.log({rurl})
            if(rurl !== null || rurl !== undefined){
               console.log("Oya start redirecting...");
               this.$router.push({path: rurl});
               // window.localStorage.clear('kb-sys-redirect')
               return;
            }

            // redirect
            setTimeout(_ => {
               let query = this.$route.query ? this.$route.query: '';
               let url = this.returnUrl();
               this.$router.push({name: url, query});
            }, 1000);

         }catch(error){
            console.log({error});
            this.processing = false;
         }
      },

      /**
       * Return url
       * @return {[type]} [description]
       */
      returnUrl(){
         let a = this.$route.name;
         if(a === 'slug') return a;

         return 'index';
      },

      buildProviderData(data, provider){
         let obj = {provider};
         console.log(data);
         if(provider === 'facebook'){
            obj.email = data.email;
            obj.firstname = data.first_name;
            obj.lastname = data.last_name;
         }

         if(provider === 'google'){
            console.log({data});
            obj.email = data.email;
            obj.firstname = data.given_name;
            obj.lastname = data.family_name;
            obj.avatar = data.picture;
         }

         return obj;
      },

      toggleWithEmail(){
         this.withEmail = this.withEmail ? false : true;
      },

      /**
       * Status
       * @param  {[type]} res    [description]
       * @param  {[type]} status [description]
       * @return {[type]}        [description]
       */
      status(message, status){
         let notify = this.$snotify;

         notify[status](message, '', {
            timeout: 3000,
            showProgressBar: true,
         });
      },

      changeScreenState(){
         let name = this.$route.name;
         // this.isLogin = this.view === 'register' ? false : true;
         if(name == 'join' || this.view === 'register') {
            this.isLogin = false;
         }
      }
   },

   components: {
      register,
      login,
      // svgIcon,
      // loader
   },

   mounted(){
      this.checkQuery();
      this.changeScreenState();
      this.oauthInit();
      this.$store.commit('page/setActive', this.$route.name);

      if(this.redirect !== undefined){
         // window.localStorage['kb-sys-redirect'] = this.redirect;
         window.localStorage.setItem('kb-sys-redirect', this.redirect);
      }
   }
}
</script>
