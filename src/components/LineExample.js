import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14'],
      datasets: [
        {
          label: 'USD',
          backgroundColor: '#FFA500',
          data: [63, 72.6, 50, 54, 43, 50, 54, 54, 32, 43, 70, 71.6, 50, 50]
        },
		{
			label: 'ETH',
			backgroundColor: '#6495ED',
			data: [200, 200, 210, 220, 230, 235, 500, 600, 700, 1400, 1600, 1200, 500, 600]
		},
		{
			label: 'BTS',
			backgroundColor: '#B22222',
			data: [41000, 41290, 41390, 42000, 42500, 45800, 46200, 48234,49203, 50000, 52389, 53875, 54032, 56650]
		}
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}