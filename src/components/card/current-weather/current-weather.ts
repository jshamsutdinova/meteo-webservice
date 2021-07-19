import Vue from 'vue'
export default Vue.extend({
  name: 'CurrentWeather',

  data () {
    return {
      parameters: [
        { id: '1', icon: 'mdi-weather-windy', value: '755 mmHg' },
        { id: '2', icon: 'mdi-water-percent', value: '57 %' },
        { id: '3', icon: 'mdi-gauge', value: '4 m/s NNW' },
        { id: '4', icon: 'mdi-white-balance-sunny', value: '4' }
      ]
    }
  }
})
