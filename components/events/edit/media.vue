<template>
    <div>
        <!-- Media -->
        <div class="ce-grp no-border">

            <div class="row">
               <div class="col-sm-5">

                  <!-- media -->
                  <div class="thumb-image">
                     <file-box v-model="image" size="700px by 1500px" type="picture" :folder="`accounts/${uid}/media`" :fetch_id="uid" pic-size="150px" :insert="true" />
                  </div>
                  <!-- <field-errors v-if="$v.event.media.picture.$error" :field="$v.event.media.picture" /> -->
                  <!-- end media -->
               </div>

               <div class="col-sm-7">
                  <!-- url -->
                  <video-url v-model="video" />
                  <!-- end url -->

                  <div class="mt-2">
                     <p class="title x-small light">
                     Add Youtube or Vimeo links to explain to your attendees what to expect in your event.
                     </p>
                  </div>
               </div>
            </div>

        </div>
        <!-- end Media -->

        <div style="color: #fa0">

            <p>
               <small>
                  Please note that this event will go through approval process again once you hit update.
               </small>
            </p>
         </div>


         <div class="mt-3">
            <div class="mt-3" v-if="!isLoading">
               <a href="#" class="kbtn solid dark" @click.prevent="update">
                  Update
                  <i class="icon fas fa-chevron-right"></i>
               </a>
            </div>
            <loader :option="{color: '#221'}" v-else />
         </div>

    </div>
</template>

<script>

import svgIcon from '@/components/util/svg-loader';
import fileBox from '@/components/files/toggle';
import videoUrl from '@/components/util/video';
import loader from '@/components/util/loader';

import fieldErrors from '@/components/input/validation';

import { required, minLength, maxLength, email, numeric } from 'vuelidate/lib/validators';

export default {
   props: {
      event: {
         type: Object,
         required: true
      }
   },
   data(){
      return{
         isLoading: false,
         uid: "dsdsdsds", // Replace with user id
         image: "",
         video: ""
      }
   },

   methods: {
      async update(){
         try{
            // this.$v.event.$touch();
				// if(this.$v.event.$pending || this.$v.event.$error) return;

            this.isLoading = true;

            let res = await this.$axios.$post('/events/update', {
               id: "sdsdsds", // Replace with event id
               media: this.event.media,
               type: 'media'
            });

            this.isLoading = false;
            this.status('Updated successfully!', 'success');
         }catch(error){
            this.isLoading = false;
            if(error.hasOwnProperty('response')){
               this.status(error.response.data.message, 'error');
            }else{
               this.status(error, 'error');
            }
         }
      },

      /**
       * Status
       */
      status(message, status){
         let notify = this.$snotify;

         notify[status](message, '', {
            timeout: 3000,
            // showProgressBar: true,
         });
      },
   },

   validations: {
      event: {
         media: {
            picture: { required }
         },
      }
   },

    components: {
        fieldErrors,
        fileBox,
        videoUrl,
        loader,
        svgIcon
    }
}
</script>
