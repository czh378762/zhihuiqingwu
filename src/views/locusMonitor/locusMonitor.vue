<template>
  <div class="home_wrap">
    <div class="home_tab">
      <div :class="['tab', $route.meta.tabActive === 0 ? 'active' : '']" @click="changeTab(0)">
        <img :src="$route.meta.tabActive === 0 ? currentActive : currentImg" alt>
        <span>实时</span>
      </div>
      <div :class="['tab', $route.meta.tabActive === 1 ? 'active' : '']" @click="changeTab(1)">
        <img :src="$route.meta.tabActive === 1 ? locusActive : locusImg" alt>
        <span>轨迹</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import currentImg from "@/assets/img/locusImg/current.png";
import currentActive from "@/assets/img/locusImg/current_active.png";
import locusImg from "@/assets/img/locusImg/locus.png";
import locusActive from "@/assets/img/locusImg/locus_active.png";
export default {
  name: "locusMonitor",
  data() {
    return {
      currentImg: currentImg,
      currentActive: currentActive,
      locusImg: locusImg,
      locusActive: locusActive
    };
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
    width: 270px;
    height: 46px;
    background: url("../../assets/img/locusImg/tabBg.png") no-repeat center
      center;
    .tab {
      cursor: pointer;
      width: 135px;
      display: inline-block;
      text-align: center;
      background: url("../../assets/img/locusImg/tabBg2.png") no-repeat 8px 5px;
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
      background: url("../../assets/img/locusImg/tabBg_active.png") no-repeat
        center center;
      background-size: 100% 100%;
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
