<template>
   <span class="me-2">
      <span v-if="size === 'small'">
         <img :src="avatar" :alt="name" class="avatar" v-if="avatar != '' && avatar !== undefined">
         <span class="avatar avatar-txt align-middle" :style="'background:'+color" v-else>
            {{ makeInitial(name) }}
         </span>
      </span>

      <span v-if="size === 'big'">
         [ Avatar ]
      </span>
   </span>
</template>

<script>
export default {
   props: {
      name: {
         type: String,
         required: true
      },
      image: {
         type: String,
         default: ''
      },
      color: {
         type: String,
         required: true
      },
      size: {
         type: String,
         default: "small"
      },
   },
   data() {
      return {
         //
      }
   },

   methods: {
      makeInitial(str){
         let txt = '';
         let arr = str.split(' ');
         arr.map(v => txt += v.charAt(0));

         return txt;
      }
   }
}
</script>
