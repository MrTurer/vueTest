<template>
  <header class="header">
    <div class="container">

      <IconComponent class="header_logo" name="logo"/>

      <nav :class="{open: burgerOpen}">
        <ul>
          <li v-for="(headerItem, index) in headerMenu" :key="index">
            <router-link :to="headerItem.link">{{headerItem.text}}</router-link>
            <ul v-if="!!headerItem.submenu">
              <li v-for="(header, submenuIndex) in headerItem.submenu" :key="submenuIndex">
                <router-link :to="header.link">{{header.text}}</router-link>
              </li>
            </ul>
            <IconComponent name="chevronDown"/>
          </li>
        </ul>
      </nav>

      <IconComponent
          class="header_burger-btn open"
          @click="burgerOpen = true"
          name="burger"
          v-if="!burgerOpen"
      />
      <IconComponent
          class="header_burger-btn close"
          @click="burgerOpen = false"
          name="burgerClose"
          v-else
      />

      <template v-if="!$store.state.auth?.oidc?.user">
        <router-link class="header_auth-link" to="/login" title="Войти">
          <IconComponent name="person"/>
        </router-link>
      </template>
      <template v-else>
        <router-link class="header_auth-link" to="/logout">
          Выйти
        </router-link>
      </template>

      <router-link class="header_lang" to="/en">
        RU
      </router-link>

    </div>
  </header>
</template>

<script>
import IconComponent from "@/app/shared/components/ui/IconComponent";

export default {
  name: 'App-header',
  components: {IconComponent},
  data() {
    return {
      burgerOpen: false,
      headerMenu: [
        { text: 'Цифровые комиссии', link: '/',
          submenu: [
            {text: 'Пункт сабменю 1', link: '/'},
            {text: 'Пункт сабменю 1', link: '/'},
            {text: 'Пункт сабменю 1', link: '/'},
          ]
        },{ text: 'Навигатор ВЭД ', link: '/',
          submenu: [
            {text: 'Навигатор участника ВЭД по административным процедурам', link: '/interactive-path'}
          ]
        },{ text: 'Обеспечение доступа на внешние рынки', link: '/',
          submenu: [
            {text: 'Пункт сабменю 1', link: '/'},
            {text: 'Пункт сабменю 1', link: '/'},
            {text: 'Пункт сабменю 1', link: '/'},
          ]
        },{ text: 'Меры таможенного регулирования', link: '/',
          submenu: [
            {text: 'Пункт сабменю 1', link: '/'},
            {text: 'Пункт сабменю 1', link: '/'},
            {text: 'Пункт сабменю 1', link: '/'},
          ]
        },{ text: 'Международная торговля', link: '/',
          submenu: [
            {text: 'Пункт сабменю 1', link: '/'},
            {text: 'Пункт сабменю 1', link: '/'},
            {text: 'Пункт сабменю 1', link: '/'},
          ]
        },
      ]
    }
  }
}
</script>

<style lang="sass">
@import "./styles/header.sass"
.logout
  margin-left: 13px

  .fa-sign-out-alt
    color: rgba(33, 33, 37, 0.5)
    font-size: 22px
    transition: color 0.2s ease-in-out

    &:hover
      color: rgba(33, 33, 37, 1)
</style>