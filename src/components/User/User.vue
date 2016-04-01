<template>
  <div class="container">
    <grid-base url="/api/users" :filters="filters" :grid-columns="gridColumns" :is-show-action="true" sort-key="name" order="ASC" :page-size-list="pageSizeList"></grid-base>
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
          {name: 'sex', title: 'Sex', type: 'select', options: ['M', 'F']},
          {name: 'email', title: 'Email', type: 'text'}
        ]
      },
      gridColumns: [
        {name: 'name', title: 'Name', type: 'text'},
        {name: 'sex', title: 'Sex', type: 'select', options: ['M', 'F']},
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
  }
}

</script>