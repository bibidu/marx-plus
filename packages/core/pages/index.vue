<template>
  <div>
    <TopBar />
    <div class="flex pt-12 h-screen">
      <InputEditor @onCodeChange="onCodeChange" />
      <Previewer :html="previewHTML" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import hljs from 'highlight.js'
import markdown from 'markdown-it'

const md = markdown({
  highlight: function (str: string, lang?: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return ''
  },
})

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      previewHTML: '',
    }
  },
  methods: {
    onCodeChange(code: string) {
      this.previewHTML = md.render(code)
    },
  },
})
</script>

