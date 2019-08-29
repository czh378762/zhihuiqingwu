import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 是否显示公里桩
    pileShow: false,
    // 标记点
    locusData: [],
    // 轨迹
    polylineData: {},
    // 中心点
    pantoData: [],
    // 清空标志
    locusClear: false,
    // 机构列表
    orgList: []
  },
  mutations: {
    // 显示/隐藏公里桩
    setPileShow(state, data) {
      state.pileShow = data;
    },
    // 设置标记点
    setLocusData(state, data) {
      state.locusData = data || [];
    },
    // 设置中心点
    setPantoData(state, data) {
      state.pantoData = data;
    },
    // 设置轨迹
    setPolylineData(state, data) {
      console.log(data);
      state.polylineData = data || {};
    },
    // 设置清空标志
    setLocusState(state, data) {
      state.locusClear = data;
    },
    // 设置机构列表
    setOrgList(state, data) {
      state.orgList = data || [];
    }
  },
  actions: {}
});
