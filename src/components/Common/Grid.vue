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
        <th v-show="isShowAction">
          {{actions.label}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in data">
        <td v-for="key in columns">
          {{entry[key.name]}}
        </td>
        <td v-show="isShowAction">
          <slot name="actionTemplate">
            <div class="btn-group">
              <button class="btn btn-primary" @click="action.edit()" v-show="!isEditing">Edit</button>
              <button class="btn btn-primary" @click="action.save()" v-show="isEditing">Save</button>
              <button class="btn btn-default" @click="action.delete()" v-show="!isEditing">Delete</button>
            </div>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="form-group" v-show="isShowAction">
    <button class="btn btn-primary" @click="action.add()">Add</button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    data: Array,
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
      isEditing: false,
      action: {
        edit: function () {
          console.log('edit')
          this.isEditing = true
        },
        delete: function () {
          console.log('delete')
        },
        add: function () {
          console.log('edit')
        },
        save: function () {
          console.log('save')
          this.isEditing = false
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