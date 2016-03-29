<template>
  <div class="container">
    <div>现在使用json-server的模拟数据，模拟后端api.</div>
    {{queryUrl}}|page:{{page}}
    <filter-pane :filters="filters" :sort-fields.sync="gridColumns" :sort-key.sync="sortKey" :order.sync="order" v-on:search="search"></filter-pane>
    <grid :data="gridData" :columns="gridColumns" :sort-key.sync="sortKey" :order.sync="order"></grid>
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
  props: {
    url: {
      type: String,
      default: function () {
        return '/api/users'
      }
    },
    filters: Object,
    gridColumns: Array,
    sortKey: String,
    order: String,
    page: {
      type: Number,
      default: function () {
        return 1
      }
    },
    pageSize: {
      type: Number,
      default: function () {
        return 10
      }
    }
  },
  data () {
    return {
      queryUrl: '',
      gridData: [],
      records: 0
    }
  },
  methods: {
    getQueryUrl: function (isStart) {
      if (isStart) {
        this.page = 1
      }

      var arrFilters = []
      for (var it in this.fields) {
        var field = this.fields[it]
        if (field.value) {
          arrFilters.push(field.name + '_like=' + field.value)
        }
      }

      var start = (this.page - 1) * this.pageSize
      arrFilters.push('_start=' + start)
      arrFilters.push('_limit=' + this.pageSize)
      arrFilters.push('_sort=' + this.sortKey)
      arrFilters.push('_order=' + this.order)

      return this.url + '?' + arrFilters.join('&')
    },
    search: function (isStart) {
      console.log('parent search isStart:', isStart)
      this.queryUrl = this.getQueryUrl(isStart)

      console.log('search queryUrl:', this.queryUrl)

      this.$http({url: this.queryUrl, method: 'GET'})
      .then(function (response) {
        console.log('search response:', response)
        var count = response.headers('X-Total-Count')
        var user = response.data
        this.gridData = user
        this.records = parseInt(count)
      }, function (response) {
          // error callback
      })
    }
  },
  ready: function () {
    this.search(true)
  },
  watch: {
    page: function (oldValue, newValue) {
      console.log('arguments:', oldValue, newValue)
      this.search()
    },
    sortKey: function (oldValue, newValue) {
      console.log('arguments:', oldValue, newValue)
      this.search()
    },
    order: function (oldValue, newValue) {
      console.log('arguments:', oldValue, newValue)
      this.search()
    }
  }
}

</script>