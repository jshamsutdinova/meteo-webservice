import Vue from 'vue'

export default Vue.extend({
  name: 'Contacts',

  data () {
    return {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now())
    }
  },

  methods: {
    onChange: function (data: Date) {
      console.log('data: ', data)
    }
  }
})
