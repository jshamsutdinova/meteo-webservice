import Vue from 'vue'
import ChartData from '@/components/card/chart-data/chart-data.vue'
import CurrentWeather from '@/components/card/current-weather/current-weather.vue'
import WeatherData from '@/components/card/weather-data/weather-data.vue'
import Notification from '@/components/card/notification/notification.vue'

export default Vue.extend({
  name: 'Dashboard',

  components: {
    'current-weather': CurrentWeather,
    'weather-data': WeatherData,
    'chart-data': ChartData,
    'hiden-notification': Notification
  },

  data: () => ({
    dailyRecords: [
      { name: '22 Jul 12:00', temp: 18, pres: 755, hmd: 24 },
      { name: '22 Jul 15:00', temp: 16, pres: 755, hmd: 30 },
      { name: '22 Jul 18:00', temp: 18, pres: 755, hmd: 32 },
      { name: '22 Jul 21:00', temp: 21, pres: 752, hmd: 35 },
      { name: '23 Jul 00:00', temp: 25, pres: 752, hmd: 32 },
      { name: '23 Jul 03:00', temp: 29, pres: 755, hmd: 40 },
      { name: '23 Jul 06:00', temp: 25, pres: 755, hmd: 37 },
      { name: '23 Jul 09:00', temp: 21, pres: 755, hmd: 50 },
      { name: '23 Jul 12:00', temp: 19, pres: 755, hmd: 48 }
    ],
    weeklyRecords: [
      { name: '16 Jul', temp: '15.4 | 25.5', pres: 752, hmd: 32 },
      { name: '17 Jul', temp: '17.5 | 25.5', pres: 752, hmd: 32 },
      { name: '18 Jul', temp: '16.3 | 27.0', pres: 752, hmd: 32 },
      { name: '19 Jul', temp: '15.6 | 25.5', pres: 752, hmd: 32 },
      { name: '20 Jul', temp: '21.6 | 27.3', pres: 752, hmd: 32 },
      { name: '21 Jul', temp: '19.4 | 26.1', pres: 752, hmd: 32 },
      { name: '22 Jul', temp: '20.1 | 28.1', pres: 752, hmd: 32 }
    ]
  }) // end data

})
