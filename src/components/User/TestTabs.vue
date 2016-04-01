<template>
  <div class="container">
    <fieldset>
      <legend>Tabs</legend>
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
  </div>
</template>

<script>
import tabs from 'vue-strap/src/Tabset.vue'
import tab from 'vue-strap/src/Tab.vue'

export default {
  components: {
    tabs,
    tab
  },
  data () {
    return {

    }
  }
}
</script>