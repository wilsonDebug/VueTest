<style type="text/css">

ul,li{
    margin: 0px;
    padding: 0px;
}
.page-bar li{
    list-style: none;
    display: inline
}
.page-bar li:first-child>a {
   margin-left: 0px
}
.page-bar a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
}
.page-bar a:hover{
    background-color: #eee;
}
.page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
.page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
}
</style>
<template>
<div class="container">
  <div class="page-bar">
    <ul>
      <li v-if="showFirst"><a @click="page=1">First</a></li>
      <li v-if="showFirst"><a @click="page--"><</a></li>
      <li v-for="index in indexs"  v-bind:class="{ 'active': page === index}">
       <a @click="btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="showLast"><a @click="page++">></a></li>
      <li v-if="showLast"><a @click="page=all">Last</a></li>
      <li><a>{{page}} /{{all}} pages ({{records}} records)</a> </li>

    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    records: Number,
    page: Number,
    pageSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    all: function () {
      return Math.ceil(this.records / this.pageSize)
    },
    indexs: function () {
      var left = 1
      var right = this.all
      var ar = []
      if (this.all >= 11) {
        if (this.page > 5 && this.page < this.all - 4) {
          left = this.page - 5
          right = this.page + 4
        } else {
          if (this.page <= 5) {
            left = 1
            right = 10
          } else {
            right = this.all
            left = this.all - 9
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    },
    showLast: function () {
      if (this.page === this.all) {
        return false
      }
      return true
    },
    showFirst: function () {
      if (this.page === 1) {
        return false
      }
      return true
    }
  },
  methods: {
    btnClick: function (data) {
      if (data !== this.page) {
        this.page = data
      }
    }
  }
}
</script>