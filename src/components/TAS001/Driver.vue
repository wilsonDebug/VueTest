<template>
  <div class="container">
    <fieldset>
      <tabs>
        <tab header="subtab1">
          <div class="form-group">
            <accident></accident>
          </div>
        </tab>
        <tab header="subtab2">
          <div class="form-group">
            <environment></environment>
          </div>
        </tab>
        <tab header="subtab3">
          <div class="form-group">
            <driver></driver>
          </div>
        </tab>
        <tab header="subtab4">
          <div class="form-group">
            <driver1></driver1>
          </div>
        </tab>
      </tabs>
    </fieldset>
  </div>
</template>

<script>
import tabs from 'vue-strap/src/Tabset.vue'
import tab from 'vue-strap/src/Tab.vue'
import driver1 from '../TAS001/Driver1'
import accident from '../TAS001/Accident'
import environment from '../TAS001/Environment'
import driver from '../TAS001/Driver'

export default {
  components: {
    tabs,
    tab,
    driver1,
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