import Vue from 'vue'
import VueRouter from 'vue-router';
import * as firebase from "firebase";

import App from './App.vue'
import vuetify from './plugins/vuetify';
import Routes from './routes';

const configOptions = {
  apiKey: "AIzaSyAGYxm-Mh_ffdAKqqTOYT_tFZW58txDh-0",
  authDomain: "vue-blog-project-63fd9.firebaseapp.com",
  databaseURL: "https://vue-blog-project-63fd9.firebaseio.com",
  projectId: "vue-blog-project-63fd9",
  storageBucket: "vue-blog-project-63fd9.appspot.com",
  messagingSenderId: "500857608788",
  appId: "1:500857608788:web:d98c86867385669c606bc1",
  measurementId: "G-1GH48ZHNVZ"
};

firebase.initializeApp(configOptions);

Vue.config.productionTip = false

Vue.use(VueRouter);

const router =  new VueRouter({
  routes: Routes,
})

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
