<template>
  <div class="apexchart-lines"
    :class="{'customLineStyles': customStyles}"
  >
    <apexchart
      type="line"
      :height="700"
      :options="chartOptions"
      :series="series"
    >
    </apexchart>
  </div>
</template>

<script>
export default {
  name: "ChartLines",
  props:{
    seriesProp: Array,
    years: Array,
    template:{
      default: 'default',
      type: String
    }
  },
  data(){
    return {
    };
  },
  methods:{
    // templates
    createChart(){
      this.chartOptions = {
        chart: {
          height: 350,
          type: 'line',
          toolbar: { 
            show: false
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight'
        },
        xaxis: {
          // categories: this.years,
          categories: [
            'Январь', 'Февраль', 'Март', 'Апрель', 
            'Май', 'Июнь', 'Июль','Август',
            'Сентябрь', 'Октябрь','Ноябрь','Декабрь'
          ],
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'left',
          offsetY: 10
        },
      }
      this.series = this.seriesProp;
    },
  },
  created(){
    this.createChart();
  },
};
</script>

<style lang="scss">
</style>
