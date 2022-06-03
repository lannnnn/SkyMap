API used in this project:

light pollution map: https://www.lightpollutionmap.info/ --RESTFUL

sky map: https://www.fourmilab.ch/yoursky/ --RESTFUL

google map API

version and environment control:

github, nodejs

Start:

run `npm install` anywhere if needed

run `npm start` under direction  /SunServer/skyServer, /skyMapServer/skymapserver

run `npm run serve` under direction /skyMap

Main functions:

1. using google map to find a selected position (google map API)
2. using the latitude and the longitude obtained by google map to get the light polution level (light map API), and do analysis, give suggestions
3. using the latitude and the longitude obtained by google map to get the sunrise time and sunset time (calculation by local server)
4. using the latitude and the longitude obtained by google map to get the star map (star map API)
5. enable to customorize the star map (star map API)
6. integrated the star message database, can searching by using the name shown in the star map

