<template>
  <div class="list-container">
    <ul :class="['list-'+ this.type]">
      <li v-for="item in options" :key="item.key">
        <template v-if="canDownloaded && item.fileId">
          <a href="javascript:" @click="downloadFile(item.file)">{{item.name}}</a>
        </template>
        <template v-else>
          <p>{{item.name}}</p>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import Utils from "@/common/utils";

export default {
  name: 'ListComponent',
  props: {
    type:{
      type: String,
      default: 'documents',
    },
    canDownloaded:{
      type: Boolean,
      default: true,
    },
    options:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    downloadFile(file) {
      return Utils.downloadFile(`/api/file/download?id=${file.id}`, file.originalName);
    }
  }
}
</script>

<style lang="scss">
.list-container{
  li{
    display: flex;
    position: relative;
    &:not(:last-of-type){
      margin-bottom: 18px;
    }
    &:before{
      display: block;
      margin-right: 12px;
    }
    a,p{
      font-weight: 400;
      font-size: 14px;
      color: #231F20 !important;
    }
  }                    
}
.list{
  &-documents{
    li{
      &:before{
        content: url(~@/assets/img/svg/green_file.svg);
      }
    } 
  }
  &-results{
    li{
      &:before{
        content: url(~@/assets/img/svg/result.svg);
      }
    }
  } 
  &-lines{
    li{
      display: block;
      position: relative;
      padding-left: 14px;
      &:before{
        position: absolute;
        top: 10px;
        left: 4px;
        content: ' ';
        display: block;
        width: 5px;
        height: 1px;
        background-color: #231F20;
      }
    }
  }
  &-circles{
    li{
      display: block;
      position: relative;
      padding-left: 14px;
      &:before{
        position: absolute;
        top: 8px;
        left: 4px;
        content: ' ';
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #231F20;
      }
    }
  }               
}
</style>