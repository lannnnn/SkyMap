import Vue from 'vue'
import Router from 'vue-router'
import GoogleMap from '../components/GoogleMap'
import starMap from '../components/starMap'

Vue.use(Router);

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
    routes: [
        {
            path: '/',   
            name: 'GoogleMap',   
            component: GoogleMap 
        },
        {
            path: '/starMap',
            name: 'starMap',
            component: starMap
        },
    ],
});

