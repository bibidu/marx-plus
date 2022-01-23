<template>
  <iframe ref="sandbox" v-html="html"></iframe>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  props: {
    html: {
      type: String,
    },
  },
  watch: {
    html(html) {
      this.$refs.sandbox.contentDocument.body.innerHTML = html
    },
  },
})
</script>
