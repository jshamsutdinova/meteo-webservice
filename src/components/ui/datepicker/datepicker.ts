import Vue from 'vue'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

export default Vue.extend({
  name: 'DatetimePicker',

  components: {
    VueTimepicker
  },

  data: () => ({
    dates: []
  }),
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    }
  }

})
