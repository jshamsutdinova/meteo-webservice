import { Line } from 'vue-chartjs'

export default {
  name: 'ChartData',

  extends: Line,
  data: () => ({
    activeDay: 'daily',
    activeParameter: 'temperature',
    buttons: {
      days: [
        {
          id: 1,
          title: 'daily'
        },
        {
          id: 2,
          title: 'weekly'
        },
        {
          id: 3,
          title: 'monthly'
        }
      ],
      parameters: [
        { id: 1, title: 'temperature' },
        { id: 2, title: 'pressure' },
        { id: 3, title: 'humidity' }
      ]
    },
    chartdata: {
      labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
      datasets: [
        {
          label: 'Temperature',
          hoverBackgroundColor: '#fff952',
          borderColor: '#4966a5',
          borderWidth: '4',
          fill: true,
          data: [17, 16, 18, 21, 24, 27, 25, 21, 18]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }),
  methods: {
    filterBy: function () {
      switch (this.activeDay || this.activeParameter) {
        case ('weekly' || 'temperature'):
          this.chartdata = {
            labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
            datasets: [
              {
                label: 'Weekly temperature',
                hoverBackgroundColor: '#fff952',
                borderColor: '#4966a5',
                borderWidth: '4',
                fill: true,
                data: [17, 16, 18, 21, 24, 27, 25, 21, 18]
              }
            ]
          }
          break
        case ('monthly' || 'temperature'):
          this.chartdata = {
            labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
            datasets: [
              {
                label: 'Monthly temperature',
                hoverBackgroundColor: '#fff952',
                borderColor: '#4966a5',
                borderWidth: '4',
                fill: true,
                data: [17, 16, 18, 21, 24, 27, 25, 21, 18]
              }
            ]
          }
          break
        case ('daily' || 'temperature'):
          this.chartdata = {
            labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
            datasets: [
              {
                label: 'Daily temperature',
                hoverBackgroundColor: '#fff952',
                borderColor: '#4966a5',
                borderWidth: '4',
                fill: true,
                data: [17, 16, 18, 21, 24, 27, 25, 21, 18]
              }
            ]
          }
          break
      }
      this.renderChart(this.chartdata, this.options)
    },
    setPeriod: function (period) {
      this.activeDay = period
      this.filterBy()
    },

    setParameter: function (value) {
      this.activeParameter = value
      this.filterBy()
    }
  }, // end methods

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
