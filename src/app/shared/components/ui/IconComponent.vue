<template>
  <div ref="carousel" class="icon" />
</template>

<script>
import NsiApi from "@/app/nsi/api/nsi";
const cache = new Map();
export default {
  name: "IconComponent",
  props: {
    name: {
      type: String,
      required: true
    },
    useDatabase: {
      type: Boolean,
      default: false
    }
  },
  async mounted() {
    if (!cache.has(this.name)) {
      try {
        if (!this.useDatabase) {
          const component = require(`/src/assets/img/svg/${this.name}.svg`);
          cache.set(this.name, fetch(component).then(r => r.text()));
        } else {
          cache.set(this.name, NsiApi.find('nsisvg', this.name).then(r => r.data.content));
        }
      } catch (e) {
        cache.delete(this.name);
      }
    }
    if (cache.has(this.name)) {
      this.$refs.carousel.innerHTML = await cache.get(this.name);
    }
  }
}
</script>
<style scoped>
.icon{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #FBFBFB;
}
</style>