import Vue from 'vue'
import Menu from './components/Common/Menu'

require('bootstrap/dist/css/bootstrap.min.css')
require('./assets/css/custom.css')

Vue.use(require('vue-resource'));
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

//ajax 拦截
Vue.http.interceptors.push({
  request: function (request) {
    return request
  },
  response: function (response) {
    var status = response.status;
    if(status === 404) {

    }
    if(response.data.STATUS) {
      console.log('response.data.STATUS:', response.data.STATUS)
    }
    return response
  }
});

var VueRouter = require('vue-router');
Vue.use(VueRouter);

var router = new VueRouter();
router.map({
    '/testGrid': {
      component: require('./components/User/TestGrid')
    },
    '/user': {
      component: require('./components/User/User')
    },
    '/testVueStrap': {
      component: require('./components/User/TestVueStrap')
    },
    '/testTabs': {
      component: require('./components/User/TestTabs')
    },
    '/:param': {
      component: {
        template: '<div>{{$route.params|json}}</div>'
      }
    }
});

router.beforeEach(function (transition) {
  console.log('transition.to.path:',transition.to.path);
  if (transition.to.path === '/' || transition.to.path.indexOf('/api') > 0) {
    transition.abort()
  } else {
    transition.next()
  }
});

var app = Vue.extend({
  el: "body",
  components: {
    Menu
  },
  data: {
    menus: []
  },
  ready() {
    this.$http({url: '/api/menus', method: 'GET'}).then(function (response) {
      var menus = response.data;
      console.log('menus:', menus);
      this.$set('menus', menus);
    }, function (response) {
        // error callback
    })
  }
});

router.start(app, 'body');
window.router = router;