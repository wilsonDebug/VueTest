<template>
<div class="container">
  <table class="table table-hover">
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{active: sortKey == key}">
          <a href="#">{{key | capitalize}}
            <span class="caret" v-show="sortOrders[key] < 0"></span>
          </a>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in data | orderBy sortKey sortOrders[sortKey]">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array
  },
  data () {
    return {
      sortKey: '',
      sortOrders: {}
    }
  },
  methods: {
    sortBy: function (key) {
      console.log('click sortBy:', key)
      this.sortKey = key

      var newSort = this.sortOrders[key] ? (this.sortOrders[key] * -1) : -1
      var orders = {}
      this.columns.forEach(function (k) {
        if (k === key) {
          orders[k] = newSort
        } else {
          orders[k] = 1
        }
      })
      this.$set('sortOrders', orders)
    }
  }
}
</script>