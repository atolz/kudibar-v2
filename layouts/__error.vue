<template>
  <div>
      <error-page :code="error.statusCode" />
      <pre>
         {{ error }}
      </pre>
  </div>
</template>

<script>
import errorPage from '@/components/util/error';

export default {
   layout: 'no-footer',
   props: ['error'],
   components: {
      errorPage
   }
}
</script>
