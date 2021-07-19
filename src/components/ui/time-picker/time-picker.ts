import Vue from 'vue'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

export default Vue.extend({
  name: 'TimePicker',

  components: {
    VueTimepicker
  }, // end components

  props: {
    timePeriod: String
  } // end props
})
