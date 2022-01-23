<template>
  <div class="flex-1 border-r-2 border-gray-100" ref="inputEditor">
    <client-only placeholder="Codemirror Loading...">
      <codemirror
        class="h-full"
        ref="cmEditor"
        :value="code"
        :options="cmOption"
        @input="onCmCodeChange"
      />
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

export default Vue.extend({
  data() {
    return {
      code: '',
      cmOption: {
        tabSize: 2,
        theme: 'monokai',
        styleActiveLine: false,
      },
    }
  },
  methods: {
    onCmCodeChange(newCode: string) {
      this.code = newCode
      this.$emit('onCodeChange', newCode)
    },
  },
})
</script>
