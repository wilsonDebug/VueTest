<style type="text/css">
  .edit-grid {
    max-height:500px;
    overflow:auto;
  }
</style>
<template>
<!-- grid list begin-->
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
    <!-- <button class="btn btn-primary" @click="add">Add</button> -->
    <button class="btn btn-primary" @click="edit" >Edit</button>
    <button class="btn btn-default" @click="delete" >Delete</button>
  </div>
</div>
<!-- grid list end -->
<!-- grid edit begin -->
<modal :show.sync="showEditModal" effect="fade" width="90%">
  <div slot="modal-header" class="modal-header">
    <h4 class="modal-title">Edit Selected Records</h4>
  </div>
  <div slot="modal-body" class="modal-body edit-grid">
    <table class="table table-hover">
      <thead>
        <tr>
          <th v-for="key in columns">{{key.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in gridData|filterBy true in 'isChecked'">
           <td v-for="key in columns">
            <field :value.sync="entry[key.name]" :type="key.type" :options="key.options"></field>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click='showEditModal = false'>Cancel</button>
    <button type="button" class="btn btn-success" @click='save'>Save</button>
  </div>
</modal>
<!-- grid edit end -->
</template>

<script>
import Vue from 'vue'
import field from '../Common/Field'
import { alert, modal, datepicker } from 'vue-strap'
export default {
  components: {
    field,
    alert,
    modal,
    datepicker
  },
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
      showEditModal: false,
      sortOrders: {}
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
    },
    edit: function () {
      console.log('edit')
      this.showEditModal = true
    },
    delete: function () {
      console.log('delete')
    },
    add: function () {
      console.log('edit')
    },
    save: function () {
      console.log('save')
    }
  }
}
</script>