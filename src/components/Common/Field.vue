<template>
  <input class="form-control" v-model="value" type="{{type}}" v-if="type == 'text'" @keyup.enter="onEnter"></input>
  <select class="form-control" v-model="value" v-if="type == 'select'" >
    <option v-for="opt in options">{{opt}}</option>
  </select>
  <input class="form-control" v-model="value" type="{{type}}" v-if="type == 'textarea'"></input>
  <input class="form-control" v-model="value" type="{{type}}" v-if="type == 'number'"></input>
  <input class="form-control" v-model="value" type="{{type}}" v-if="type == 'date'"></input>
  <input class="form-control" v-model="value" type="{{type}}" v-if="type == 'checkbox'"></input>
  <input class="form-control" v-model="value" type="{{type}}" v-if="type == 'radio'"></input>
</template>

<script>
export default {
  props: {
    value: String,
    type: {
      type: String,
      required: true,
      validator: function (value) {
        console.log('value:', value)
        return ['text', 'textarea', 'select', 'number', 'date', 'checkbox', 'radio'].indexOf(value) >= 0
      },
      default: function () {
        return 'text'
      }
    },
    options: Array,
    onEnter: {
      type: Function,
      default () {
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>