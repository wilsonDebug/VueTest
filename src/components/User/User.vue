<template>
  <div class="container">
    <grid-base url="/api/users" :filters="filters" :grid-columns="gridColumns" sort-key="name" order="ASC" ></grid-base>
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
      url: '',
      filters: {
        title: 'User filterPane',
        fields: [
          {name: 'name', title: 'Name', type: 'text'},
          {name: 'sex', title: 'Sex', type: 'text'},
          {name: 'email', title: 'Email', type: 'text'}
        ]
      },
      gridColumns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'email', title: 'Email' }
      ],
      sortKey: '',
      order: ''
    }
  }
}

</script>