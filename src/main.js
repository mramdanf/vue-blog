import Vue from 'vue'
import VueRouter from 'vue-router';
import * as firebase from "firebase";

import App from './App.vue'
import vuetify from './plugins/vuetify';
import Routes from './routes';

const configOptions = {
  apiKey: "AIzaSyBZtl3I03xOSArIFjkFKGBp2eTV",
  authDomain: "vue-js-store.firebaseapp.com",
  databaseURL: "https://vue-js-store.firebaseio.com",
  projectId: "vue-js-store",
  storageBucket: "vue-js-store.appspot.com",
  messagingSenderId: "272399570554",
  appId: "1:272399570554:web:bdab9747e6e1c10c31cdc3"
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
