import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import Router from 'vue-router';

import App from '/imports/ui/App.vue';

import Login from '/imports/ui/components/Login.vue';
  
import Register from '/imports/ui/components/Register.vue';


Meteor.startup(() => {
  Vue.use(VueMeteorTracker);
  Vue.use(Router);

  const routes = [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
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
