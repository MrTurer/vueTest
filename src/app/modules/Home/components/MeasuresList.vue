<template>
  <section class="measures">
    <div class="container">
      <p class="home_title">Перечень единых мер таможенно-тарифного регулирования</p>
      <div class="measures__list">
        <div class="measures__item">
          <p>
            Перечень единых мер таможенно-тарифного регулирования,
            применяемых на временной основе
          </p>
          <router-link to="/q">Подробнее</router-link>
        </div>
        <div class="measures__item">
          <p>
            Перечень односторонних мер
            таможенно-тарифного регулирования
          </p>
          <router-link to="/q">Подробнее</router-link>
        </div>
        <div class="measures__item">
          <p>
            Перечень односторонних мер
            нетарифного регулирования
          </p>
          <router-link to="/q">Подробнее</router-link>
        </div>
        <div class="measures__item">
          <p>
            Перечень мер защиты
            внутреннего рынка
          </p>
          <router-link to="/q">Подробнее</router-link>
        </div>
        <div class="measures__item">
          <p>
            Инициативы о применении
            мер таможенно-тарифного
            регулирования
          </p>
          <router-link to="/q">Подробнее</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'app-home-measures-list',
};
</script>
<style lang="sass">
@import "./styles/measuresList"
</style>