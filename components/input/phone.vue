<template>
	<div class="" @click.self="close">

      <div class="input-group">
         <span class="c-inp input-group-text" @click="toggle">
            <span>{{active.flag}}</span>
            <span style="padding-left: 5px; font-weight: 700">
               {{ active.dial_code }}
            </span>
         </span>
         <div class="p-inp form-control">
            <input type="text" class="input-phone " ref="phone" :value="value" :placeholder="place" @keyup="update" />
         </div>
      </div>

      <div class="country--code" v-if="open">
         <div class="search-cover">
            <input type="text" v-model="filter" @keyup="search" class="form-control form-control-sm" placeholder="Search country" autocomplete="true" />
         </div>
         <ul>
            <li v-for="(country, i) in countries" @click="select(i)" :key="i">
               <div :class="{active: country.active}">
                  <!-- <img :src="flag(country.code)" :alt="country.name" width="13" /> -->
                  <span>{{ country.flag }}</span>
                  <span>{{ country.name }}</span>
               </div>
            </li>
         </ul>
      </div>


		<!-- <div class="row g-0 d-flex justify-content-start">
			<div class="col-2">
				<div class="input act--btn" @click="toggle">
               <span class="tab">
                  <span>{{active.flag}}</span>
                  <span style="padding-left: 5px; font-weight: 700">
                     {{ active.dial_code }}
                  </span>
               </span>
            </div>

            <div class="country--code" v-if="open">
               <div class="search-cover">
                  <input type="text" v-model="filter" @keyup="search" class="form-control form-control-sm" placeholder="Filter search..." autocomplete="true" />
               </div>
               <ul>
                  <li v-for="(country, i) in countries" @click="select(i)" :key="i">
                     <div :class="{active: country.active}">
                        <span>{{ country.flag }}</span>
                        <span>{{ country.name }}</span>
                     </div>
                  </li>
               </ul>
            </div>
			</div>

			<div class="col-10">
				<input type="text" class="input input-phone inp" style="height: 30px" ref="phone" :value="value" :placeholder="place" @keyup="update" />
			</div>
		</div> -->
	</div>
</template>

<script>
	import Cleave from 'cleave.js';
	import 'cleave.js/dist/addons/cleave-phone.i18n';

   import countries from "@/data/countries";

	export default {
		props: {
			value: {
				// type: String,
				required: true
			},
			place: {
				type: String,
				required: false
			}
		},
		data(){
			return {
            countries,
            all: countries,
				first: ['NG', 'GH'],
				active: {},
				basic: [],
				open: false,
				filter: '',
				phone: ''
			}
		},

		methods: {
			toggle(){
				this.open = this.open ? false : true;
			},

			flag(str){
				let host = window.location.origin;
				return str != undefined ?  host+'/flags/'+str+'.svg' : str;
			},

			select(i){
            console.log({country: this.countries[i]})
				this.countries.map(v => v.active = false);
				this.active = this.countries[i];
				this.active.active = true;
				this.open = false;
				this.runCleave(this.active.code);

				// // Search
				this.filter = '';
            console.log({active: this.active});
				// this.countries = this.$store.state.countries.data;
			},

			buildFirst(){
				this.countries.map(v => {
					if(this.first.indexOf(v.code) !== -1) this.basic.push(v);
					if(v.code === 'NG') {
						v.active = true;
						this.active = v;
					}
				});
			},

			search(){
				let bask = [];
				let str = this.filter;
				let reg = new RegExp(str, 'ig');
				let data = countries;

				if(str.length !== 0){
					this.countries = [];
					data.map(v => {
						if(v.name.match(reg)){
							this.countries.push(v);
						}
					});
				}else{
					this.countries = this.all;
				}
			},

			runCleave(str){
				let c = str.toLowerCase();
				var cleave = new Cleave('.input-phone', {
				   phone: true,
				   phoneRegionCode: c
				});

            console.log({active: this.active})
			},

			update(){
				let number = this.$refs.phone.value;
				this.$emit('input', number);
				this.$emit('update', {
               dialCode: this.active.dial_code,
					formattedNumber: this.active.dial_code+number,
				});
			},

         close(){
            console.log("Dem wan close me oooo!")
         }
		},

		mounted(){
			this.runCleave('NG');
			this.buildFirst();
			// online / offline
			// this.$nuxt.isOnline
		}
	}
</script>

<style scoped lang="scss">
	.act--btn{
		border-radius: 10px 0 0 10px;
		cursor: pointer;

		.tab{
			font-size: 12.5px;
			width: 150px;
			display: block;
			padding: 4px 0;
		}
	}

   .fc{
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;

      .inp{
         width: 100%;
         background: none;
         border: none;
      }
   }

   .c-inp{
      border: none;
      background: none;
      padding-left: 0;
      cursor: pointer;
   }

   .p-inp{
      margin-top: 5px;
      background: none;
      border: 0;
      border-left: 1px solid #dde0e3;

      input{
         background: none;
         border: none !important;

         &:focus{
            outline: none;
            box-shadow: none;
         }
      }
   }

	.country--code {
		position: absolute;
      min-width: 230px;
      z-index: 1;
      background: #fff;
      border-radius: 4px;
      left: 0;
      box-shadow: 0 3px 21px 0 rgb(0 0 0 / 7%);

		.search-cover{
			padding: 15px;
			border-bottom: 1px solid #ddd;
			background: #f3f3f3;
			border-radius: 4px 4px 0 0;
         border: 1px solid #ddd;
         margin-bottom: 15px;

         input{
            height: 30px;
            background: #ffffff;
            margin-left: 10px;
            font-size: 14px;
         }
		}

		ul{
			margin: 0;
			height: 100%;
			background:  #fff;
			max-height: 210px;
			max-height: 210px;
			overflow-y: auto;
			overflow-x: hidden;
			min-width: 230px;
         border-radius: 4px;
         padding: 0;
		}

		li{
			list-style: none;
			padding: 5px 10px;
			font-size: 14px;
			margin-bottom: 1px;
			border-radius: 3px;

			span{
				padding-left: 5px;
			}

			&:hover{
				background: #f3f3f3;
				cursor: pointer;
			}

			&.active{
				background: dodgerblue;
				color: #fff;
				font-weight: bold;
			}
		}
	}
</style>
