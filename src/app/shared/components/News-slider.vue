<template>
  <section class="news-slider">
    <div class="container">
      <p class="home_title">Новости</p>
      <carousel
          :wrapAround="true"
          :transition="500"
          v-if="allNews.length > 0"
          :breakpoints="breakpoints"
      >
        <slide v-for="(slide, index) in allNews" :key="index">
          <div class="news-slider__item">
            <img :src="slide.img" :alt="slide.title">
            <p>{{slide.title}}</p>
            <span>{{slide.date}}</span>
          </div>
        </slide>

        <template v-if="allNews.length > 0" #addons>
          <navigation></navigation>
        </template>
      </carousel>
      <Loader class="news-slider_loader" v-if="allNews.length == 0"/>
    </div>
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import {mapGetters, mapActions} from 'vuex';
import Loader from "@/app/shared/components/ui/Loader";

export default {
  name: 'app-home-news-slider',
  components: {
    Carousel,
    Slide,
    Navigation,
    Loader
  },
  data() {
    return {
      breakpoints: {
        1250: {
          itemsToShow: 3,
          snapAlign: 'center'
        },
        1130: {
          itemsToShow: 2.7,
          snapAlign: 'start'
        },
        1050: {
          itemsToShow: 2.5,
          snapAlign: 'start'
        },
        975: {
          itemsToShow: 2.3,
          snapAlign: 'start'
        },
        900: {
          itemsToShow: 2.1,
          snapAlign: 'start'
        },
        577: {
          itemsToShow: 1.95,
          snapAlign: 'start'
        },
        1: {
          itemsToShow: 1.01,
          snapAlign: 'start',
        },
      }
    }
  },
  computed: mapGetters(["allNews"]),
  methods: mapActions(["getNews"]),
  async mounted() {
    this.getNews()
  }
};
</script>
<style lang="sass">
@import "styles/news-slider"
</style>