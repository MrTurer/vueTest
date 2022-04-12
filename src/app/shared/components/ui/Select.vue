<template>
  <div>
    <select v-model="selectedItem" v-on:change="$emit('selected', selectedItem )">
      <option v-for="option in options" v-bind:key="option.id" :value="option.id" >{{option.label}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'app-select',
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return{
      selectedItem: null
    }
  },
  mounted() {
    this.options.forEach(option => {
      if (Object.prototype.hasOwnProperty.call(option, "active")) {
        this.selectedItem = option.id
        return null
      }
    })
  }
}
</script>

<style lang="sass">
  select
    border: 1px solid #D3DFE5
    border-radius: 24px
    width: 100%
    padding: 2px 45px 0 26px
    font-size: 14px
    line-height: 44px
    color: #333
    outline: none
    -webkit-appearance: none
    -moz-appearance: none
    appearance: none
    cursor: pointer
    background: url("../../../../assets/img/shared/selectChevron.png") no-repeat calc(100% - 26px) 11px
</style>