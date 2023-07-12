import router from './router'
import App from './App'
import { createSSRApp } from 'vue'
import uView from './vk-uview-ui_1.4.5';

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView);
  
  return {
    app,
    router
  }
}