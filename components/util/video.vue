<template>
	<div>
		<!-- Video field -->
		<div v-if="!isActive" class="form-group">
			<strong>Add Youtube or Vimeo link</strong>
			<input type="text" class="form-control" placeholder="https://" ref="videoField" :value="value" @input="update()" @keyup="generateVideo">
		</div>
		<!-- end video field -->

		<!-- video box -->
		<div v-else>
			<div class="video-action" v-html="video_display"></div>
			<small style="color: blue; cursor: pointer;">
				<span @click="updateLink">+ update</span>
			</small>

			<div v-if="toggleUplink" class="field">
				<strong>Update video link</strong>
				<input type="text" placeholder="https://" ref="videoField" :value="value" @input="update()" @keyup="generateVideo">
			</div>
		</div>
		<!-- video box -->

	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: String
			}
		},
		data(){
			return {
				// model: '',
				video: '',
				isActive: false,
				video_display: '',
				toggleUplink: false
			}
		},
		methods: {
			generateVideo(){
				// console.log('Viewing things!');
				var url = this.value.trim(), iframe = '';
				var l = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\S+)?/);
				if (RegExp.$3.indexOf('youtu') > -1) {
					this.isActive = true;
					iframe = this.createVideo('youtube', RegExp.$6);
				} else if (RegExp.$3.indexOf('vimeo') > -1) {
					this.isActive = true;
					iframe = this.createVideo('vimeo', RegExp.$6);
				}
				if(l === null){
					this.isActive = false;
					iframe = '';
				}
				this.video_display = iframe;

				// Emit props
				// this.$emit('input', this.video)
			},
			createVideo(type, id){
				var src = '';
				if(type === 'youtube') src = '//www.youtube.com/embed/' + id;
				if(type === 'vimeo') src = '//player.vimeo.com/video/' + id;

				return `<iframe width="100%" height="350px" style="background: #000" src="https://${src}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
			},

			update(){
				this.$emit('input', this.$refs.videoField.value)
			},

			updateLink(){
				this.toggleUplink = this.toggleUplink ? false : true;
			}
		},
		mounted(){
		},
		updated(){
			if(this.value !== undefined) this.generateVideo();
		}
	}
</script>
