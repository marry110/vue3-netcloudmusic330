import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Swipe, SwipeItem } from 'vant'
// createApp(App).use(store).use(router).mount('#app')
import 'vant/lib/index.css'
// 引入全局可以使所有效果展示
const app = createApp(App)
app.use(Button).use(Swipe).use(SwipeItem)
app.use(store).use(router).mount('#app')
