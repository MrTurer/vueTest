<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs-list">
      <li v-for="item in options" :key="item.id" 
        class="breadcrumbs-item" :class="{'selected': (item.selected == 'Y')}">
        <a :href="item.href"> {{item.title}} </a>
        <!-- :after separator -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app-toggler',
  props: {
    options:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.breadcrumbs{
  margin: 16px 0px;
  &-list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    font-family: 'Fira Sans',sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: #787F8F;
    li{
      display: flex;
      &:after{
        content: ' ';
        display: block;
        background-image: url(~@/assets/img/svg/arrow.svg);
        background-size: contain;
        background-repeat: no-repeat;
        width: 12px;
        height: 16px;
      }
      &:not(:last-of-type){
        margin-right: 6px;
      }
      a{
        color: #787F8F;
        margin-right: 6px;
      }
      &.selected{
        &:after{
          display: none;
        }
        a{
          color: #231F20;
        }
      }
    }
  }
}
</style>