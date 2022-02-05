<template>
   <div>
      <transition name="modal">
			<div class="modal-mask" v-if="value">
				<div class="modal-wrapper">
					<div class="modal-container mb-parent">

                  <!-- title -->
                  <div class="modal-header px-lg-5 py-4 d-flex justify-content-between" v-if="title !== ''">
                     <h5 class="title small dark modal-title">{{ title }}</h5>
                     <button type="button" aria-label="Close" class="btn-close ms-auto" @click="close"></button>
                  </div>
                  <!-- title -->

                  <!-- Modal body -->
						<div class="modal-body" ref="modalBox">
                     <div class="position-absolute top-0 end-0 mt-3 me-2" v-if="title == ''">
                        <button type="button" aria-label="Close" class="btn-close ms-auto" @click="close"></button>
                     </div>
                     <!-- <span class="close" @click="close">
                        Close <i class="fa fa-times"></i>
                     </span> -->

                     <!-- container -->
                     <slot />
                     <!-- end container -->
						</div>
                  <!-- end modal body -->

                  <!-- footer -->
                  <!-- <div class="modal-header px-lg-5 py-4" v-if="footer !== ''">
                     <h5 class="title small dark modal-title">{{ footer }}</h5>
                     <span class="float-end">
                        <button type="button" aria-label="Close" class="btn-close ms-auto" @click="close"></button>
                     </span>
                  </div> -->
                  <!-- footer -->

                  <div class="footer" v-if="hasFooter">
                     <slot name="footer" />
                  </div>
					</div>
				</div>
			</div>
      </transition>
   </div>
</template>

<script>
export default {
   props: {
      value: Boolean,
      active: {
         type: Boolean,
         default: false
      },
      title: {
         type: String,
         default: ""
      },
      hasFooter: {
         type: Boolean,
         default: false
      },
      footer: {
         type: String,
         default: ""
      }
   },

   data(){
      return {
         visible: false,
         modalBox: true
      }
   },

   methods: {
      close(){
         this.$emit('on-close', false);
         this.visible = false;

         // enable scroll
         // this.enableScroll();
      },

      checkActive(){

         if(this.active){
            console.log('modal active');
            this.disableScroll();
         }
      },

      disableScroll() {
         // Get the current page scroll position
         scrollTop =  window.pageYOffset || document.documentElement.scrollTop;
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

         // if any scroll is attempted,
         // set this to the previous value
         window.onscroll = () => {
            window.scrollTo(scrollLeft, scrollTop);
         };
      },

      enableScroll() {
         window.onscroll = () => {};
      }
   },

   mounted(){
      let _that = this;
      this.checkActive();

      window.addEventListener('mouseup', (e) => {
         var el = document.querySelector('.mb-parent');
         if(el != null){
            if(e.target != el && !el.contains(e.target)){
               _that.close();
            }
         }
      });
   }
}
</script>
