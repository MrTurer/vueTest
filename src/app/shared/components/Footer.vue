<template>
  <footer>
    <div class="container">
      <div class="footer__inner">
        <div class="footer__inner-col">
          <img class="symbol" src="@/assets/img/logoFooter.png" alt="Герб" />
          <p class="footer__text">
            Официальный сайт Минэкономразвития России. Свидетельство о
            регистрации СМИ Эл № ФС77-61745 от 30 <br> апреля 2015 г.
          </p>
          <p class="footer__text">
            Все материалы сайта доступны по лицензии: <br>
            Creative Commons Attribution
            4.0 International
          </p>
        </div>

        <div class="footer__inner-col">
          <ul class="footer__inner-menu">
            <li class="footer__inner-menu-item">
              <router-link to="/">
                Цифровые межправительственные комиссии
              </router-link>
            </li>
            <li class="footer__inner-menu-item">
              <router-link to="/interactive-path">
                Навигатор участника ВЭД по административным процедурам
              </router-link>
            </li>
            <li class="footer__inner-menu-item">
              <router-link to="/">
                Обеспечение доступа на внешние рынки
              </router-link>
            </li>
            <li class="footer__inner-menu-item">
              <router-link to="/">
                Меры таможенно-тарифного и нетарифного регулирования,
                защитные меры во внешней торговле
              </router-link>
            </li>
            <li class="footer__inner-menu-item">
              <router-link to="/">
                Международная торговля
              </router-link>
            </li>
          </ul>
        </div>

        <div class="footer__inner-col social-container">
          <p class="footer__text title-social">
            Социальные сети
          </p>
          <ul class="social-list">
            <li class="social-item">
              <a href="https://telegram.org/" target="_blank">
                <icon-component name="telegramm"/>
              </a>
            </li>
            <li class="social-item">
              <a href="https://vk.com/" target="_blank">
                <icon-component name="vk"/>
              </a>
            </li>
            <li class="social-item">
              <a href="https://facebook.com/" target="_blank">
                <icon-component name="facebook"/>
              </a>
            </li>
            <li class="social-item">
              <a href="https://youtube.com/" target="_blank">
                <icon-component name="youtube"/>
              </a>
            </li>
            <li class="social-item">
              <a href="https://twitter.com/" target="_blank">
                <icon-component name="twitter"/>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__inner-col">
          <ul class="footer__inner-menu">
            <li class="footer__inner-menu-item">
              <p>
                Интернет ресурсы:
              </p>
            </li>
            <li class="footer__inner-menu-item">
              <a href="" target="_blank">
                Президент России
              </a>
            </li>
            <li class="footer__inner-menu-item">
              <a href="" target="_blank">
                Правительство России
              </a>
            </li>
            <li class="footer__inner-menu-item">
              <a href="" target="_blank">
                Стопкоронавирус
              </a>
            </li>
            <li class="footer__inner-menu-item">
              <a href="" target="_blank">
                Государственные органы власти
              </a>
            </li>
            <li class="footer__inner-menu-item">
              <a href="" target="_blank">
                Портал открытых данных
              </a>
            </li>
            <li class="footer__inner-menu-item">
              <a href="" target="_blank">
                Госуслуги Министерства
              </a>
            </li>
            <li class="footer__inner-menu-item">
              <a href="" target="_blank">
                Портал закупок
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__inner-col">
          <p>
            Нашли ошибку? Выделите её нажмите Ctrl+Enter.
          </p>
          <p>
            Старая версия сайта:
          </p>
          <a href="" target="_blank">
            OLD.ECONOMY.GOV.RU.
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconComponent from "@/app/shared/components/ui/IconComponent";

export default {
  name: 'App-footer',
  components: {
    IconComponent
  },
};
</script>
<style lang="sass" scoped>
@import "../../../assets/theme/default/colors"
footer 
  width: 100%
  padding: 69px 0 50px 0
  z-index: 1
  background: linear-gradient(89.88deg, #0178c8 0.1%, #01b1aa 99.9%)

.footer 
  &__inner
    display: flex
    flex-wrap: wrap
    @media (max-width: 680px) 

      .social-container 
        order: 6
      
      &-col 
        margin-right: 0
      
    

    a,p
      font-family: "Fira Sans", sans-serif
      font-weight: 500
      font-size: 12px
      line-height: 120%
      color: $whiteMist
      text-decoration: none
      margin-bottom: 0px
    
    &-col
      display: flex
      flex-direction: column
      flex-wrap: wrap
      max-width: 200px
      width: 100%
      margin-right: 40px
      &:last-of-type
        margin-right: 0px
      
      &:nth-of-type(5)
        p
          &:nth-of-type(1)
            margin-bottom: 14px
          
        
        a
          text-decoration: underline
        
      

    
    &-menu
      display: flex
      flex-direction: column
      height: 100%
      justify-content: space-between
    
  

.symbol 
  margin-bottom: 24px
  height: 200px
  width: 182px

.social
  &-container
    .title-social
      text-transform: uppercase
      margin-bottom: 12px
    
    .icon
      opacity: 0.6
    
  
  &-list
    display: flex
    justify-content: space-between
    text-decoration: none
    gap: 8px
    flex-wrap: wrap
  

@media(max-width: 1240px)
  .footer__inner-col
    margin-bottom: 32px
  

@media(max-width: 768px)
  .footer__inner-col
    margin-right: 4%
  
  .symbol
    width: 148px
    height: 162px
  

@media(max-width: 425px)
  .footer__inner-col
    max-width: 150px
  

@media(max-width: 375px)
  .footer__inner-col
    max-width: unset
  

</style>