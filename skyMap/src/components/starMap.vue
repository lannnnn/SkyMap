<template>
  <div>
    <div>
      <h2 class="row justify-content-center">Your Star Map</h2>
      <p class="row justify-content-center"> Your stargazing location is:&nbsp;&nbsp;&nbsp;({{this.center.lat}}, {{this.center.lng}})</p>
      <div class="time row justify-content-center">current time: {{date}}</div>
      <p class="row justify-content-center"> Sunrise today: &nbsp;&nbsp;{{this.sunRise}}, &nbsp;Sunset today: &nbsp;&nbsp;{{this.sunSet}} &nbsp;(Time in GMT)</p>
    </div>
    <div class="text-center">
        <img :src="this.map" class="img-fluid">
    </div>
    <br>
    <div class="container-xxl">
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Right Ascension</span>
        <input type="text" class="form-control" placeholder="enter a right ascension and declination in the Aim Point boxes. e.g.3h 30m, 3.5h or 52.5" id="lon" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2"> Show stars brighter than magnitude </span>
        <input type="text" class="form-control" placeholder="Only stars brighter than specified by this box will be included in the map. e.g. 6.0" id="limag" aria-describedby="basic-addon2">
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2"> Show names for magnitude</span>
        <input type="text" class="form-control" placeholder="Only named stars brighter than the given magnitude will show the name to the right of the star icon in the map. e.g. 3.0" id="starnm" aria-describedby="basic-addon3">
        <span class="input-group-text" id="basic-addon4"> and brighter</span>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2"> Bayer/Flamsteed codes for mag.</span>
        <input type="text" class="form-control" placeholder="Bayer, Flam., or letter desiged to be shown for stars brighter than the given mag., plot to the right of the star unless its name is also shown." id="starbm" aria-describedby="basic-addon3">
        </div>
        <div style="text-align:center">
            <button type="button" class="btn btn-dark"
                @click='updateMap'
            >
                Update Star Map
            </button>
            <button type="button" class="btn btn-dark" style="margin-left:20px;"
                @click='back'
            >
                Reset pin
            </button>
        </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
    const calcSun = require('./script/calcSun');
    const loadMap = require('./script/starMap');
    export default {
        data(){
            return {
                center:{},
                sunRise: "",
                sunSet: "",
                date: new Date(),
                map: "",
            }
        },
        mounted(){
            let _this = this; 
            this.timer = setInterval(() => {
                _this.date = new Date().toUTCString() ; 
            }, 1000)
        },
        beforeDestroy() {
            if (this.timer) {
            clearInterval(this.timer); 
            }
        },
        created() {
            this.getRouterData()
            this.sunrise(this.center.lat, this.center.lng)
            this.sunset(this.center.lat, this.center.lng)
            this.updateMap()
        },
        methods: {
            sunrise: function(latitude, longitude) {
                this.sunRise = calcSun.calcnew(1, latitude, longitude);
            },
            sunset: function(latitude, longitude) {
                this.sunSet = calcSun.calcnew(2, latitude, longitude);
            },
            getRouterData() {
                this.center.lat = JSON.parse(this.$route.query.lat);
                this.center.lng = JSON.parse(this.$route.query.lng);
            },
            back() {
                this.$router.push({
                    path:'/', 
                    query: {
                    'lat': JSON.stringify(this.center.lat),
                    'lng': JSON.stringify(this.center.lng),
                    }
                })
            },
            updateMap() {
                var lon = 0;
                var limag = 6.0;
                var starnm = 3.0;
                var starbm = 5.0;
                if(document.getElementById("lon")!=null && (lon == 'undefined' || !lon || !/[^\s]/.test(lon))) {
                    lon = document.getElementById("lon").value;
                }
                if(document.getElementById("limag")!=null && (limag == 'undefined' || !limag || !/[^\s]/.test(limag))) {
                    limag = document.getElementById("limag").value;
                }
                if(document.getElementById("starnm")!=null && (starnm == 'undefined' || !starnm || !/[^\s]/.test(starnm))) {
                    starnm = document.getElementById("starnm").value;
                }
                if(document.getElementById("starbm")!=null && (starbm == 'undefined' || !starbm || !/[^\s]/.test(starbm))) {
                    starbm = document.getElementById("starbm").value;
                }
                var payload = loadMap.combinePayload(lon, limag, starnm, starbm);
                this.$axios.post("/map/cgi-bin/Yourtel", payload).then(res=>{
                    var url = loadMap.requestUrl(res);
                    this.map = "https://www.fourmilab.ch" + url;
                })
            },
        }
    }
</script>