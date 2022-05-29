import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import Router from 'vue-router';

import App from '/imports/ui/App.vue';

import Login from '/imports/ui/components/Login.vue';
  
import Register from '/imports/ui/components/Register.vue';

import Navigation from '/imports/ui/components/Navigation.vue';

import Home from '/imports/ui/components/Home.vue';

import Card from '/imports/ui/components/Card.vue';

import PageAfterLogin from '/imports/ui/components/PageAfterLogin.vue';






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
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Home',
        name: 'Home',
        component: Home
      },
      {
        path: '/Card',
        name: 'Card',
        component: Card
      },
      {
        path: '/PageAfterLogin',
        name: 'PageAfterLogin',
        component: PageAfterLogin
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
