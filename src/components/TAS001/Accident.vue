<style type="text/css">
.nowrap {
  white-spacing: nowrap !important;
}
</style>
<template>
  <div class="container">
    <div class="form-horizontal">
      <fieldset class="box">
        <legend>As recorded in TOMS</legend>
        <div class="row">
          <label class="control-label col-md-2">Accident Date/Time</label>
          <div class="form-group col-md-10">
            <div class="col-md-2">
              <label class="sr-only"></label>
              <input class="form-control" type="date"></input>
            </div>
            <div class="col-md-2">
              <label class="sr-only"></label>
              <input class="form-control" type="time"></input>
            </div>
            <div class="col-md-4">
              <label class="control-label col-md-6">Accident&nbsp;Type</label>
              <div class="col-md-6">
                <label class="checkbox">
                  <input name="accidentType" type="radio"> TAPI</input>
                  <input name="accidentType" type="radio"> TADO</input>
                </label>
              </div>
            </div>
            <div class="col-md-3">
              <label class="control-label col-md-9">Restricted</label>
              <div class="col-md-3">
                <label class="checkbox">
                  <input name="accidentType" type="checkbox"></input>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-md-2">Number of Vehicles</label>
          <div class="col-md-10">
            <input type="text" class="form-control"></input>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-md-2">Police Casualty</label>
          <div class="col-md-6">
            <input type="text" class="form-control"></input>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-md-2">Public Casualty</label>
          <div class="col-md-6">
            <input type="text" class="form-control"></input>
          </div>
        </div>
      </fieldset>
      <fieldset class="box">
        <div class="row">
          <label class="control-label col-md-2">TPT Accident Type</label>
          <div class="form-group col-md-10">

            <div class="col-md-4">
              <div class="checkbox">
                <label>
                  <input type="checkbox">Found&nbsp;Damaged/Windscreen</input>
                </label>
              </div>
            </div>

            <div class="col-md-4">
              <div class="checkbox">
                <label>
                  <input type="checkbox">Miscellaneous
                </label>
              </div>
            </div>

            <div class="col-md-4">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> N/A
                </label>
              </div>
            </div>

          </div>
        </div>

        <div class="row">
          <label class="control-label col-md-2">Accident Fault</label>
          <div class="form-group col-md-10">

            <div class="col-md-3">
              <select class="form-control"></select>
            </div>

            <div class="col-md-4">
              <label class="control-label col-md-6">GF110 Receive</label>
              <div class="col-md-6">
                <label class="checkbox">
                  <input name="accidentType" type="radio"> Yes</input>
                  <input name="accidentType" type="radio"> No</input>
                </label>
              </div>
            </div>

            <div class="col-md-5">
              <label class="control-label col-md-7 nowrap" style="white-spacing: nowrap">GF110 Receive Date</label>
              <div class="col-md-5">
                <input type="text" class="form-control"></input>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-md-2">Summary</label>
          <div class="col-md-10">
            <textarea class="form-control">test</textarea>
          </div>
        </div>

        <div class="row">
          <label class="control-label col-md-2">Reported By</label>
          <div class="form-group col-md-10">

            <div class="col-md-2">
              <input class="form-control"></input>
            </div>

            <div class="col-md-3">
              <label class="control-label col-md-9">Driver</label>
              <div class="col-md-3">
                <label class="checkbox">
                  <input name="accidentType" type="checkbox"></input>
                </label>
              </div>
            </div>

            <div class="col-md-3">
              <label class="control-label col-md-2 nowrap">UI Rank</label>
              <div class="col-md-10">
                <input class="form-control"></input>
              </div>
            </div>

            <div class="col-md-3">
              <label class="control-label col-md-2 nowrap">UI Location</label>
              <div class="col-md-10">
                <input class="form-control"></input>
              </div>
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