import Vue from 'vue'
import Header from '@/components/layout/header/header.vue'
import Footer from '@/components/layout/footer/footer.vue'

export default Vue.extend({
  name: 'App',

  components: {
    'app-header': Header,
    'app-footer': Footer
  }
})
