<template>
  <div>
    <div>
      <h2 style="margin-left: 5px;">Search and add a pin where you want to stargazing</h2>
      <GmapAutocomplete style="margin-left: 25px;"
        @place_changed='setPlace'
      />
      <button type="button" class="btn btn-dark" style="margin-left: 5px;"
        @click='addMarker'
      >
        Pin!
      </button>
    </div>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 600px;'
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
    </GmapMap>
    <div class = "text-center">
      <button type="button" class="btn btn-dark" style="margin-top: 15px;"
        @click='starGaze'
      >
        Start Stargazing!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: {},
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.getRouterData();
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
    starGaze() {
      this.$router.push({
        path:'/starMap', 
        query: {
          'lat': JSON.stringify(this.center.lat),
          'lng': JSON.stringify(this.center.lng),
        }
      })
    },
    getRouterData() {
      console.log(this.$route.query.lat === undefined)
      if(this.$route.query.lat === undefined){
        this.center ={ lng: 11.1216, lat: 46.0759 }
        this.geolocate()
      }
      else {
        this.center.lat = JSON.parse(this.$route.query.lat);
        this.center.lng = JSON.parse(this.$route.query.lng);
      }
    },
  },
};
</script>