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
            path: '/',   // 跳转路径
            name: 'GoogleMap',    // 名称
            component: GoogleMap  // 组件
        },
        {
            path: '/starMap',
            name: 'starMap',
            component: starMap
        }
    ]
});

