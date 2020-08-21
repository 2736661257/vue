import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI); //类似于不适用路由时候的一个组件的注册，这里的注册时全局进行注册的，

Vue.config.productionTip = false
//根vue实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')//$mount()是vue自带的一个属性，加$是为了和用户自定义的属性进行区分的
//生命周期钩子的 this 上下文指向调用它的 Vue 实例。


//html模板
//jscript是写vue实例的