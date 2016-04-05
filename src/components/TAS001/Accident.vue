<template>
  <div class="container">
    <div class="form-group box">
      <fieldset>
        <legend>As recorded in TOMS</legend>
        <div class="form-group">
          <div class="col-md-4">
            <label class="control-label col-md-6">Accident Date/Time</label>
            <div class="col-md-6">
              <div class="col-md-7">
                <input class="form-control" type="text"></input>
              </div>
              <div class="col-md-5">
                <input class="form-control" type="text"></input>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <label class="control-label col-md-6">Accident Type</label>
            <div class="col-md-6">
              <input name="accidentType" type="radio">TAPI</input>
              <input name="accidentType" type="radio">TADO</input>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {

    }
  }
}
</script>