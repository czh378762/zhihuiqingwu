import Vue from "vue";
import Router from "vue-router";

// import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'BQjcGSS5BkFnzgmZHLhxaGGvAitBbCX2'
// })

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/locusMonitor/locusMonitor"),
      redirect: "/locusMonitor"
    },
    {
      // 轨迹监督
      path: "/locusMonitor",
      name: "locusMonitor",
      component: () => import("@/views/locusMonitor/locusMonitor"),
      redirect: "/locusMonitor/current",
      children: [
        {
          path: "/locusMonitor/current",
          component: () => import("@/views/locusMonitor/current"),
          meta: { title: "轨迹监督", tabActive: 0, navActive: 0 }
        },
        {
          path: "/locusMonitor/locus",
          component: () => import("@/views/locusMonitor/locus"),
          meta: { title: "轨迹监督", tabActive: 1, navActive: 0 }
        }
      ]
    },
    {
      // 执勤执法监督
      path: "/enforcementMonitor",
      name: "enforcementMonitor",
      component: () => import("@/views/enforcementMonitor/enforcementMonitor"),
      redirect: "/enforcementMonitor/enforcementMonitorLive",
      children: [
        {
          path: "/enforcementMonitor/enforcementMonitorLive",
          component: () =>
            import("@/views/enforcementMonitor/enforcementMonitorLive"),
          meta: { title: "执勤执法监督", tabActive: 0, navActive: 1 }
        },
        {
          path: "/enforcementMonitor/harness",
          component: () => import("@/views/enforcementMonitor/harness"),
          meta: { title: "执勤执法监督", tabActive: 1, navActive: 1 }
        },
        {
          path: "/enforcementMonitor/overSpeed",
          component: () => import("@/views/enforcementMonitor/overSpeed"),
          meta: { title: "执勤执法监督", tabActive: 2, navActive: 1 }
        },
        {
          path: "/enforcementMonitor/protectLive",
          component: () => import("@/views/enforcementMonitor/harness"),
          meta: { title: "执勤执法监督", tabActive: 3, navActive: 1 }
        }
      ]
    },
    {
      // 异常数据
      path: "/abnormalData",
      name: "abnormalData",
      component: () => import("@/views/abnormalData/abnormalData"),
      redirect: "/abnormalData/overtimeEnforcement",
      children: [
        {
          path: "/abnormalData/overtimeEnforcement",
          component: () => import("@/views/abnormalData/overtimeEnforcement"),
          meta: { title: "异常数据", tabActive: 0, navActive: 2 }
        },
        {
          path: "/abnormalData/abnormalWindowHandle",
          component: () => import("@/views/abnormalData/abnormalWindowHandle"),
          meta: { title: "异常数据", tabActive: 1, navActive: 2 }
        },
        {
          path: "/abnormalData/abnormalProvincialEnforcement",
          component: () =>
            import("@/views/abnormalData/abnormalProvincialEnforcement"),
          meta: { title: "异常数据", tabActive: 2, navActive: 2 }
        }
      ]
    }
  ]
});
