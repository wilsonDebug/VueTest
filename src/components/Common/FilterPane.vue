<style type="text/css">
.btn-filter {
  width: 140px !important;
}
</style>
<template>
<div class="form-horizontal">
  <fieldset>
    <legend>
      {{filtersTitle}} &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#" @click="showFilter()">{{filterTitle}}<b class="caret" v-show="!isShowFilter"></b></a></legend>
    <div class="form-group" v-show="isShowFilter">
      <div class="col-md-8">
        <div class="form-group" v-for="field in filtersFields">
          <label class="control-label text-left col-md-4" for="{{field.name}}">
            {{field.title}}
          </label>
          <div class="col-md-8">
            <field :value.sync="field.value" :type="field.type" :options="field.options" :on-enter="onSearch"></field>
          </div>
        </div>

        <hr/>
        <div class="form-group">
          <label class="control-label text-left col-md-4">
            Order By:
          </label>
          <div class="col-md-8 form-inline">
            <select class="form-control" v-model="sortKey">
              <option value="{{field.name}}" v-for="field in sortFields">{{field.title}}</option>
            </select>
            <input type="radio" name="order" v-model="order" value="ASC" /> <label>Asc</label>
            <input type="radio" name="order" v-model="order" value="DESC" /> <label>Desc</label>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <slot name="one">
          <div class="form-group">
            <button class="btn btn-primary btn-filter" @click="onSearch()">Search</button>
          </div>
          <div class="form-group">
            <button class="btn btn-default  btn-filter" @click="reset()">Reset</button>
          </div>
        </slot>
      </div>
    </div>
    <hr>
  </fieldset>
</div>
</template>

<script>
import field from '../Common/Field'

export default {
  components: {
    field
  },
  props: {
    title: String,
    filtersTitle: String,
    filtersFields: Array,
    sortFields: Array,
    sortKey: String,
    order: String,
    onSearch: {
      type: Function,
      default: function () {

      }
    }
  },
  data () {
    return {
      isShowFilter: true
    }
  },
  computed: {
    filterTitle: function () {
      return (this.isShowFilter ? 'Hide Filter' : 'Show Filter')
    }
  },
  methods: {
    showFilter: function () {
      this.isShowFilter = !this.isShowFilter
    },
    // search: function () {
    //   console.log('search')
    //   this.$dispatch('search', true)
    // },
    reset: function () {
      console.log('reset')
      for (var it in this.fields) {
        this.fields[it].value = ''
      }
    }
  }
}
</script>