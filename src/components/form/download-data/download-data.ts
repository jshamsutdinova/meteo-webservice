import Vue from 'vue'
import DatePicker from '@/components/ui/date-picker/date-picker.vue'
import TimePicker from '@/components/ui/time-picker/time-picker.vue'

export default Vue.extend({
  name: 'DownloadForm',

  components: {
    'date-picker': DatePicker,
    'time-picker': TimePicker
  },

  data () {
    return {
      checkbox: false,
      isDialogVisible: true
    }
  }, // end data

  methods: {
    closeDialog () {
      console.log('close')
    }
  }
})
