import Vue from 'vue'
import Menu from './components/Common/Menu'

Vue.use(require('vue-resource'));
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

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
    '/tas001': {
      component: require('./components/TAS001/TAS001')
    },
    '/:param': {
      component: {
        template: '<div>{{$route.params|json}}</div>'
      }
    }
});

router.beforeEach(function (transition) {
  console.log('transition:', transition)
  var path = transition.to.path
  console.log('transition.to.path:',path);
  console.log('skins:', path.indexOf('/skins/'))
  if (path === '/' || path.indexOf('/api') >= 0 || path.indexOf('/skins/') >= 0) {

    if(path.indexOf('/skins/') >= 0) {
        router.app.skins = path.replace('/skins/','')
        console.log('router.app.skins:', router.app.skins)
    }
    transition.abort()
  }
  else {
    transition.next()
  }
});

var app = Vue.extend({
  el: "body",
  components: {
    Menu
  },
  data: function () {
    return {
      menus: [],
      skins: 'default'
    }
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