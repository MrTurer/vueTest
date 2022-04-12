<template>
  <button
    v-bind:disabled="disabled"
    :class="['btn-'+ this.btnType,{' btn-container' : (this.mode == 'icon')}]">
    <icon-component v-if="mode == 'icon'" :name="iconName"/>
    <p v-if="title.length > 0">{{ title }}</p>
  </button>
</template>


<script>
import IconComponent from "@/app/shared/components/ui/IconComponent";

export default {
  name: "ButtonComponent",
  components: {
    IconComponent
  },
  props: {
    iconName: {
      default: '',
      type: String
    },
    btnType: {
      default: 'primary',
      type: String
    },
    title: {
      default: '',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    mode:{
      default: 'default',
      type: String
    }
  },
  data() {
    return {
      icon: false
    }
  },
};
</script>

<style scoped lang="scss">
</style>