import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";

const app = createApp(App)

app.use(router) // ✅ 라우터 연결
app.mount('#app') // ✅ 이제 정상 동작할 것!
