<template>
  <div class="container">
    <!-- vueStrap modal -->
    <div class="form-group">
      vue strap demo:
      <a href="http://yuche.github.io/vue-strap/" target="_blank">http://yuche.github.io/vue-strap/</a>
    </div>
    <fieldset>
      <legend>Alert</legend>
      <button class="btn btn-default btn-lg"
        @click="showTop = !showTop">
        Click to toggle alert on top
      </button>
      <button class="btn btn-default btn-lg"
        @click="showRight = !showRight">
        Click to toggle alert on right
      </button>
      <hr>

      <alert
        :show.sync="showRight"
        :duration="3000"
        type="success"
        width="400px"
        placement="top-right"
        dismissable
      >
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>Well Done!</strong>
        <p>You successfully read this important alert message.</p>
      </alert>

      <alert
        :show.sync="showTop"
        :duration="3000"
        type="danger"
        width="400px"
        placement="top"
        dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <strong>Heads up!</strong>
        <p>This alert needs your attention.</p>
      </alert>
    </fieldset>

    <hr/>

    <fieldset>
      <legend>VueStrap Modal Window</legend>
      <button class="btn btn-default" @click="showModal = true">Show modal</button>
      <modal :show.sync="showModal">
        <div slot="modal-header" class="modal-header">
          <h4 class="modal-title">Modal title</h4>
        </div>
        <div slot="modal-body" class="modal-body"></div>
      </modal>
    </fieldset>
    <hr/>
    <fieldset>
      <legend>VueStrap Tabs</legend>
      <tabs>
        <tab header="one">
          <div class="form-group">
            tab one
          </div>
        </tab>
        <tab header="two">
          <div class="form-group">
          tab two
          </div>
        </tab>
        <tab header="three" disabled>
          <div class="form-group">
          tab three
          </div>
        </tab>
      </tabs>
    </fieldset>
    <hr/>
    <fieldset>
      <legend>Datepicker</legend>
      <div class="row">
        <label class="control-label col-md-2">Select Date:</label>
        <div class="col-md-6 form-inline">
          <datepicker
            :value.sync="date"
            :disabled-days-of-Week="disabledWeek"
            placeholder="select date"
            :format="dateFormat">
          </datepicker>
        </div>
      </div>
      <div class="row">
        <label class="control-label col-md-2">disabled date of week</label>
        <div class="col-md-6 form-inline">
          <v-select multiple :value.sync="disabledWeek" size=5>
            <v-option value="0">0</v-option>
            <v-option value="1">1</v-option>
            <v-option value="2">2</v-option>
            <v-option value="3">3</v-option>
            <v-option value="4">4</v-option>
            <v-option value="5">5</v-option>
            <v-option value="6">6</v-option>
          </v-select>
        </div>
          {{disabledWeek}}
      </div>

      <div class="row">
         <label class="control-label col-md-2">Date Format</label>
         <div class="col-md-6 form-inline">
          <v-select  :value.sync="dateFormat">
            <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
            <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
            <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
            <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
            <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
          </v-select>
          {{dateFormat}}
        </div>
    </fieldset>
    <hr>
    <fieldset>
      <legend>Typeahead</legend>
        <h4>Static arrays {{typeaheadValue}}</h4>
        <typeahead
          :data="USstate"
          placeholder="USA states"
          :on-hit="typeaheadCallback"
        >
        </typeahead>
<!--
        <h4>Asynchronous results</h4>
          <typeahead
            key="name"
            placeholder="Users"
            async="/api/users?q={{query}}"
            :on-hit="typeaheadCallback">
        </typeahead> -->
    </fieldset>
    <button
      class="btn btn-success btn-lg"
      @click="showRight = true">Show Aside on right {{showRight}}
    </button>
    <aside :show.sync="showRight" placement="right" header="Title" :width="350">
    sssssssssssssssss
    </aside>

    <button
        class="btn btn-danger btn-lg"
        @click="showLeft = true">Show Aside on left {{showLeft}}
    </button>

    <aside :show.sync="showLeft" placement="left" header="Title" :width="350">
    sdfsdfs
    </aside>
  </div>
</template>

<script>
import tabs from 'vue-strap/src/Tabset.vue'
import tab from 'vue-strap/src/Tab.vue'
import vSelect from 'vue-strap/src/Select.vue'
import vOption from 'vue-strap/src/Option.vue'

import { alert, modal, datepicker, typeahead, tooltip, aside } from 'vue-strap'

var Mock = require('mockjs')
var data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})
console.log('data:', data)
export default {
  components: {
    alert,
    modal,
    datepicker,
    typeahead,
    tooltip,
    tabs,
    tab,
    vSelect,
    vOption,
    aside
  },
  partials: {
  },
  data () {
    return {
      showModal: false,
      date: '2016-03-28',
      disabledWeek: [],
      dateFormat: 'yyyy-MM-dd',
      typeaheadValue: '',
      showLeft: false,
      showTop: false,
      showRight: false,
      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  },
  methods: {
    typeaheadCallback: function (items, targetVM) {
      console.log('items:', items)
      this.typeaheadValue = items
      var that = targetVM
      that.reset()
      that.query = items
    }
  }
}
</script>