<template>
  <div class="home_wrap">
    <div class="home_tab">
      <div :class="['tab', $route.meta.tabActive === 0 ? 'active' : '']" @click="changeTab(0)">
        <img src="../../assets/实时.png" alt>
        <span>实时</span>
      </div>
      <div :class="['tab', $route.meta.tabActive === 1 ? 'active' : '']" @click="changeTab(1)">
        <img src="../../assets/轨迹.png" alt>
        <span>轨迹</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "locusMonitor",
  data() {
    return {};
  },
  methods: {
    changeTab(value) {
      if (value === 0) {
        this.$router.push("/locusMonitor/current");
      } else if (value === 1) {
        this.$router.push("/locusMonitor/locus");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.home_wrap {
  width: 0;
  height: 0;
  .home_tab {
    z-index: 5;
    position: fixed;
    left: 30px;
    top: 100px;
    width: 267px;
    height: 46px;
    background: url("../../assets/img/handlebanner/默认背景@3x.png") no-repeat
      left center;
    .tab {
      cursor: pointer;
      width: 133px;
      display: inline-block;
      text-align: center;
      background: url("../../assets/img/handlebanner/未选中@3x.png") no-repeat
        center 8px;
      img {
        vertical-align: middle;
      }
      span {
        margin-left: 10px;
        color: #7dbed8;
        font-size: 16px;
        line-height: 46px;
      }
    }
    .active {
      background: url("../../assets/img/handlebanner/选中背景@3x.png") no-repeat
        center center;
      span {
        color: #ffffff;
      }
    }
  }
}
/deep/ .el-select-dropdown__item.hover {
  background: none;
}
</style>
