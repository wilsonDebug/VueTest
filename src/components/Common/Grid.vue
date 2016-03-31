<template>
<div class="container">
  <table class="table table-hover">
    <thead>
      <tr>
        <th><input type="checkbox" value="true" v-model="isSelectedAll" />&nbsp;</th>
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
      <tr v-for="entry in gridData">
        <td><input type="checkbox" true-value="true" false-value="false" v-model="entry.isChecked" /></td>
        <td v-for="key in columns">
          {{entry[key.name]}}
        </td>
      </tr>
    </tbody>
  </table>
  <div class="form-group" v-show="isShowAction">
    <!-- <button class="btn btn-primary" @click="action.add()">Add</button> -->
    <button class="btn btn-primary" @click="action.edit()" >Edit</button>
    <button class="btn btn-default" @click="action.delete()" >Delete</button>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    gridData: Array,
    columns: Array,
    isShowAction: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    // actions 暂时无用！！！！！
    actions: {
      type: Object,
      default: function () {
        return {
          label: 'Action',
          template: ''
        }
      }
    },
    sortKey: String,
    order: String
  },
  data () {
    return {
      sortOrders: {},
      action: {
        edit: function () {
          console.log('edit')
          this.$dispatch('edit', true)
        },
        delete: function () {
          console.log('delete')
          this.$dispatch('edit', true)
        },
        add: function () {
          console.log('edit')
          this.$dispatch('add', true)
        },
        save: function () {
          console.log('save')
        }
      }
    }
  },
  computed: {
    isSelectedAll: {
      get: function () {
        var isCheckAll = true

        for (var i in this.gridData) {
          var item = this.gridData[i]
          if (!item.isChecked) {
            isCheckAll = false
            break
          }
        }
        return isCheckAll
      },
      set: function (newValue) {
        console.log('set newValue:', newValue)

        for (var i in this.gridData) {
          var item = this.gridData[i]
          Vue.set(item, 'isChecked', newValue)
        }
      }
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