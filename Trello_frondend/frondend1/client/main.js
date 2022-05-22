import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import Router from 'vue-router';

import App from '/imports/ui/App.vue';

import Login from '/imports/ui/components/Login.vue';
  
import Register from '/imports/ui/components/Register.vue';

import Navigation from '/imports/ui/components/Navigation.vue';

import Home from '/imports/ui/components/Home.vue';


Meteor.startup(() => {
  Vue.use(VueMeteorTracker);
  Vue.use(Router);

  const routes = [
      {
        path: '/Login',
        name: 'Login',
        component: Login
      },
      {
        path: '/Navigation',
        name: 'Navigation',
        component: Navigation
      },
      {
        path: '/Register',
        name: 'Register',
        component: Register
      },
      {
        path: '/Home',
        name: 'Home',
        component: Home
      }
    ];

  const router = new Router({
    routes
  });

  new Vue({
    router,
    render: (h) => h(App)
  }).$mount('#app');
});
