<template>
  <template v-if="!async">
  <Multiselect
    :close-on-select="true"
    :searchable="true"
    :create-option="false"
    :multiple-label="values => `${values.length} выбрано`"
  />
  </template>
  <template v-else>
    <Multiselect
        :id="selectId"
        :close-on-select="true"
        :clear-on-select="false"
        :searchable="true"
        :internal-search="false"
        :loading="isLoadingInternal"
        track-by="value"
        :hide-selected="true"
        :show-no-results="false"
        :preserve-search="true"
        @search-change="asyncFind"
    />
  </template>
</template>

<script>
import Multiselect from '@vueform/multiselect'
export default {
  components:{
    Multiselect
  },
  name: "SelectComponent",
  emits: ['search'],
  props: {
    selectId: String,
    async: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isLoadingInternal: false,
      timerId: null
    };
  },
  watch: {
    isLoading: function() {
      this.isLoadingInternal = !!this.isLoading;
      if (!this.isLoadingInternal) {
        // workaround of strange behaviour: showing "No results found" even if results are fetched.
        let el = document.querySelector(`#${this.selectId} .multiselect-caret`);
        el.click();
        setTimeout(() => {
          el = document.querySelector(`#${this.selectId}`);
          el.focus();
        }, 100);
      }
    }
  },
  methods: {
    asyncFind(query) {
      if (!query) return;
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
      this.timerId = setTimeout(() => {
        this.$emit('search', query);
      }, 1000)
    }
  }
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
  :root {
    // Modal
    --g-dialog-overlay-bg:  linear-gradient(270deg, rgba(0, 178, 170, 0.5) 0%, rgba(0, 120, 200, 0.5) 100%);
    // Multiselect
    --ms-tag-bg: #D3DFE6;
    --ms-tag-font-weight: 400;
    --ms-tag-color: #231F20;
    --ms-tag-remove-radius: 50%;
    --ms-option-font-size: 14px;
    --ms-bg: #FBFBFB;
    --ms-caret-color: transparent;
  }
  .multiselect{
    font-size: 14px;
  }
  .multiselect-clear{
    padding: 0 22px 0 0;
  }
  .multiselect-tag-remove{
    background-color: #787F8F;
    padding: 2px;
    margin: 0 6px 0 10px;
  }
  .multiselect-tag-remove-icon{
    background-color: #D3DFE5;
  }
  .multiselect-tags-search{
    border: none !important;
  }
  .multiselect-placeholder{
    font-size: 14px;
    color: #989898;
    padding-left: 10px;
    padding-right: 10px;
  }
  .multiselect.is-active{
    box-shadow: none;
  }
  .multiselect-caret{
    outline: none;
    border-color: unset;
    border-style: unset;
    border-width: unset;
    width: 10px;
    height: 10px;
    border-radius: 1px;
    border-left: 3px solid #343c44;
    border-bottom: 3px solid #343c44;
    transform: rotate(315deg);
    margin-left: -10px;
    margin-top: -6px;
    transition: .3s;
    mask-image: unset;
    &.is-open{
      transform: rotate(135deg);
      margin-top: 2px;
    }
  }
  .is-visible{
    .multiselect{
      flex-direction: column;
      .multiselect-dropdown{
        position: initial;
        display: block !important;
        transform: none;
        max-height: unset;
        width: 100%;
        border-bottom: none;
        border-left: none;
        border-right: none;
        min-height: 403px;
      }
      .multiselect-search{
        display: block !important;
        position: initial;
        margin-bottom: 1px;
        border: 1px solid transparent;
        &:focus{
          border: 1px solid #01A39D;
        }
      }
      .multiselect-clear{
        position: absolute;
        top: 12px;
        right: 6px;
      }
      .multiselect-caret{
        display: none;
      }
      .multiselect-placeholder,.multiselect-multiple-label{
        height: auto;
        left: 6px;
        top: 12px;
      }
    }
  }
  .custom-inMultiselect{
    .multiselect-group-label{
      background: #ffffff;
      border-top: 2px solid #D3DFE5;
      border-bottom: 2px solid #D3DFE5;
      padding: 4px 8px 4px 42px;
      &.is-selected{
        background: var(--ms-group-label-bg-selected,#059669);
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
      }
    }
    .multiselect-checkBox{
      height: 18px;
      width: 18px;
      border: 2px solid #00C6A2;
      border-radius: 2px;
      margin-right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .3s;
      &.gradient{
        .multiselect-checkBox__arrow{
          border-left: 2px solid #ffffff;
          border-bottom: 2px solid #ffffff;
        }
      }
      &__arrow{
        display: none;
        height: 4px;
        width: 8px;
        border-left: 2px solid #00C6A2;
        border-bottom: 2px solid #00C6A2;
        transform: rotate(-50deg);
      }
    }
    .multiselect-text{
      width: 90%;
    }
    .multiselect-option.is-selected{
      background: none;
      color: #1F2429;
      .multiselect-checkBox{
        &.gradient{
          border: none;
          background: linear-gradient(270deg, #00B2AA 0%, #0078C8 100%);
        }
        &__arrow{
          display: block;
        }
      }
    }
    .multiselect-img{
      height: 61px;
      width: 61px;
      border-radius: 50%;
      margin-right: 8px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
</style>
