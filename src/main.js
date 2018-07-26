// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from './store/index';
import Auth from './components/auth/auth';
import firebase from 'firebase';
import firebasekey from './firebasekey'

Vue.use(Vuetify);
Vue.use(Auth);

Vue.config.productionTip = false
var config = firebasekey
firebase.initializeApp(config);


router.beforeEach((to, from, next) => {
 // console.log(Vue.auth.isAuthenticated())
    if(to.meta.needAuth && Vue.auth.isAuthenticated() != true ) {
      next({
        path: '/login', query: {redirect: to.path}
      })
      return
    }
    next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
