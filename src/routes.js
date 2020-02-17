import HelloWorld from './components/HelloWorld';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default [
  { path: '/', component: HelloWorld },
  { path: '/login', component: Login },
  { path: '/sign-up', component: SignUp },
]