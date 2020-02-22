import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from './components/HelloWorld';
import Login from './components/Login';
import SignUp from './components/SignUp';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/login', component: Login },
  { path: '/sign-up', component: SignUp },
];

const router = new VueRouter({
  routes,
});

export default router;
