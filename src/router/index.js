import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

import Main from '@/components/Main';

import Home from '@/components/Home';
import About from '@/components/About';
import User from '@/components/User';
import Other from '@/components/Other';

import UserPic from '@/components/UserPic';
import UserDescribe from '@/components/UserDescribe';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Other',
      name: 'Other',
      component: Other,
      beforeEnter: (to, from, next) => {
        console.log('jfkldsjfkldsjkfldjsklfjdlksjflkdsjfkldsjlfjlsd')
        next(vm => {
		    // 通过 `vm` 访问组件实例
		    console.log(vm.isother)
		    vm.isother = false;
		})
      }
    },
    {
      path: '/User/:id',
      name: 'User',
      component: User,
      children:[
      	{ path:'UserPic',component:UserPic },
      	{ path:'UserDescribe',component:UserDescribe },
      ]
    },
  ],
});
