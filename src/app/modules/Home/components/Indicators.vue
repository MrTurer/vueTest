<template>
  <section class="indicators">
    <div class="container">

      <p class="home_title">Горячие показатели</p>
      <div class="indicators__setting">
        <p class="indicators__setting_title">Страна</p>
        <form @submit.prevent="onSubmit()">
          <Select
              v-if="!!getSelectCountries.length"
              :options="getSelectCountries"
              @selected="onSelect($event)"
              class="indicators_input"
          ></Select>
          <input type="submit" value="Показать" class="ved-btn">
        </form>
        <Toggler @onChange="changeType($event)" :with-labels="true" :toggler-active="true" first-label="Товары" second-label="Услуги"></Toggler>
      </div>

      <div class="indicators__list">
        <div v-if="barChartsStatus" class="indicators__item">
          <p class="indicators__item_title">Экспорт товаров</p>
          <p class="indicators__item_country">Италия</p>
          <p class="indicators__item_prompt" v-if="goodsChartActive">Товарооборот</p>
          <p class="indicators__item_prompt" v-else>Услуги</p>
          <ChartBar class="indicators__chart" :series="importChartBarOption"></ChartBar>
          <table>
            <thead>
              <tr>
                <td><p>Период</p></td>
                <td><p>Сумма</p></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in chart" :key="index">
                <td><p>{{item.date}}</p></td>
                <td><p>{{item.money}}</p></td>
              </tr>
              <tr>
                <td><p>Итого: </p></td>
                <td><p>$ 14.1 млрд</p></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="barChartsStatus" class="indicators__item">
          <p class="indicators__item_title">Импорт товаров</p>
          <p class="indicators__item_country">Италия</p>
          <p class="indicators__item_prompt" v-if="goodsChartActive">Товарооборот</p>
          <p class="indicators__item_prompt" v-else>Услуги</p>
          <ChartBar class="indicators__chart" :series="exportChartBarOption"></ChartBar>
          <table>
            <thead>
              <tr>
                <td><p>Период</p></td>
                <td><p>Сумма</p></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in chart" :key="index">
                <td><p>{{item.date}}</p></td>
                <td><p>{{item.money}}</p></td>
              </tr>
              <tr>
                <td><p>Итого: </p></td>
                <td><p>$ 14.1 млрд</p></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Loader class="indicators__list_loader" v-if="!barChartsStatus"/>
      </div>



    </div>
  </section>
</template>

<script>
import Select from "@/app/shared/components/ui/Select";
import Toggler from "@/app/shared/components/ui/Toggler";
import ChartBar from "@/app/modules/Home/components/ui/ChartBar";
import {mapGetters, mapActions} from 'vuex';
import Loader from "@/app/shared/components/ui/Loader";

export default {
  name: 'app-home-indicators',
  components: {Select,Toggler,ChartBar,Loader},
  data() {
    return {
      activeCountryId: null,
      chart: [
        {date: 'Июль, 2020',money: '$ 918 млн'},
        {date: 'Август, 2020',money: '$ 1.03 млрд'},
        {date: 'Сентябрь, 2020',money: '$ 1.06 млрд'},
        {date: 'Октябрь, 2020',money: '$ 1.27 млрд'},
        {date: 'Ноябрь, 2020',money: '$ 1.12 млрд'},
        {date: 'Декабрь, 2020',money: '$ 837 млн'},
        {date: 'Январь, 2021',money: '$ 909 млн'},
        {date: 'Февраль, 2021',money: '$ 1.23 млрд'},
        {date: 'Март, 2021',money: '$ 1.08 млрд'},
        {date: 'Апрель, 2021',money: '$ 1.23 млрд'},
        {date: 'Май, 2021',money: '$ 1.35 млрд'},
        {date: 'Июнь, 2021',money: '$ 1.11 млрд'},
        {date: 'Июль, 2021',money: '$ 988 млн'},
      ]
    }
  },
  computed: {
    ...mapGetters(["importChartBarOption", "exportChartBarOption", "barChartsStatus", "getSelectCountries"]),
  },
  methods: {
    ...mapActions(["getChartBarOption", "getCountries"]),
    onSelect(id) {
      this.activeCountryId = id
    },
    onSubmit() {
      this.getChartBarOption({goodsChartActive:false, id:2})
    },
    changeType(activity) {
      this.getChartBarOption({goodsChartActive:activity, id:1})
    }
  },
  async mounted() {
    this.getChartBarOption({goodsChartActive:true, id:1})
    this.getCountries()
  }
};
</script>
<style lang="sass">
@import "./styles/indicators"
</style>