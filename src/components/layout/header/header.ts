import Vue from 'vue'
import DownloadForm from '@/components/form/download-data/download-data.vue'

export default Vue.extend({
  name: 'Header',

  components: {
    'download-form': DownloadForm
  },

  data () {
    return {
      drawer: false,
      dialog: false,
      buttons: [
        { title: 'Download', link: '/', icon: 'mdi mdi-cloud-download' },
        { title: 'Contacts', link: '/contacts', icon: 'mdi mdi-account-supervisor' }
      ]
    }
  } // end data()

})
