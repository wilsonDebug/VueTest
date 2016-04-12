<template>
  <div class="container">棋大模大样
    <grid-base url="/api/menus" :filters="filters" :grid-columns="gridColumns" :is-show-action="false" :actions="actions" sort-key="id" order="ASC" :page-size-list="pageSizeList"></grid-base>
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
        title: 'TestGrid filterPane',
        fields: [
          {name: 'id', title: 'Id', type: 'number'},
          {name: 'parentId', title: 'Parent Id', type: 'number'},
          {name: 'menuName', title: 'Menu Name', type: 'text'}
        ]
      },
      gridColumns: [
        {name: 'id', title: 'Id', type: 'number'},
        {name: 'parentId', title: 'Parent Id', type: 'number'},
        {name: 'menuName', title: 'Menu Name', type: 'text'},
        { name: 'url', title: 'Url', type: 'text' }
      ],
      // actions 暂时无用！！！！！
      actions: {
        label: 'Action',
        template: ''
      },
      pageSizeList: [10, 20, 30, 50]
    }
  }
}
</script>