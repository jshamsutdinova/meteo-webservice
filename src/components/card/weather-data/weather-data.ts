import Vue from 'vue'

export default Vue.extend({
  name: 'WeatherData',

  props: {
    title: String,
    data: Array,
    period: String
  },

  data: function () {
    return {
      format: this.period,
      records: this.data,
      cellsDaily: [
        { elKey: 1, prop: 'name', fullTitle: 'Time', shortTitle: 'Time', unit: '', class: 'time-cell-daily' },
        { elKey: 2, prop: 'temp', fullTitle: 'Temperature', shortTitle: 'Temp', unit: '°C', class: 'temp-cell-daily' },
        { elKey: 3, prop: 'pres', fullTitle: 'Pressure', shortTitle: 'PRES', unit: 'mmHg', class: 'pres-cell-daily' },
        { elKey: 4, prop: 'hmd', fullTitle: 'Humidity', shortTitle: 'HMD', unit: '%', class: 'hmd-cell-daily' }
      ],
      cellsWeekly: [
        { elKey: 1, prop: 'name', fullTitle: 'Date', shortTitle: 'Date', unit: '', class: 'time-cell-weekly' },
        { elKey: 2, prop: 'temp', fullTitle: 'Temperature', shortTitle: 'Temp', unit: 'Day | Night', class: 'temp-cell-weekly' },
        { elKey: 3, prop: 'pres', fullTitle: 'Pressure', shortTitle: 'PRES', unit: 'mmHg', class: 'pres-cell-weekly' },
        { elKey: 4, prop: 'hmd', fullTitle: 'Humidity', shortTitle: 'HMD', unit: '%', class: 'hmd-cell-weekly' }
      ]
    }
  }, // end data

  computed: {
    changeData (): object {
      if (this.period === 'Daily') {
        return this.cellsDaily
      } else {
        return this.cellsWeekly
      }
    }
  } // end computed
})
