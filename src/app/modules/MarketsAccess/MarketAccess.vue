<template>
  <section class="market-access">
    <div class="container">
      <BreadCrumbs :options="breadCrumbs"></BreadCrumbs>
      <div class="market-access__settings">
        <form>
          <v-select class="market-access_select" :options="getSelectCountries"></v-select>
          <input type="submit" value="Показать на карте">
        </form>
        <Toggler class="market-access_toggler" :with-labels="true" :toggler-active="true" first-label="Страна" second-label="Товар"
                 @onChange="doSomething($event)"/>
      </div>
      <MarketMap class="market-access__map"/>
      <NewsSlider></NewsSlider>
    </div>
  </section>



</template>

<script>
import 'vue-select/dist/vue-select.css';

import MarketMap from "@/app/modules/MarketsAccess/components/MarketMap";
import BreadCrumbs from "@/app/shared/components/ui/BreadCrumbs";
import Toggler from "@/app/shared/components/ui/Toggler";
import NewsSlider from "@/app/shared/components/News-slider";
import vSelect from 'vue-select'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "app-market-access",
  components: {MarketMap,BreadCrumbs,vSelect,Toggler,NewsSlider},
  data() {
    return {
      breadCrumbs:[
        {title:'Главная', href:'/', selected: 'N'},
        {title:'Обеспечение доступа на внешние рынки', href:'/', selected: 'Y'},
      ],
    }
  },
  computed: mapGetters(["getSelectCountries"]),
  methods: {
    ...mapActions(["getCountries"]),
    doSomething(e) {
      console.log(e)
    }
  },
  async mounted() {
    this.getCountries()
  }
}
</script>

<style lang="sass">
@import "market-access"
</style>