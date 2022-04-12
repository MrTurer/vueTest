<template>
  <div class="ved-toggler" v-on:click="onClick()">
    <p
        v-if="!!firstLabel"
       :class="{active: togglerActiveLocal}"
        @click="togglerActiveLocal = true"
    >{{firstLabel}}</p>
    <div
        class="ved-toggler__body"
        @click="togglerActiveLocal = !togglerActiveLocal"
        :class="{active: togglerActiveLocal, togglerWithLabels: withLabels}"
    ></div>
    <p
        v-if="!!secondLabel"
        :class="{active: !togglerActiveLocal}"
        @click="togglerActiveLocal = false"
    >{{secondLabel}}</p>
  </div>
</template>

<script>
export default {
  name: 'app-toggler',
  emits: ['onChange'],
  props: {
    togglerActive: {
      type: Boolean,
      required: true
    },
    withLabels: {
      type: Boolean,
      required: true
    },
    firstLabel: {
      type: String,
    },
    secondLabel: {
      type: String
    }
  },
  data() {
    return {
      togglerActiveLocal: this.togglerActive,
      lastEmmitState: null
    }
  },
  methods: {
    onClick() {
      if (this.togglerActiveLocal === this.lastEmmitState) {
        return false
      }

      this.lastEmmitState = this.togglerActiveLocal
      this.$emit('onChange', this.togglerActiveLocal )
    }
  }
}
</script>

<style lang="sass">
  .ved-toggler
    display: flex
    p
      color: #0093BA4D
      font-size: 14px
      line-height: 26px
      transition: .2s
      cursor: pointer
      &.active
        font-weight: 700
        color: #0093BA
        cursor: default
    &__body
      width: 48px
      height: 26px
      margin: 0 8px
      position: relative
      background: linear-gradient(90deg, #787F8F 0%, #787F8F 100%)
      transition: .2s
      border-radius: 24px
      cursor: pointer
      &:after
        content: ''
        position: absolute
        width: 22px
        height: 22px
        background: #ffffff
        top: 2px
        right: 2px
        transition: .2s
        border-radius: 50%
      &.active, &.togglerWithLabels
        background: linear-gradient(90deg, #01B0AB 0%, #0179C7 100%)
      &.active:after
        right: 24px
</style>