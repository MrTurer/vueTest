<template>
  <section class="restriction">
    <div class="container">
      <BreadCrumbs :options="breadCrumbs"></BreadCrumbs>
      <Toggler class="restriction_toggler" :with-labels="true" :toggler-active="true" first-label="Товары" second-label="Услуги"
               @onChange="changeProductActive($event)"/>
      <p class="restriction_country">{{ $route.params.name }}</p>
      <p class="restriction_title" v-if="productActive">Товары</p>
      <p class="restriction_title" v-if="!productActive">Услуги</p>
      <Toggler class="restriction_toggler" :with-labels="true" :toggler-active="true" first-label="Меры" second-label="Угрозы"
               @onChange="changeMeasureActive($event)"/>
      <div class="restriction__table-wrapper">
        <div class="restriction__table-scroll-wrapper">
          <table v-if="getRestrictionProductLoader">
            <thead v-if="productActive" class="products">
              <tr>
                <td><p>№ п/п</p></td>
                <td><p>Товар (группа товаров)<IconComponent name="marketAccessChevron"/></p></td>
                <td><p>Код(ы) ТН ВЭД<IconComponent name="marketAccessChevron"/></p></td>
                <td><p>Тип меры<IconComponent name="marketAccessChevron"/></p></td>
                <td><p>Размер пошлины<IconComponent name="marketAccessChevron"/></p></td>
                <td><p>Срок действия<IconComponent name="marketAccessChevron"/></p></td>
              </tr>
            </thead>
            <thead v-if="!productActive" class="services">
              <tr>
                <td><p>№ п/п</p></td>
                <td><p>Наименование услуги<IconComponent name="marketAccessChevron"/></p></td>
                <td><p>Тип меры<IconComponent name="marketAccessChevron"/></p></td>
                <td><p>Размер пошлины<IconComponent name="marketAccessChevron"/></p></td>
                <td><p>Срок действия<IconComponent name="marketAccessChevron"/></p></td>
              </tr>
            </thead>
            <tbody v-if="getRestrictionProduct && productActive" class="products">
              <tr v-for="(restrictionItem, index) of getRestrictionProduct" v-bind:key="index">
                <td>{{index + 1}}</td>
                <td>{{restrictionItem.product}}</td>
                <td>{{restrictionItem.cod}}</td>
                <td>{{restrictionItem.type}}</td>
                <td>{{restrictionItem.size}}</td>
                <td>{{restrictionItem.duration}}</td>
              </tr>
            </tbody>
            <tbody v-if="getRestrictionProduct && !productActive" class="services">
              <tr v-for="(restrictionItem, index) of getRestrictionProduct" v-bind:key="index">
                <td>{{index + 1}}</td>
                <td>{{restrictionItem.label}}</td>
                <td>{{restrictionItem.type}}</td>
                <td>{{restrictionItem.size}}</td>
                <td>{{restrictionItem.duration}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Loader v-if="!getRestrictionProductLoader" class="restriction_loader"></Loader>
    </div>
  </section>
</template>

<script>
import BreadCrumbs from "@/app/shared/components/ui/BreadCrumbs";
import Toggler from "@/app/shared/components/ui/Toggler";
import Loader from "@/app/shared/components/ui/Loader";
import IconComponent from "@/app/shared/components/ui/IconComponent";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'app-market-access-restriction',
  components: {BreadCrumbs, Toggler,Loader, IconComponent},
  data() {
    return {
      breadCrumbs:[
        {title:'Главная', href:'/', selected: 'N'},
        {title:'Обеспечение доступа на внешние рынки', href:'/market-access', selected: 'N'},
        {title:'Ограничения', href:'/', selected: 'Y'},
      ],
      productActive: true,
      measureActive: true,
    }
  },
  computed: mapGetters(["getRestrictionProduct","getRestrictionProductLoader"]),
  methods: {
    ...mapActions(
        [
        "downloadRestrictionProduct",
        "downloadRestrictionService",
        "downloadRestrictionMeasure",
        "downloadRestrictionRisk"
    ]),
    changeProductActive(e) {
      this.productActive = e
      if (this.productActive) {
        this.downloadRestrictionProduct()
      } else {
        this.downloadRestrictionService()
      }
    },
    changeMeasureActive(e) {
      this.measureActive = e
      if (this.productActive) {
        this.downloadRestrictionMeasure()
      } else {
        this.downloadRestrictionRisk()
      }
    },
  },
  async mounted() {
    this.downloadRestrictionProduct()
  }
};
</script>
<style lang="sass">
@import "./styles/restriction"
</style>