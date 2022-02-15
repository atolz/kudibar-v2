<template>
	<div>
		<!-- upload box -->
		<div class="upload--area">
			<label v-if="count == 0">
				Click / tap here to upload images <br>
				Supported formats: <strong>JPEG, PNG, GIF</strong>
				<input type="file" id="file" ref="files" multiple v-on:change="handleFileUpload" accept="image/*" />
			</label>

			<!-- progress bar -->
			<div class="align-middle" style="padding: 35px 20px;" v-else>
			<!-- <div class="align-middle" style="color: aquamarine;" v-if="!file.status || file.status == 'uploading'"> -->
				<div class="progress--bar" v-if="showAllProgress">
					<div class="progress">
						<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="'width:100%'" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Uploading...</div>
					</div>
				</div>

				<div class="row stats">
					<div class="col-sm-4 col-lg-8">
						Status:
						<span>
							{{ count }} / {{ pendingFiles.length }}
						</span>
					</div>
					<div class="col-sm-4 col-lg-2">
						Success: <span>{{ passed }}</span>
					</div>
					<div class="col-sm-4 col-lg-2">
						Failed: <span>{{ failed }}</span>
					</div>
				</div>

            <div v-if="!showAllProgress">
               <a href="#" @click.prevent="count = 0">
                  <strong>Add another image(s)</strong>
               </a>
            </div>
			</div>
			<!-- progress bar -->
		</div>
		<!-- end upload box -->

		<!-- upload progress -->
		<div class="upload--box">
			<div class="row">
				<div class="col-sm-3" style="margin-bottom: 25px" v-for="(file, i) in pendingFiles" :key="i">
					<div class="image-box" :style="{backgroundImage: 'url('+file.src+')'}">

						<!-- progress bar -->
						<div class="align-middle" style="color: aquamarine;" v-if="!file.status || file.status == 'uploading'">
							<div class="progress--bar">
								<div class="progress">
									<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="'width:'+file.percent+'%'" :aria-valuenow="file.percent" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
							<span style="color: #fff">
                        <strong>Uploading...</strong>
                     </span>
						</div>
						<!-- progress bar -->

						<!-- Success message -->
						<div class="thumb align-middle" v-if="insert && file.status === 'success'">
							<div class="insert--img success" @click.prevent="insertImage(i)">
								<svg-icon class="icon fixed white" icon="ic_open_in_new_48px" />
								Insert
							</div>
						</div>
						<!-- end Success message -->

						<!-- failed message -->
						<div class="thumb align-middle" v-if="file.status === 'failed'">
							<div class="insert--img error" @click.prevent="insertImage(i)">
								<i class="fas fa-exclamation-triangle"></i>
								File format not suppprted <br>
								<!-- <small>Image format not supported</small> -->
								<a href="#" class="btn btn-sm btn-secondary btn-round" @click.prevent="retryUpload(i)">
									<svg-icon class="icon fixed white" icon="ic_refresh_48px" />
									Retry
								</a>
							</div>
						</div>
						<!-- end failed message -->
					</div>
				</div>
			</div>
		</div>
		<!-- end upload process -->
	</div>
</template>

<script>
	import svgIcon from '@/components/util/svg-loader';

	export default {
		props: {
			folder: {
				require: true
			},
			fetch_id: {
				require: true
			},
			insert: {
				required: false,
				type: Boolean
			}
		},

		data(){
			return {
				files: [],
            pendingFiles: [],
            showAllProgress: false,
				percent: 0,
				passed: 0,
				failed: 0,
            count: 0,
			}
		},

		methods: {
			/**
			 * On upload
			 * @return {[type]} [description]
			 */
			handleFileUpload(){
				this.files = [];
			   this.files = this.$refs.files.files;

			   this.build();
			},

			/**
			 * Upload file
			 * @return {[type]} [description]
			 */
			async upload(){
				let _that = this;
				let param = this.setParam();
            let files = this.files;

				this.passed = 0;
				this.failed = 0;
            this.count = 0;
            this.showAllProgress = true;

				// sequence upload files
				for( var i = 0; i < files.length; i++ ){
					let form = new FormData();
					form.append('file', files[i]);
               form.append('dir', this.folder);
               form.append('id', this.fetch_id);
					this.count += 1;

					try{
						let res = await this.$axios.$post('/file/upload', form, {
						   headers: {
						      'Content-Type': 'multipart/form-data'
						   },
						   onUploadProgress: (e) => {
						      let percent = parseInt( Math.round( ( e.loaded * 100 ) / e.total ) );
						      _that.pendingFiles[i].percent = percent;
						   }
						});

						_that.pendingFiles[i].status = 'success';
						_that.pendingFiles[i].link = res.path;
                  _that.passed += 1;

                  if(i == (files.length - 1)) this.showAllProgress = false;
					}catch(error){
						_that.failed += 1;
						_that.pendingFiles[i].status = 'failed';
                  this.status(error.response.data.message, 'error');

                  if(i == (files.length - 1)) this.showAllProgress = false;
               }
				}
			},

			/**
			 * Retry upload
			 * @return {[type]} [description]
			 */
			async retryUpload(i){
				this.pendingFiles[i].status = 'uploading';

				let _that = this;
				let param = this.setParam();
				let files = this.files;

				let form = new FormData();
				form.append('file', files[i]);
				form.append('dir', this.folder);
				form.append('id', this.fetch_id);

				try{
					let res = await this.$axios.$post('/file/upload', form, {
					   headers: {
					      'Content-Type': 'multipart/form-data'
					   },
					   onUploadProgress: (e) => {
					      let percent = parseInt( Math.round( ( e.loaded * 100 ) / e.total ) );
					      _that.pendingFiles[i].percent = percent;
					   }
					});

					_that.pendingFiles[i].status = 'success';
					_that.pendingFiles[i].link = res.path;
					_that.passed += 1;
				}catch(error){
					_that.failed += 1;
					_that.pendingFiles[i].status = 'failed';
			      this.status(error.response.data.message, 'error');
				}
			},

			/**
			 * Create Images
			 * @param  {[type]} file [description]
			 * @return {[type]}      [description]
			 */
			createImg(file){
				let img = window.URL.createObjectURL(file);
				return img;
			},

			/**
			 * Build pending
			 * @return {[type]} [description]
			 */
			build(){
				let bask = [];
				for(let i = 0; i < this.files.length; i++){
					bask.push({
						src: this.createImg(this.files[i]),
						percent: 0,
						status: ''
					});
				}
				this.pendingFiles = bask;

				this.upload();
			},

			/**
			 * Set params
			 */
			setParam(){
				let str = '';
				if(this.folder !== '') str += 'dir='+this.folder+'/';

				return (str !== '') ? '?'+str : '';
			},

			/**
			 * Status
			 * @param  {[type]} message [description]
			 * @param  {[type]} status  [description]
			 * @return {[type]}         [description]
			 */
			status(message, status){
				let notify = this.$snotify;

				notify[status](message, '', {
					timeout: 3000,
					showProgressBar: true,
				});
			},

			/**
			 * insert image
			 * @return {[type]} [description]
			 */
			insertImage(i){
				let src = this.pendingFiles[i].link;
				this.$emit('input', src);
				this.$emit('watch-fired', true);
				// this.$parent.$emit('input', src);
			}
		},

		components: {
			svgIcon
		}
	}
</script>
