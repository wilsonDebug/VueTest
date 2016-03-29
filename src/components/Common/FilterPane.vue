<style type="text/css">
.btn-filter {
  width: 140px !important;
}
</style>
<template>
<div class="form-horizontal">
  <fieldset>
    <legend>
      {{title}} &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#" @click="showFilter()">{{filterTitle}}<b class="caret" v-show="!isShowFilter"></b></a></legend>
    <div class="form-group" v-show="isShowFilter">
      <div class="col-md-8">
        <div class="form-group" v-for="field in fields">
          <label class="control-label text-left col-md-4" for="{{field.name}}">
            {{field.title}}
          </label>
          <div class="col-md-8">
            <input name="{{field.name}}" v-model="field.value" class="form-control" type="{{field.type}}" @keyup.enter="search()"/>
          </div>
        </div>

        <hr/>
        <div class="form-group">
          <label class="control-label text-left col-md-4">
            Order By:
          </label>
          <div class="col-md-8 form-inline">
            <select class="form-control" v-model="orderBy">
              <option value="{{field.name}}" v-for="field in fields">{{field.name}}</option>
            </select>
            <input type="radio" name="order" v-model="order" value="ASC" /> <label>Asc</label>
            <input type="radio" name="order" v-model="order" value="DESC" /> <label>Desc</label>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <slot name="one">
          <div class="form-group">
            <button class="btn btn-primary btn-filter" @click="search()">Search</button>
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
export default {
  props: {
    title: String,
    fields: Array,
    orderBy: String,
    order: String,
    url: String
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
    search: function () {
      console.log('search')

      var arrFilters = []
      for (var it in this.fields) {
        var field = this.fields[it]
        if (field.value) {
          arrFilters.push(field.name + '_like=' + field.value)
        }
      }

      // var start = (page - 1) * this.pageSize
      // arrFilters.push('_start=' + start)
      // arrFilters.push('_limit=' + this.pageSize)
      arrFilters.push('_sort=' + this.orderBy)
      arrFilters.push('_order=' + this.order)

      var strFilters = arrFilters.join('&')

      this.$dispatch('search', strFilters)
      console.log('dispatch filters:', strFilters)
    },
    reset: function () {
      console.log('reset')
      for (var it in this.fields) {
        this.fields[it].value = ''
      }
    }
  },
  created: function () {

  }
}
</script>