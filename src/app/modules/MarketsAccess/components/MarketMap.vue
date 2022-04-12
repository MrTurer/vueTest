<template>
  <div class="map-wrapper">
    <div>
      <div id="mapContainer"></div>
    </div>
    <div class="market-access__type-wrapper">
      <div
          :class="{ active: !taxActive }"
          @click="mapTypeChange(false)"
          class="market-access__type-item"
      >
        <div class="market-access__type-item_color green"></div>
        <p>Ограничения</p>
      </div>
      <div
          :class="{ active: taxActive }"
          @click="mapTypeChange(true)"
          class="market-access__type-item"
      >
        <div class="market-access__type-item_color blue"></div>
        <p>Пошлины</p>
      </div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import worldMap from "../data/custom.geo.json";
import router from "@/app/app-routes";

export default {
  name: "app-market-access-map",
  data() {
    return {
      taxActive: true,
      center: [40, 0],
      world: worldMap,
      status: 200,
      map: null,
    };
  },
  methods: {
    styleMap(feature) {
      let color = "#E3E3E3";
      const country = (feature.properties.countryStatus = Math.floor(
          Math.random() * 12,
      ));
      switch (country) {
        case 0:
          if (this.taxActive) {
            color = "#E3E3E3";
          } else {
            color = "#CEFF9D";
          }
          break;
        case 1:
          if (this.taxActive) {
            color = "#99CEFF";
          } else {
            color = "#A7E541";
          }
          break;
        case 2:
          if (this.taxActive) {
            color = "#74BCFF";
          } else {
            color = "#00DC7D";
          }
          break;
        case 3:
          if (this.taxActive) {
            color = "#309CFF";
          } else {
            color = "#41B619";
          }
          break;
        case 4:
          if (this.taxActive) {
            color = "#0081F9";
          } else {
            color = "#008736";
          }
          break;
        case 5:
          if (this.taxActive) {
            color = "#0264BE";
          } else {
            color = "#004156";
          }
          break;
        case 6:
          if (this.taxActive) {
            color = "#0061BB";
          } else {
            color = "#E3E3E3";
          }
          break;
        case 7:
          if (this.taxActive) {
            color = "#0061BB";
          } else {
            color = "#48CFAF";
          }
          break;
        case 8:
          if (this.taxActive) {
            color = "#0061BB";
          } else {
            color = "#00848C";
          }
          break;
        case 9:
          if (this.taxActive) {
            color = "#0061BB";
          } else {
            color = "#4D8802";
          }
          break;
        case 10:
          if (this.taxActive) {
            color = "#0061BB";
          } else {
            color = "#1E3C00";
          }
          break;
        default:
          if (this.taxActive) {
            color = "#E3E3E3";
          } else {
            color = "#CEFF9D";
          }
      }
      if (country > 10) {
        color = "#00386C";
      }
      return { color: color };
    },
    onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.name) {
        const content = `
          <p class="country-name">${feature.properties.name}</p>
          <img src="" alt="флаг ${feature.properties.name}">
          <p class="restrictions-link" data-id="${feature.properties.name}">Ограничения</p>
          <p class="taxes-link" data-id="${feature.properties.name}">Пошлины и сборы</p>
        `
        layer.bindPopup(
            content,
            feature.properties.countryStatus.toString(),
        );
        layer.on("mouseup", () => {
          layer.openPopup();
        });
        // layer.on("mouseout", () => {
        //   layer.closePopup();
        // });

      }
    },
    setupLeafletMap: function() {
      if (this.map) {
        this.map.remove()
        this.map = null
      }
      this.map = L.map("mapContainer")
      this.map.setView(this.center, 1.4);

      L.tileLayer("", {
        maxZoom: 5,
        minZoom: 1.4,
      }).addTo(this.map);
      L.geoJSON(this.world, {
        weight: 0.5,
        fillOpacity: 1,
        onEachFeature: this.onEachFeature,
        style: this.styleMap,
      }).addTo(this.map);
    },
    mapTypeChange(taxActive) {
      this.taxActive = taxActive
      this.setupLeafletMap();
    }
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped lang="sass">
@import "./styles/map"
</style>