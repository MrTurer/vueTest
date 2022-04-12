<template>
  <section class="navigator">
    <div class="container">
      <p class="home_title">Горячие показатели</p>
      <form>
        <div class="navigator__form-item">
          <p>Страна</p>
          <Select :options="countrySelectData" @selected="doSomething($event)"></Select>
        </div>
        <div class="navigator__form-item">
          <p>Товар</p>
          <Select :options="staffSelectData" @selected="doSomething($event)"></Select>
        </div>
        <div class="navigator__form-item">
          <p>Транспорт</p>
          <Select :options="deliverySelectData" @selected="doSomething($event)"></Select>
        </div>
        <input type="submit" value="Показать" class="ved-btn">
      </form>
    </div>
  </section>
</template>

<script>
import Select from "@/app/shared/components/ui/Select";

export default {
  name: 'app-home-navigator',
  components: {Select},
  data() {
    return {
      countrySelectData : [
        {name: 'Италия', id: 1, active: true},
        {name: 'Монголия', id: 2},
        {name: 'Микронезия', id: 3},
        {name: 'Казахстан', id: 4},
      ],
      staffSelectData : [
        {name: 'Фасоль', id: 1, active: true},
        {name: 'Шкуры козлов', id: 2},
        {name: 'Ракушки', id: 3},
        {name: 'Икра', id: 4},
      ],
      deliverySelectData : [
        {name: 'Автомобильный', id: 1, active: true},
        {name: 'Авиация', id: 2},
        {name: 'Водный', id: 3},
        {name: 'Трибушет', id: 4},
      ],
    }
  },
  methods: {
    doSomething(item) {
      console.log(item)
    }
  }
};
</script>
<style lang="sass">
@import "./styles/navigator"
</style>