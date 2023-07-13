import router from './router'
import App from './App'
import { createSSRApp } from 'vue'
import uView from './vk-uview-ui_1.4.5';
import ShowStrCodeCom from '@/components/show-str-code.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView);
  app.component('showJsonCont',ShowStrCodeCom)
  
  return {
    app,
    router
  }
}