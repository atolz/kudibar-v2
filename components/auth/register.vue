<template>
	<div class="s-top">
		<div class="alert" v-if="message !== '' " :class="mgsClass">
			{{ message }}
		</div>

		<form @submit.prevent="register">
			<div class="row">
				<!-- firstname -->
				<div class="col-sm-6 mb-3">
					<div class="field sm" :class="{ 'form-group--error': $v.form.firstname.$error }">
						<span class="ta-title">First name</span>
						<input type="" class="input" v-model="form.firstname" placeholder="First Name" name="firtname" @input="$v.form.firstname.$touch()" autofocus>
					</div>
               <validation v-if="$v.form.firstname.$error" :field="$v.form.firstname" />
				</div>
				<!-- end firstname -->

				<!-- lastname -->
				<div class="col-sm-6 mb-3">
					<div class="field sm" :class="{ 'form-group--error': $v.form.lastname.$error }">
						<span class="ta-title">Last name</span>
						<input type="" class="input" v-model="form.lastname" placeholder="Last Name" name="lastname">
					</div>
               <validation v-if="$v.form.lastname.$error" :field="$v.form.lastname" />
				</div>
				<!-- end lastname -->
			</div>

			<!-- email -->
         <div class="mb-3">
            <div class="field sm" :class="{ 'form-group--error': $v.form.email.$error }">
               <span class="ta-title">Email</span>
               <input type="email" class="input" v-model="form.email" placeholder="Email" name="email">
            </div>
            <validation v-if="$v.form.email.$error" :field="$v.form.email" />
            <div v-for="err in errors" :key="err">
               <validation v-if="Object.keys(err)[0] === 'email'" alt="Email already exist." hideField="require" :field="{}" />
            </div>
         </div>
			<!-- end email -->

			<!-- phone -->
         <div class="mb-3 position-relative">
            <div class="field sm" :class="{ 'form-group--error': $v.form.phone.$error }">
               <span class="ta-title">Phone number</span>
               <phone-input v-model="form.phone" place="000 0000 00..." @update="onPhone" />
            </div>
            <validation v-if="$v.form.phone.$error" :field="$v.form.phone" />
            <div v-for="err in errors" :key="err">
               <validation v-if="Object.keys(err)[0] === 'phone'" alt="Phone number already exist." hideField="require" :field="{}" />
            </div>
         </div>
			<!-- end phone -->

			<!-- password box -->

         <div class="mb-3">
            <div class="field sm" :class="{ 'form-group--error': $v.form.password.$error }">
               <span class="ta-title">Password</span>
               <div class="password--box">
                  <div v-if="!passwordShow">
                     <input type="password" class="input" placeholder="Password" name="password" v-model="form.password">
                     <span class="icon--show" @click="showPassword">
                        <i class="fas fa-eye"></i>
                     </span>
                  </div>

                  <div v-else>
                     <input type="text" class="input" placeholder="Password" name="password" v-model="form.password">

                     <span class="icon--show" @click="showPassword">
                        hide
                        <i class="fas fa-eye-slash"></i>
                     </span>
                  </div>
               </div>
            </div>
            <validation v-if="$v.form.password.$error" :field="$v.form.password" />
		   </div>

		   <!-- password box -->

			<div class="form-group">
				<button class="kbtn solid fw kudi-dark">
		         <span v-if="!isLoading">
		            Get Started
						<i class="fas fa-chevron-right icon"></i>
		         </span>

		         <loader v-else class="loader" :option="{color: '#fff'}" />
		      </button>
			</div>
		</form>
	</div>
</template>

<script>
  //  import loader from '@/components/util/loader';
  //  import svgIcon from '@/components/util/svg-loader';
   import phoneInput from '@/components/input/phone';
   import validation from '@/components/input/validation';

   import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators';

   import VuePhoneNumberInput from 'vue-phone-number-input';
   import 'vue-phone-number-input/dist/vue-phone-number-input.css';

	export default {
		// props: ['userdata'],
      props: {
         userdata: {
            required: false
         },
         eventQuery: {
            type: Object,
            required: false,
         }
      },
		data(){
			return {
				form: {},
            error: null,
            errors: [],
				message: '',
				isLoading: false,
				mgsClass: 'alert-danger',
				passwordShow: false,
				formattedNumber: ''
			}
		},

		validations: {
			form: {
				firstname: { required,  minLength: minLength(2), maxLength: maxLength(15)},
				lastname: { required,  minLength: minLength(2)},
				email: { required,  email},
				phone: { required },
				password: { required},
			}
		},

		methods: {
			/**
			 * Register
			 * @return {[type]} [description]
			 */
			async register(){
            let ref = this.$route.params.slug;
            let qry = this.eventQuery;

				// Form Validation
				this.$v.form.$touch();
		      if (this.$v.form.$pending || this.$v.form.$error) return;


		      // Try Submit
				try{
               this.isLoading = true;
               this.form.phone = this.form.phone.split(' ').join('');
               this.form.phoneIntl = this.formattedNumber;
               this.form.ref = ref ? ref : 'Normal';
               this.form.eventQuery = qry;

					await this.$axios.post('/auth/create', this.form);

               let res = await this.$auth.loginWith('local', { data: this.form });
					// this.$helper.store_local('kb-uid', res.data.user.id);
	         	// this.$store.commit('add', res.data.user);
					// this.$store.commit('login', true);

               // Redirect
               let query = this.$route.query ? this.$route.query : "";
               let url = this.returnUrl();
               // console.log(url);

               this.$router.push({ name: url, query });

			      this.status('Account created', 'success');
				}catch(error){
               this.isLoading = false;
               let dd = this.$helper.errorBag(error);
               this.errors = dd.errors;
			      this.status(dd.message, 'error');
				}
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

			/**
			 * Has user
			 * @return {Boolean} [description]
			 */
			hasUser(){
				let d = this.$store.state.page.authData;
				this.form = !this.$helper.isEmpty(d) ? Object.assign({}, d) :{};
			},

			/**
			 * Password Visibity Toggle
			 * @return {[type]} [description]
			 */
			showPassword(){
				this.passwordShow = this.passwordShow ? false : true;
			},

			/**
			 * Phone
			 * @param  {[type]} res [description]
			 * @return {[type]}     [description]
			 */
			onPhone(res){
				this.formattedNumber = res.formattedNumber;
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
		},

		components: {
			// loader,
			validation,
			// svgIcon,
			phoneCode: VuePhoneNumberInput,
			phoneInput
		},

		mounted(){
			// this.hasUser();
		}
	}
</script>
