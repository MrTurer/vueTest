<template>
  <div>
    <apexchart
        height="580"
        :options="chartOptions"
        :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  name: 'app-chart-round',
  props: {
    series: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          width: '100%',
          type: 'pie',
        },
        labels: ['Франция', 'Великобритания', 'Испания', 'Сербия', 'Германия','Италия'],
        colors: ['#99CEFF', '#00B2FF', '#309CFF', '#0081F9', '#0672D6','#00386C'],
        stroke: {
          width: 0
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          markers: {
            width: 20,
            height: 20,
            radius: 0,
          },
          itemMargin: {
            horizontal: 12,
            vertical: 12
          },
        },
        dataLabels: {
          distributed: false,
          // formatter: (value, { seriesIndex, w }) => {
          //   return w.config.series[seriesIndex];
          // },
          style: {
            fontSize: '12px',
            fontFamily: '"Fira Sans", sans-serif',
            fontWeight: '400',
            colors: ['#231F20']
          },
          dropShadow: {
            enabled: false
          }
        },
        plotOptions: {
          pie: {
            customScale: 0.8,
            dataLabels: {
              offset: 70,
              minAngleToShowLabel: 0
            }
          }
        },
        states: {
          hover: {
            filter: {
              type: 'none',
            }
          },
          active: {
            filter: {
              type: 'none',
            }
          },
        },
        tooltip: {
          custom: function({series, seriesIndex}) {
            return `<div class="circle-chart__prompt">
                    <span>Доля рынка</span>
                    <p>${series[seriesIndex]} млн. долл. США</p>
                    </div>`
          },
        }
      },
    };
  },
};
</script>
<style lang="sass" scoped>
.chartBar
  width: 700px
  height: 300px
  @media (max-width: 768px)
    width: auto

</style>