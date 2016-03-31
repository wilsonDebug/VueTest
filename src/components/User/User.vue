<template>
  <div class="container">
    <grid-base url="/api/users" :filters="filters" :grid-columns="gridColumns" :is-show-action="true" sort-key="name" order="ASC" :page-size-list="pageSizeList" @edit="edit" @add="add" @delete="delete"></grid-base>
    <grid-edit :grid-columns="gridColumns" :data="selectedRecords" v-show="selectedRecords.length>0"></grid-edit>
  </div>
</template>

<script>
import gridBase from '../Common/GridBase'

export default {
  components: {
    gridBase
  },
  data () {
    return {
      filters: {
        title: 'User filterPane',
        fields: [
          {name: 'name', title: 'Name', type: 'text'},
          {name: 'sex', title: 'Sex', type: 'text'},
          {name: 'email', title: 'Email', type: 'text'}
        ]
      },
      gridColumns: [
        {name: 'name', title: 'Name', type: 'text'},
        {name: 'sex', title: 'Sex', type: 'text'},
        {name: 'email', title: 'Email', type: 'text'}
      ],
      sortKey: '',
      order: '',
      // actions 暂时无用！！！！！
      actions: {
        label: 'Action',
        template: ''
      },
      pageSizeList: [10, 20, 30, 50, 60],
      selectedRecords: []
    }
  },
  methods: {
    edit: function (data) {
      this.selectedRecords = data
    }
  }
}

</script>