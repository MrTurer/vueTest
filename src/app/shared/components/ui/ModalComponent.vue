
<template>
  <GDialog>
    <div 
      class="modal__body"
      :class="[{'modal__body-p0': (this.headType != 'default')}]">
      <!-- modal header -->
      <div 
        :class="'modal__body-head-'+ this.headType" class="modal__body-head"
        v-if="!disableHead"
      >
        <!-- в компонент можно менять только этот тайтл -->
        <p>{{ title }}</p>
        <icon-component @click="$emit('close')" name="crossInCircle"/>
      </div>
      <!-- modal body -->
      <div class="modal__body-inner">
        <!-- slot start -->
        <slot/>
        <!-- slot end -->
      </div>
    </div>
  </GDialog>
</template>

<script>
// @click="dialogState = true"
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import IconComponent from './IconComponent.vue';

export default {
  name: "ModalComponent",
  components: { IconComponent,GDialog },
  props:{
    title: {
      default: "",
      type: String
    },
    headType: {
      default: "default",
      type: String
    },
    disableHead:{
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
// Modal
.modal{
  &__body{
    padding: 16px;
    background: #FFFFFF;
    max-width: 800px;
    &-head{
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      p{
        font-family: "Fira Sans",sans-serif;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        color: #000000;
      }
      .icon{
        cursor: pointer;
      }
      &-green,&-blue{
        padding: 26px;
        p{
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.15px;
          color: #FFFFFF;
        }
      }
      &-green{
        background-color: #01A39D;
      }
      &-blue{
        background-color: #0179C8;
      }
      // Перечисление всех типов
      &:not(&-blue,&-green) .icon{
        color: #787F8F;
      }
      &-blue .icon,
      &-green .icon{
        color: #FFFFFF;
      }
    }
    &-p0{
      padding: 0px;
      .modal__body-inner{
        padding: 26px;
      }
    }
    .form{
      &__body{
        textarea{
          resize: none;
        }
        .select2-container--default .select2-selection--single {
          padding: 0.46875rem 0.5rem;
        }
        textarea,input{
          padding: 8px;
        }
        // Stock
        &-inputBlock{
          display: flex;
          flex-direction: column;
          margin-bottom: 12px;
          padding-bottom: 40px;
          border-bottom: 1px dashed #D3DFE6;
          .select2 .select2-container--default .select2-selection--single .select2-selection__placeholder{
            color: #787F8F;
          }
          .calendar-input{
            position: relative;
            .icon{
              position: absolute;
              bottom: 10px;
              right: 12px;
              z-index: 1;
            }
          }
          textarea{
            min-height: 72px;
          }
          p{
            font-family: "Fira Sans", sans-serif;
            font-size: 14px;
            line-height: 160%;
            // color: #231F20;
            margin-bottom: 4px;
            &.title{
              &-subtext{
                font-size: 12px;
                line-height: 20px;
                letter-spacing: 0.25px;
                color: #787F8F;
              }
            }
          }
          &:nth-last-child(2){
            margin-bottom: 52px;
          }
          &:last-of-type{
            margin-bottom: 0px;
            padding-bottom: 0px;
            border-bottom: none;
          }
          button{
            max-width: 220px;
          }
        }
        // Modifated
        &.mpk{
          .form__body{
            &-inputBlock{
              &:nth-of-type(1){
                .select2{
                  max-width: 336px;
                }
              }
              &:nth-of-type(2){
                margin-bottom: 8px;
              }
              &:nth-of-type(3){
                display: flex;
                flex-wrap: wrap;
                div{
                  margin-right: 8px;
                  &:nth-of-type(1){
                    max-width: 215px;
                  }
                  &:last-of-type{
                    margin-right: 0px;
                  }
                }
                .calendar-input{
                  width: 125px;

                }
                .select2 .select2-container--default .select2-selection--single {
                  height: calc(2.25rem + 3px) !important;
                }
              }
            }
          }
        }
        &.cancel{
          .form__body{
            &-inputBlock{
              p{
                font-size: 14px;
                line-height: 160%;
                color: #231F20;
                margin-bottom: 4px;
              }
              textarea{
                width: 100%;
                min-height: 72px;
              }
            }
          }
        }
      }
    }
    .search{
      &__body{

        padding: 30px 0px 12px 0px;
        text-align: center;
        .icon{
          margin-bottom: 16px;
        }
        .error{
          color: red;
        }
        .success{
          color: green;
        }
        button{
          margin-top: 24px;
        }
      }
    }
    .stock{
      .row{
        display: flex;
        flex-direction: column;
        &:not(:last-of-type){
          margin-bottom: 24px;
        }
        &-title{
          margin-bottom: 16px;
          font-weight: 500;
        }
        .multiselect{
          &:not(:last-of-type){
            margin-bottom: 16px;
          }
        }
        .checkboxColumns{
          display: flex;
          flex-wrap: wrap;
          .checkboxInput{
            width: 50%;
          }
        }
        &.btns{
          flex-direction: row;
          justify-content: flex-end;
          button{
            max-width: 220px;
          }
        }
        textarea{
          height: 100px;
          resize: none;
        }
      }
    }
    .thx{
      display: flex;
      flex-direction: column;
      justify-content: center;
      &-title,&-number{
        font-size: 14px;
        line-height: 160%;
        text-align: center;
      }
      &-title{
        font-weight: 500;
        margin-bottom: 8px;
      }
      &-number{
        margin-bottom: 40px;
      }
    }
  }
}
// Modal
.g-dialog-content{
  max-width: 800px;
  &::-webkit-scrollbar{
    display: none;
    width: 0;
  }
}
.g-dialog-overlay{
  backdrop-filter: blur(15px);
}
:root {
  --g-dialog-overlay-bg:  linear-gradient(270deg, rgba(0, 178, 170, 0.5) 0%, rgba(0, 120, 200, 0.5) 100%);
  --g-dialog-content-border-radius: 16px 16px 16px 16px;
}
</style>