import Vue from 'vue'

import App from './component/App.vue'

import vueRouter from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 启动ui插件
Vue.use(ElementUI)
new Vue({
    el:'#app',
    render:c=>c(App),
    router: vueRouter 
})