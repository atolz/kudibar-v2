<template>
	<div class="">
      <div>
         <!-- Alternate message -->
         <div class="error" v-if="alt !== ''">
            <span class="icon fixed">
               <svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#ED6347" fill-rule="evenodd" stroke="none"></path></svg>
            </span>
            <span>{{ alt }}</span>
         </div>

         <!-- Required -->
         <div class="error" v-if="field.required !== undefined && !field.required">
            <span class="icon fixed">
               <svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#ED6347" fill-rule="evenodd" stroke="none"></path></svg>
            </span>
            <span>Field is required</span>
         </div>

         <!-- Min char  -->
         <div class="error" v-if="field.minLength !== undefined && !field.minLength">
            <span class="icon fixed">
               <svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#ED6347" fill-rule="evenodd" stroke="none"></path></svg>
            </span>
            <span>
               Field must have at least {{field.$params.minLength.min}} letters.
            </span>
         </div>

         <!-- Min char  -->
         <div class="error" v-if="field.numeric !== undefined && !field.numeric && hideField !== 'require'">
            <span class="icon fixed">
               <svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#ED6347" fill-rule="evenodd" stroke="none"></path></svg>
            </span>
            <span>
               Must be a number
            </span>
         </div>

         <!-- Max char  -->
         <div class="error" v-if="field.maxLength !== undefined && !field.maxLength">
            <span class="icon fixed">
               <svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#ED6347" fill-rule="evenodd" stroke="none"></path></svg>
            </span>
            <span>
               Field should be less than {{field.$params.maxLength.max }}.
            </span>
         </div>

         <!-- Email -->
         <div class="error" v-if="field.email !== undefined && !field.email">
            <span class="icon fixed">
               <svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#ED6347" fill-rule="evenodd" stroke="none"></path></svg>
            </span>
            <span>
               Must be a valid email (name@example.com)
            </span>
         </div>

         <!-- Min Value -->
         <div class="error" v-if="field.minValue !== undefined && !field.minValue && hideField !== 'min-amount'">
            <span class="icon fixed">
               <svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#ED6347" fill-rule="evenodd" stroke="none"></path></svg>
            </span>
            <span>
               Amount should not be less than ₦{{ $helper.numberFormat(field.$params.minValue.min) }}
            </span>
         </div>

         <!-- password identical -->
         <div class="error" v-if="field.sameAsPassword !== undefined && !field.sameAsPassword">
            <span class="icon fixed">
               <svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#ED6347" fill-rule="evenodd" stroke="none"></path></svg>
            </span>
            <span>
               Passwords must be identical.
            </span>
         </div>

         <div class="error" v-if="field == 'default'">
            <span class="icon fixed">
               <svg height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z" fill="#ED6347" fill-rule="evenodd" stroke="none"></path></svg>
            </span>
            <span>
               {{ message }}
            </span>
         </div>
		</div>

	</div>
</template>

<script>
	export default {
		// props: ['field', 'message'],
      props: {
         field: {
            type: Object,
            required: true
         },
         message: {
            type: String,
         },
         alt: {
            type: String,
            default: ""
         },
         hideField: {
            type: String,
            default: ""
         }
      },
		data(){
			return {
			}
		},

		methods: {
			//
		},

		mounted(){
			// console.log(this.field);
		}
	}
</script>

<style>
	.error{
		color: #bf0711;
		font-size: 12px;
	}
	.error .icon{
		margin-right: 0;
		width: auto;
		height: auto;
	}
</style>
