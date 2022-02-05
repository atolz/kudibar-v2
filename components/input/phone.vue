<template>
	<div>

      <div class="input-group">
         <span class="input-group-text ps-0" @click="toggle">
            <!-- <span>{{active.flag}}</span> -->
            <img :src="flag(active.code)" width="13" />
            <span style="padding-left: 5px; font-weight: 700">
               {{ active.dial_code }}
            </span>
         </span>
         <input type="text" class="form-control input-phone gcp" ref="phone" :value="value" :placeholder="place" @keyup="update" />
      </div>

      <div class="country--code" v-if="open">
         <div class="search-cover">
            <input type="text" v-model="filter" @keyup="search" placeholder="Filter search..." autocomplete="true" />
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


		<!-- <div class="row no-gutters">
			<div class="col-4 col-sm-3">
				<div class="">
					<div class="input act--btn" @click="toggle">
						<span class="tab">
							<img :src="flag(active.code)" width="13" />
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
									<img :src="flag(country.code)" :alt="country.name" width="13" />
									<span>{{ country.name }}</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-8 col-sm-9">
				<input type="text" class="input input-phone" style="height: 30px" ref="phone" :value="value" :placeholder="place" @keyup="update" />
			</div>
		</div> -->
	</div>
</template>

<script>
	import Cleave from 'cleave.js';
	import 'cleave.js/dist/addons/cleave-phone.i18n';

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
				first: ['NG', 'GH'],
				active: {},
				basic: [],
				countries: [],
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
				this.countries.map(v => v.active = false);
				this.active = this.countries[i];
				this.active.active = true;
				this.open = false;
				this.runCleave(this.active.code);

				// Search
				this.filter = '';
				this.countries = this.$store.state.countries.data;
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
				let data = this.$store.state.countries.data;

				if(str.length !== 0){
					this.countries = [];
					data.map(v => {
						if(v.name.match(reg)){
							this.countries.push(v);
						}
					});
				}else{
					this.countries = this.$store.state.countries.data;
				}
			},

			runCleave(str){
				let c = str.toLowerCase();
				var cleave = new Cleave('.input-phone', {
				   phone: true,
				   phoneRegionCode: c
				});
			},

			update(){
				let number = this.$refs.phone.value;
				this.$emit('input', number);
				this.$emit('update', {
					formattedNumber: this.active.dial_code +' (0) '+number,
				});
			}
		},

		mounted(){
			this.runCleave('NG');

			this.countries = this.$store.state.countries.data;
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

   .gcp{
      border: none;
      background: none;
      height: 30px;
      padding-left: 5px;
      padding-top: 8px;
      outline: none;

      &:focus{
         outline: none;
      }
   }

	.country--code {
		position: absolute;
		// width: 100%;
		min-width: 230px;
		z-index: 1;
		background:  #fff;
		border-radius: 4px;
      left: 30px;
      bottom: -55px;

		.search-cover{
			padding: 10px;
			border-bottom: 1px solid #ddd;
			background: #f3f3f3;
			border-radius: 4px 4px 0 0;
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
