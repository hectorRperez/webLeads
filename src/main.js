import { createApp } from 'vue'
import App from './App.vue'
import context from './context'


const app = createApp(App).use(context).mount('#app')
console.log(app);