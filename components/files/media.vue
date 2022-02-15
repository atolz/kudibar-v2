<template>
   <div class="media-box">
      <div v-if="isLoading" class="text-center s-top">
         <loader :option="{ color: '#211' }" />
      </div>

      <div class="files pb-5" v-if="files.length > 0">
         <div class="row">
            <div
               class=" col-md-2"
               style="margin-bottom: 25px"
               v-for="(file, i) in files"
               :key="i"
            >
               <div
                  class="image-box"
                  :style="{ backgroundImage: 'url(' + file.path + ')' }"
               >
                  <div class="thumb align-middle">
                     <div class="insert--img" @click.prevent="insertImage(i)">
                        <svg-icon
                           class="icon fixed white"
                           icon="ic_open_in_new_48px"
                        />
                        Insert
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="text-center" v-else>
         <div class="rect c">
            <img src="/images/no-media.png" style="width: 100%" />
         </div>

         <p>
            No uploaded data
         </p>
      </div>

      <!-- hanger -->
      <div class="hanger" v-if="file.hasOwnProperty('name')">
         <!-- Close -->
         <a
            href="#"
            class="btn btn-primary btn-sm btn-round"
            @click.prevent="file = {}"
         >
            <svg-icon class="white" icon="ic_close_48px" />
         </a>
         <!-- end close -->
         <div class="divider"></div>

         <div class="form-group cover">
            <img :src="file.path" />
         </div>

         <div class="divider"></div>

         <div class="text-center">
            <a
               v-if="insert"
               href="#"
               class="btn btn-round btn-sm btn-info"
               @click.prevent="insertImage"
            >
               <svg-icon class="white" icon="ic_open_in_new_48px" />
               Insert
            </a>

            <a
               href="#"
               class="btn btn-round btn-sm btn-danger"
               @click.prevent="removeFile"
            >
               <loader v-if="removeLoader" :option="{ color: '#fff' }" />
               <span v-else>
                  <svg-icon class="white" icon="ic_close_48px" />
                  Remove
               </span>
            </a>
         </div>
      </div>
      <!-- hanger -->
   </div>
</template>

<script>
import svgIcon from "@/components/util/svg-loader";
import loader from "@/components/util/loader";

export default {
   props: {
      files: {
         required: true,
         type: Array
      },
      insert: {
         required: false,
         type: Boolean
      },
      isLoading: {
         type: Boolean
      }
   },
   data() {
      return {
         file: {},
         mediaLoader: true,
         removeLoader: false
      };
   },

   methods: {
      /**
       * Insert Image
       * @param  {[type]} file [description]
       * @return {[type]}      [description]
       */
      showHanger(i) {
         this.file = this.files[i];
      },

      /**
       * Insert file
       * @param  {[type]} file [description]
       * @return {[type]}      [description]
       */
      insertImage(i) {
         this.file = this.files[i];

         this.$emit("input", this.file.path);
         this.$parent.$emit("update", this.file.path);
         this.$emit("watch-fired", true);
         this.file = {};
      },

      /**
       * Remove file
       * @return {[type]} [description]
       */
      async removeFile() {
         try {
            this.removeLoader = true;
            let id = this.file._id;
            let files = this.files;
            let res = await this.$axios.$post("/file/delete", { id });

            for (let i in files) {
               if (files[i]._id === id) {
                  files.splice(i, 1);
                  this.file = {};
                  break;
               }
            }

            this.removeLoader = false;
            this.status("Removed successfully!", "success");
         } catch (error) {
            this.removeLoader = false;
            this.status(error.response.data.message, "error");
         }
      },

      /**
       * Status
       * @param  {[type]} message [description]
       * @param  {[type]} status  [description]
       * @return {[type]}         [description]
       */
      status(message, status) {
         let notify = this.$snotify;

         notify[status](message, "", {
            timeout: 3000,
            showProgressBar: true
         });
      }
   },

   components: {
      svgIcon,
      loader
   }
};
</script>
