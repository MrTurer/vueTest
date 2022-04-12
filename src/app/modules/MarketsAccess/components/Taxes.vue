<template>
  <section class="taxes">
    <div class="container">
      <BreadCrumbs :options="breadCrumbs"/>
      <v-select class="market-access_select" :options="countries"></v-select>
      <v-select class="market-access_select" :options="countries"></v-select>
      <div class="taxes__content">
        <div class="taxes__duty">
          <p class="taxes_title">Информация о применяемых ставках ввозных таможенных пошлин, а также других налогов и сборов в зависимости от вида товара</p>
          <v-select class="market-access_select" :options="countries"></v-select>
          <div class="taxes__duty-content">
            <ul>
              <li><p><span></span></p></li>
              <li><p><span></span></p></li>
              <li><p><span></span></p></li>
            </ul>
            <textarea name="duty-prompt" placeholder="q" cols="30" rows="10" disabled></textarea>
          </div>
          <Loader/>

          <v-select class="market-access_select" :options="countries"></v-select>
          <div class="taxes__collection-content">
            <p class="taxes_title"></p>
            <p class="taxes__collection_protection"></p>
            <p class="taxes_title"></p>
            <div class="taxes__collection-list-wrapper">
              <p class="taxes__collection-list-wrapper_title"></p>
              <ul class="taxes__collection-list">
                <li class="taxes__collection-item">
                  <p class="taxes__collection-item_code"></p>
                  <p class="taxes__collection-item_label">
                    <IconComponent name="chevron"/>
                  </p>
                  <p class="taxes__collection-item_counter"></p>
                </li>
              </ul>
            </div>
          </div>
          <Loader/>
        </div>
      </div>
      <Loader/>
    </div>
  </section>
</template>

<script>
import BreadCrumbs from "@/app/shared/components/ui/BreadCrumbs";
import vSelect from 'vue-select'
import Loader from "@/app/shared/components/ui/Loader";
import IconComponent from "@/app/shared/components/ui/IconComponent";

export default {
  name: 'app-market-access-taxes',
  components: {BreadCrumbs,vSelect,Loader,IconComponent},
  data() {
    return {
      breadCrumbs:[
        {title:'Главная', href:'/', selected: 'N'},
        {title:'Обеспечение доступа на внешние рынки', href:'/market-access', selected: 'N'},
        {title:'Пошлины и сборы', href:'/', selected: 'Y'},
      ],
      countries : [
        {label: 'Италия', id: 1, active: true},
        {label: 'Шумерская империя', id: 2},
        {label: 'Атлантида', id: 3},
        {label: 'Эльдорадо', id: 4},
      ],
      productActive: true,
      measureActive: true,
    }
  },
};
</script>