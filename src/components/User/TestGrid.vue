<template>
  <div class="container">
    <grid-base url="/api/menus" :filter="filter" :grid-columns="gridColumns" sort-key="id" order="ASC" ></grid-base>
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
        { name: 'id', title: 'Id' },
        { name: 'parentId', title: 'Parent Id' },
        { name: 'menuName', title: 'Menu Name' },
        { name: 'url', title: 'Url' }
      ]
    }
  }
}
</script>