<template>
  <div class="apexchart-donut"
    :class="{'customDonutStyles': customStyles}"
  >
    <apexchart
      type="donut"
      :height="690"
      :options="chartOptions"
      :series="series"
    >
    </apexchart>
  </div>
</template>

<script>
export default {
  name: "ChartDonut",
  props:{
    seriesProp: Array,
    template:{
      default: 'default',
      type: String
    },
    customStyles:{
      default: false,
      type: Boolean
    }
  },
  data(){
    return {
      // data for templates
      labelsArray : [],
      countArray:[],
      // Stock options not used
      chartOptions: {
        legend: {
          position: 'right',
          markers: {
            width: 20,
            height: 20,
            radius: 0,
            offsetY: 5,
          },
          offsetX: 100,
          offsetY: 200,
          itemMargin: {
            horizontal: 0,
            vertical: 8,
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          colors: undefined,    
        },
        labels:['Apples', 'Oranges', 'Berries', 'Grapes'],
        colors: ['#02E5DD', '#01A39D', '#017A76', '#018F89', '#01524F', '#016662','#002927','#003D3B','#00BFB8'],
      },
    };
  },
  methods:{
    // templates
    createChart(){
      // Массив для категорий
      for (let i = 0; i < this.seriesProp.length; i++) {
        let item = this.seriesProp[i].name;
        this.labelsArray.push(item);
      }
      for (let i = 0; i < this.seriesProp.length; i++) {
        let item = this.seriesProp[i].count;
        this.countArray.push(item);
      }
      this.chartOptions = {
        legend: {
          position: 'right',
          markers: {
            width: 20,
            height: 20,
            radius: 0,
            offsetY: 5,
          },
          offsetX: 100,
          offsetY: 200,
          itemMargin: {
            horizontal: 0,
            vertical: 8,
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          colors: undefined,    
        },
        labels: this.labelsArray,
        colors: ['#02E5DD', '#01A39D', '#017A76', '#018F89', '#01524F', '#016662','#002927','#003D3B','#00BFB8'],
        noData: {
          text: 'Загрузка...'
        },
        tooltip: {
          theme: "dark",
          fillSeriesColor: false
        },
        responsive: [
          {
            breakpoint: 1130,
            options: {
              legend: {
                offsetX: 0,
                offsetY: 100,
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              legend: {
                position: 'bottom',
                offsetX: 0,
                offsetY: 0,
                markers: {
                  offsetY: 0,
                },
                itemMargin: {
                  horizontal: 24,
                  vertical: 0,
                },
              },
            },
          },
          {
            breakpoint: 475,
            options: {
              legend: {
                horizontalAlign: 'left',
                markers: {
                  offsetY: 6,
                },
                itemMargin: {
                  horizontal: 8,
                  vertical: 4,
                },
              },
            },
          }
        ]
      }
      this.series = this.countArray;
    },
    createStockChart(){
      // Массив для категорий
      for (let i = 0; i < this.seriesProp.length; i++) {
        let item = this.seriesProp[i].name;
        this.labelsArray.push(item);
      }
      for (let i = 0; i < this.seriesProp.length; i++) {
        let item = this.seriesProp[i].count;
        this.countArray.push(item);
      }
      this.chartOptions = {
        dataLabels: {
          enabled: true
        },
        stroke: {
          show: true,
          colors: undefined,    
        },
        labels: this.labelsArray,
        noData: {
          text: 'Загрузка...'
        },
        tooltip: {
          theme: "dark",
          fillSeriesColor: false
        },
        legend: {
          position: 'bottom',
        },
      }
      this.series = this.countArray;
    },
  },
  created(){
    // выбор шаблона
    // ex. monitoring-work-mpk.vue
    if(this.template == 'default'){
      this.createChart();
    }
    else if(this.template == 'stock'){
      this.createStockChart();
    }
  },
};
</script>

<style lang="scss">
.customDonutStyles{
  .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,
  .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{
    width: 20%;
  }
}
@media(max-width: 425px){
  .customDonutStyles{
    .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,
    .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{
      width: 45%;
    }
  }
}
@media(max-width: 375px){
  .customDonutStyles{
    .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,
    .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{
      width: 100%;
    }
  }
}
</style>
