<template>
  <img src="" alt="флаг страны">
  <section class="compare">
    <div class="container">
      <p class="home_title">Сравнение импорта и экспорта</p>
      <div class="compare__list">
        <div v-if="circleChartsStatus" class="compare__item">
          <p class="compare__item_title">
            Импорт
            <span>{{importMoney}} млн. долл. США</span>
          </p>
          <ChartRound :series="getImportCircleChartMain"></ChartRound>
        </div>
        <div v-if="circleChartsStatus" class="compare__item">
          <p class="compare__item_title">
            Экспорт
            <span>{{exportMoney}} млн. долл. США</span>
          </p>
          <ChartRound :series="getExportCircleChartMain"></ChartRound>
        </div>
        <Loader class="compare_loader" v-if="!circleChartsStatus"/>
      </div>
    </div>
  </section>
</template>

<script>
import ChartRound from "@/app/modules/Home/components/ui/ChartRound";
import {mapGetters, mapActions} from 'vuex';
import Loader from "@/app/shared/components/ui/Loader";

export default {
  name: 'app-home-compare',
  components: {ChartRound,Loader},
  computed: mapGetters(["circleChartsStatus","getImportCircleChartMain","getExportCircleChartMain"]),
  data() {
    return {
      importMoney: '105 556',
      exportMoney: '85 556',
    }
  },
  methods: {
    ...mapActions(["getCircleChartOption"]),
    doSomething(item) {
      console.log(item)
    }
  },
  async mounted() {
    this.getCircleChartOption()
  }
};
</script>
<style lang="sass">
@import "./styles/compare"
</style>