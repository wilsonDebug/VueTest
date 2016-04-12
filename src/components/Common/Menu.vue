<style type="text/css">
    .dropdown-submenu {
        position: relative;
    }
    .dropdown-submenu > .dropdown-menu {
        top: 0;
        left: 100%;
        margin-top: -6px;
        margin-left: -1px;
        -webkit-border-radius: 0 6px 6px 6px;
        -moz-border-radius: 0 6px 6px;
        border-radius: 0 6px 6px 6px;
    }
    .dropdown-submenu:hover > .dropdown-menu {
        display: block;
    }
    .dropdown-submenu > a:after {
        display: block;
        content: " ";
        float: right;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        border-width: 5px 0 5px 5px;
        border-left-color: #ccc;
        margin-top: 5px;
        margin-right: -10px;
    }
    .dropdown-submenu:hover > a:after {
        border-left-color: #fff;
    }
    .dropdown-submenu.pull-left {
        float: none;
    }
    .dropdown-submenu.pull-left > .dropdown-menu {
        left: -100%;
        margin-left: 10px;
        -webkit-border-radius: 6px 0 6px 6px;
        -moz-border-radius: 6px 0 6px 6px;
        border-radius: 6px 0 6px 6px;
    }
    .show-menu {
      display: block!important;
    }
</style>

<template>
  <div class="collapse navbar-collapse">
    <ul class="nav navbar-nav"> <!--第一层菜单-->
      <li class="dropdown" v-for="menu in topMenus|filterBy -1 in 'parentId'">
        <a href="#" data-toggle="dropdown" v-link="{path: menu.url=='' ? '/' : menu.url}" @click="show(menu.id)">
          {{menu.menuName}}
          <b class="caret" v-show="isShowCaret(menu)"></b>
        </a>
        <ul class="dropdown-menu" v-bind:class="{'show-menu': isShowChild(menu)}"><!--第二层菜单-->
          <li class="{{parentIds[m.id] ? 'dropdown-submenu':''}}" v-for="m in childMenus|filterBy menu.id in 'parentId'">
            <a href="#" tabindex="-1" data-toggle="dropdown" v-link="{path: m.url }" @click="resetMenu()">{{m.menuName}}</a>
            <child :child-menus="childMenus" :parent-ids="parentIds" :parent-menu="m" :active-parent-menu.sync="activeParentMenu"></child>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('child', {
  props: {
    parentMenu: Object,
    parentIds: Object,
    childMenus: Array,
    activeParentMenu: {
      type: Number,
      twoWay: true
    }
  },
  methods: {
    resetMenu: function () {
      this.activeParentMenu = 0
    }
  },
  name: 'child',
  template: '<ul class="dropdown-menu">' +
              '<li class="{{parentIds[m.id]==1 ? \'dropdown-submenu\':\'\'}}" v-for="m in childMenus|filterBy parentMenu.id in \'parentId\'">' +
                '<a href="#" tabindex="-1" data-toggle="dropdown" v-link="{path: m.url }" @click="resetMenu()">{{m.menuName}}</a>' +
                '<child :child-menus="childMenus" :parent-ids="parentIds" :parent-menu="m" :active-parent-menu.sync="activeParentMenu"></child>' +
              '</li></ul>'
})

export default {
  data () {
    return {
      topMenus: [],
      childMenus: [],
      parentIds: {},
      activeParentMenu: 0
    }
  },
  props: {
    menus: Array
  },
  methods: {
    show: function (menuId) {
      this.activeParentMenu = menuId
    },
    isShowCaret: function (menu) {
      return menu.url === '' && this.parentIds[menu.id]
    },
    isShowChild: function (menu) {
      return (menu.id === this.activeParentMenu) && menu.url === '' && this.parentIds[menu.id]
    },
    resetMenu: function () {
      this.activeParentMenu = 0
    }
  },
  watch: {
    menus: function (oldValue, newValue) {
      console.log(oldValue, newValue)
      console.log('created', this.menus)

      var topMenus = []
      var childMenus = []
      var parentIds = {}

      for (var i = 0; i < this.menus.length; i++) {
        var menu = this.menus[i]
        if (!parentIds[menu.parentId]) {
          parentIds[menu.parentId] = 1
        }

        if (menu.parentId === -1) {
          topMenus.push(menu)
        } else {
          childMenus.push(menu)
        }
      }

      this.$set('topMenus', topMenus)
      this.$set('childMenus', childMenus)
      this.$set('parentIds', parentIds)
    }
  }
}
</script>