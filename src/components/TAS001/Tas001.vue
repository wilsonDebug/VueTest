<template>
  <div class="container">
    <fieldset>
      <legend>Traffic Accident</legend>
      <div class="form-group">
        <div class="col-md-3">
          <label class="col-md-5">Tpt Ref No</label>
          <div class="col-md-7">
            <input class="form-control"></input>
          </div>
        </div>

        <div class="col-md-3">
          <label class="col-md-5">Formation</label>
          <div class="col-md-7">
            <input class="form-control"></input>
          </div>
        </div>

        <div class="col-md-3">
          <label class="col-md-6">Report Number</label>
          <div class="col-md-6">
            <input class="form-control"></input>
          </div>
        </div>

        <div class="col-md-3">
          <label class="col-md-7">Last Updated by TOMS on</label>
          <div class="col-md-5">
            <input class="form-control"></input>
          </div>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <tabs>
        <tab header="Accident">
          <div class="form-group">
            <accident></accident>
          </div>
        </tab>
        <tab header="Environment">
          <div class="form-group">
            <environment></environment>
          </div>
        </tab>
        <tab header="Driver">
          <div class="form-group">
            <driver></driver>
          </div>
        </tab>
      </tabs>
    </fieldset>
  </div>
</template>

<script>
import tabs from 'vue-strap/src/Tabset.vue'
import tab from 'vue-strap/src/Tab.vue'

import accident from '../TAS001/Accident'
import environment from '../TAS001/Environment'
import driver from '../TAS001/Driver'

export default {
  components: {
    tabs,
    tab,
    accident,
    environment,
    driver
  },
  data () {
    return {

    }
  }
}
</script>