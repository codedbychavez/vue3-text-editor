import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';

import './index.css'

const app = createApp(App)

app.use(createPinia())

app.use(CKEditor)

app.mount('#app')
