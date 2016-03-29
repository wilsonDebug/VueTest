<template>
<div class="container">
  <table class="table table-hover">
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key.name)"
          :class="{active: sortKey === key.name}">
          <a href="#">{{key.name | capitalize}}
            <span class="caret" v-show="sortOrders[key.name] < 0"></span>
          </a>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in data">
        <td v-for="key in columns">
          {{entry[key.name]}}
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
    columns: Array,
    sortKey: String,
    order: String
  },
  data () {
    return {
      sortOrders: {}
    }
  },
  methods: {
    sortBy: function (key) {
      console.log('click sortBy:', key)
      this.sortKey = key

      var self = this

      var newSort = this.sortOrders[key] ? (this.sortOrders[key] * -1) : -1
      var orders = {}
      this.columns.forEach(function (k) {
        var keyName = k.name

        console.log(k.name === key)
        if (keyName === key) {
          self.order = (newSort < 0 ? 'ASC' : 'DESC')
          orders[keyName] = newSort
        } else {
          orders[keyName] = 1
        }
      })
      this.$set('sortOrders', orders)
    }
  }
}
</script>