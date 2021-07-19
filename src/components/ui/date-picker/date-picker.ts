import Vue from 'vue'

export default Vue.extend({
  name: 'DatePicker',

  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  }), // end data

  props: {
    nameLabel: String
  } // end props

})
