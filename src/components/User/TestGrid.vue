<template>
  <div class="container">
     <div>现在使用json-server的模拟数据，模拟后端api.</div>
    {{criteria}}
    <filter-pane :title="filter.title" :fields.sync="filter.fields" :order-by.sync="orderBy" :order.sync="order" v-on:search="search"></filter-pane>
    <grid :data="gridData" :columns="gridColumns"></grid>
    <pagination :page.sync="page" :page-size.sync="pageSize" :records="records"></pagination>
  </div>
</template>

<script>
import Vue from 'vue'
import grid from '../Common/Grid'
import filterPane from '../Common/filterPane'
import pagination from '../Common/Pagination'

require('bootstrap/dist/css/bootstrap.css')

Vue.use(require('vue-resource'))
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true

export default {
  components: {
    filterPane,
    grid,
    pagination
  },
  data () {
    return {
      criteria: '',
      filter: {
        title: 'TestGrid filterPane',
        fields: [
          {name: 'id', title: 'Id', type: 'number'},
          {name: 'parentId', title: 'Parent Id', type: 'number'},
          {name: 'menuName', title: 'Menu Name', type: 'text'}
        ]
      },
      gridColumns: ['id', 'parentId', 'menuName', 'url'],
      gridData: [],
      orderBy: '',
      order: '',
      page: 1,
      pageSize: 10,
      records: 100
    }
  },
  methods: {
    search: function (filters) {
      this.criteria = filters
      this.$http({url: '/api/users?' + this.criteria + '_start=0&_limit=' + this.pageSize, method: 'GET'})
      .then(function (response) {
        var count = response.headers('X-Total-Count')
        var menus = response.data
        this.gridData = menus
        this.records = parseInt(count)
      }, function (response) {
          // error callback
      })
    }
  },
  ready () {
    this.$http({url: '/api/menus?_start=0&_limit=' + this.pageSize, method: 'GET'})
    .then(function (response) {
      var count = response.headers('X-Total-Count')
      var menus = response.data
      this.gridData = menus
      this.records = parseInt(count)
    }, function (response) {
        // error callback
    })
  },
  watch: {
    page: function (oldValue, newValue) {
      console.log('arguments:', oldValue, newValue)

      this.$http({url: '/api/menus?' + this.criteria + '&_limit=' + this.pageSize + '&_start=' + (this.page - 1) * this.pageSize, method: 'GET'})
      .then(function (response) {
        var count = response.headers('X-Total-Count')
        var menus = response.data
        this.gridData = menus
        this.records = parseInt(count)
      },
      function (response) {
          // error callback
      })
    }
  }
}
</script>