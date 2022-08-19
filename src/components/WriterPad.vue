<script>
import { useTextSelection } from '@vueuse/core'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    setup() {
      const state = useTextSelection();
      return {
        state,
      }
    },
    data() {
      return {
        editor: ClassicEditor,
        editorData: '<p>Content of the editor.</p>',

      }
    },
    computed: {
      selectedText() {
        return this.state.text.value
      }
    },
    methods: {
      applyTag(tag) {
        switch (tag) {
          case 'bold':
            
            break;
        
          default:
            break;
        }
      }
    }
}
</script>

<template>
  <div class="p-4">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>


<style>
.ck-editor__editable {
    min-height: 500px;
}
</style>