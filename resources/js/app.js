

require('./bootstrap');


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

 // Router Imported
 import {routes} from './routes';

 // import User class
 import User from './Helpers/User';
 window.User = User


window.Reload = new Vue();


const router = new VueRouter({
  routes,
  mode: 'history' 
})






const app = new Vue({
    el: '#app',
    router
});
