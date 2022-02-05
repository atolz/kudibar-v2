<template>
	<span class="circle-loader">
		<span v-for="(a, i) in arr" :key="i" :style="styleList"></span>
	</span>
</template>

<script>
	export default {
		props: {
			option: {
				required: false,
				type: Object,
			}
		},
		data(){
			return {
				arr: [1, 2, 3, 4]
			}
		},
		computed: {
			/**
			 * Style 
			 * @return {[type]} [description]
			 */
			styleList(){
				let str = '';
				let o = this.option;

				if(this.option.hasOwnProperty('size')){
					str += `width: ${o.size}px;`;
					str += `height: ${o.size}px;`;
				}

				str += this.option.color !== undefined ? `background: ${o.color};` : '';

				return str;
			}
		},

		mounted(){
			// console.log(this.option);
		}
	}
</script>