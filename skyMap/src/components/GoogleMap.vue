<template>
  <div>
    <div>
      <h2>Search and add a pin where you want to stargazing</h2>
      <GmapAutocomplete
        @place_changed='setPlace'
      />
      <button
        @click='addMarker'
      >
        Add
      </button>
    </div>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
const calcSun = require('./script/calcSun');
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 11.1216, lng: 46.0759 },
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.geolocate();
  },
  
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        if(this.markers.length >=1) {
          this.markers = [];
        }
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
        this.sunrise(marker.lat, marker.lng);
        this.sunset(marker.lat, marker.lng);
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    sunrise: function(latitude, longitude) {
      var sunStr = calcSun.calcnew(1, latitude, longitude);
      console.log(sunStr);
    },
    sunset: function(latitude, longitude) {
      var sunStr = calcSun.calcnew(2, latitude, longitude);
      console.log(sunStr);
    }
  },
};
</script>