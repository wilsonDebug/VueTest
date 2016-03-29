<style type="text/css">
.btn-filter {
  width: 140px !important;
}
</style>
<template>
<div class="form-horizontal">
  <fieldset>
    <legend>
      {{filters.title}} &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="#" @click="showFilter()">{{filterTitle}}<b class="caret" v-show="!isShowFilter"></b></a></legend>
    <div class="form-group" v-show="isShowFilter">
      <div class="col-md-8">
        <div class="form-group" v-for="field in filters.fields">
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
    filters: Object,
    sortFields: Array,
    sortKey: String,
    order: String
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
      this.$dispatch('search', true)
    },
    reset: function () {
      console.log('reset')
      for (var it in this.fields) {
        this.fields[it].value = ''
      }
    }
  }
}
</script>