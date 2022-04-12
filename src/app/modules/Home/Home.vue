<template>
  <NewsSlider></NewsSlider>

  <Indicators></Indicators>

  <Compare></Compare>

  <Navigator></Navigator>

  <MeasuresList></MeasuresList>

</template>

<script>
import NewsSlider from "@/app/shared/components/News-slider";
import Indicators from "@/app/modules/Home/components/Indicators";
import Compare from "@/app/modules/Home/components/Compare";
import Navigator from "@/app/modules/Home/components/Navigator";
import MeasuresList from "@/app/modules/Home/components/MeasuresList";

export default {
  name: "app-home",
  components: {NewsSlider,Indicators,Compare,Navigator,MeasuresList}
}
</script>
<style lang="sass">
.home_title
  margin-bottom: 16px
  color: #0078C8
  font-weight: 700
  font-size: 16px
  line-height: 22px
</style>
