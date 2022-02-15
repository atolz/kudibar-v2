<template>
   <div>
      <!-- image upload box -->
      <div class="upload-action" @click="toggleBox">
         <div class="image" v-if="file == ''">
            <div>
               <span class="icon">
                  <i class="fa fa-image"></i>
               </span>
            </div>

            <div>
               <strong class="title small dark">
                  Click to add main event picture
               </strong>
            </div>

            <div>
               <small>
                  700px by 1500px JPEG or PNG
               </small>
            </div>
         </div>
         <div
            v-else
            class="thumb"
            :style="{
               backgroundImage: `url(${file})`,
               height: picSize
            }"
         >
            <!-- <img :src="file" /> -->
         </div>
         <input type="hidden" v-model="file" />
      </div>
      <!-- end image upload box -->

      <!-- modal -->
      <modal v-model="isModalActive" @on-close="modalClose">
         <div class="tabs s-20">
            <span v-for="(tab, i) in tabs" :key="i">
               <a
                  href="#"
                  class="kbtn stroke dark"
                  @click.prevent="tabToggle(i)"
                  :class="{ solid: tab.active }"
               >
                  <span v-html="tab.icon"></span>
                  {{ tab.title }}
               </a>
            </span>
         </div>

         <div class="divider"></div>

         <div>
            <!-- Upload -->
            <div class="tab-box" :class="{ active: box[0] }">
               <h4 class="title small dark">Upload files</h4>

               <file-upload
                  class="upload-box"
                  :folder="folder"
                  :fetch_id="fetch_id"
                  v-model="file"
                  @watch-fired="modalClose(false)"
                  :insert="insert"
               />
            </div>
            <!-- end upload -->

            <!-- Media -->
            <div class="tab-box" :class="{ active: box[1] }">
               <h4 class="title small dark">Media files</h4>

               <media-box
                  :files="media"
                  :insert="insert"
                  v-model="file"
                  @watch-fired="modalClose(false)"
               />
            </div>
            <!-- end Meida -->
         </div>
      </modal>
      <!-- end modal -->
   </div>
</template>

<script>
import modal from "@/components/util/modal";
import svgIcon from "@/components/util/svg-loader";

import fileUpload from "@/components/files/upload";
import mediaBox from "@/components/files/media";

export default {
   props: {
      value: {
         require: true
      },
      size: {
         require: true
      },
      picSize: {
         type: String,
         default: "350px"
      },
      type: {
         require: true
      },
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

   data() {
      return {
         file: "",
         media: [],
         isActive: false,
         isModal: false,
         tabs: [
            {
               title: "Upload",
               icon: '<i class="fas fa-upload"></i>',
               active: false
            },
            {
               title: "Media",
               icon: '<i class="fas fa-photo-video"></i>',
               active: true
            }
         ],
         box: { 0: false, 1: true },
         hasMediaData: false,
         isModalActive: false
      };
   },

   methods: {
      modalClose(val) {
         this.$emit("input", this.file);
         this.isModalActive = val;
      },

      // Toggle box
      //  @return {[type]} [description]

      toggleBox() {
         this.isModalActive = this.isModalActive ? false : true;
      },

      /**
       * Tab toggle
       * @param  {[type]} i [description]
       * @param  {[type]} n [description]
       * @return {[type]}   [description]
       */
      tabToggle(i, n) {
         this.tabs.forEach((v, i) => {
            v.active = false;
            this.box[i] = false;
         });
         this.tabs[i].active = true;
         this.box[i] = true;
         if (i === 1) this.getMedia();
      },

      /**
       * Get media files
       * @return {[type]} [description]
       */
      async getMedia() {
         try {
            let res = await this.$axios.$post("/file/media", {
               owner_id: this.fetch_id,
               page: 0,
               limit: 30
            });

            this.media = res.data;
         } catch (error) {
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

   mounted() {
      this.getMedia();
      if (this.value !== undefined) this.file = this.value;
   },

   components: {
      modal,
      svgIcon,
      fileUpload,
      mediaBox
   }
};
</script>
