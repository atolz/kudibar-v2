<template>
	<div class="">
		<div class="inner--scroll" ref="oneSlider">
		   <slot />
		</div>

		<div class="box--action">
		   <span class="slide--nav" title="Prev" @click="prev">
		      <svg-loader icon="ic_keyboard_arrow_left_48px" />
		   </span>
		   <span class="slide--nav" title="Next" @click="next">
		      <svg-loader icon="ic_keyboard_arrow_right_48px" />
		   </span>
		</div>
	</div>
</template>

<script>

	// import svgLoader from '@/components/util/svg-loader';

	export default {
		props: {
			duration: {
				type: Number,
				required: true
			}
		},
		data(){
			return {
				box: '',
				width: 220,
				slides: {},
			}
		},

		methods: {
			slide(direction = 'left'){
				this.box.scrollTo({
					'behavior': 'smooth',
					[direction]: this.width+20
				});

				setTimeout(() => {
					let slide = this.slides[0];
					// console.log(slide);
					this.box.removeChild(slide);
					this.box.appendChild(slide);
					this.box.scrollTo(0,0);
				}, this.duration-20);
			},

			render(){
				setTimeout(() => {
					this.slide();

					this.render();
				}, this.duration);
			},

			next(){
				// this.slide();
				console.log('next');
			},

			prev(){
				// this.slide('right');
				console.log('prev');
			},
		},

		mounted(){
			this.box = this.$refs.oneSlider;
			this.slides = this.box.children;
			this.width = this.slides.length > 0 ? this.slides[0].offsetWidth : 0;
			this.render();
		},

		components: {
			// svgLoader
		}

	}
</script>

<style>
	.slide--nav{
		display: inline-block;
		cursor: pointer;
	}
</style>


