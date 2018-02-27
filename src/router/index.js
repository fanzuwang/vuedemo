// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router' //这是基础vue的一个插件
import Login from '../component/login/Login.vue'
import Register from '../component/register/Register.vue'

// 启动vue插件
Vue.use(VueRouter)

// 导出路由实例
export default new VueRouter({
    // 设置路由规则
    routes:[
        {name:'login',path:'/login',component:Login},
        {name:'register',path:'/register',component:Register}
    ]
})