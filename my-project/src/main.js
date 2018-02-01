// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from 'vue-router' 
import routerDefine from './router/index' 
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// import home from '@/home'
// import HomePage from '@/pages/HomePage'
// import DataSciencePage from '@/pages/DataSciencePage'
// import home from './home'

//引入组件
// import login from './pages/login'
// import register from './pages/register'

Vue.use(Router);

let router = new Router(routerDefine)
Vue.use(iView);
//告诉vue使用vueRouter
// Vue.use(VueRouter);
Vue.config.productionTip = false

// 配置路由
// const router =  new VueRouter({
// 	routes:[
// 		{path:"/",component:home},
// 		// {path:"/pages/login",component:login},	
// 		// {path:"/pages/register",component:register}	
// 	],
// 	mode:"history"
// })
new Vue({
  el: '#app',
  router,  //注入到根实例中
  template: '<App/>',
  components: { App }
})