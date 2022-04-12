<template>
  <div>
    <apexchart
        height="350"
        :options="chartOptions"
        :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  name: 'app-chart',
  props: {
    series: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      chartOptions: {
        labels: ['Июл 2020', 'Сен 2020', 'Ноя 2020', 'Янв 2021'],
        chart: {
          type: 'bar',
        },
        colors: ['#0093BA'],
        plotOptions: {
          bar: {
            columnWidth: '70%',
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0
        },
        xaxis: {
          categories: ['Июль 2020','', 'Сен 2020','', 'Ноя 2020','', 'Янв 2021','','Май 2021','', 'Июль 2021',''],
        },
        yaxis: {
          labels: {
            style: {
              colors: ['#C4C4C4']
            },
            formatter: function (y) {
              if (y > 999999999) {
                return (y / 1000000000).toFixed(1) + " млрд";
              } else if (y > 999999) {
                return (y / 1000000).toFixed(1) + " млн";
              } else if (y > 999) {
                return (y / 1000).toFixed(1) + " тыс";
              } else {
                return y
              }
            }
          }
        },
        tooltip: {
          enabled: false
        }
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.chartBar {
  width: 700px;
  height: 300px;
  @media (max-width: 768px) {
    width: auto;
  }

}
</style>