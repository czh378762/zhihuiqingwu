<template>
  <div class="yichang_wrap">
    <div class="content_wrap box_back">
      <div class="leftTab">
        <p>现场执法监督</p>
        <p>非现场执法监督</p>
        <ul>
          <li
            v-for="(item,ind) in leftMenu"
            :key="ind"
            :class="$route.meta.tabActive === ind?'active':''"
            @click="switchTab(item,ind)"
          >
            <img :src="item.icon">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftMenu: [
        {
          title: "现场执法",
          link: "/enforcementMonitor/enforcementMonitorLive",
          icon: require("../../assets/img/icon/现场执法.png")
        },
        {
          title: "安全带",
          link: "/enforcementMonitor/harness",
          icon: require("../../assets/img/icon/安全带.png")
        },
        {
          title: "超速",
          link: "/enforcementMonitor/overSpeed",
          icon: require("../../assets/img/icon/超速.png")
        },
        {
          title: "现场防护",
          // link: "/enforcementMonitor/protectLive",
          link: "",
          icon: require("../../assets/img/icon/现场防护.png")
        }
      ]
    };
  },
  methods: {
    switchTab(item, ind) {
      this.leftMenuInd = ind;
      if (item.link) {
        this.$router.push({ path: item.link });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.yichang_wrap {
  position: fixed;
  left: 90px;
  right: 90px;
  top: 104px;
  bottom: 62px;
  .content_wrap {
    width: 100%;
    height: 100%;
    .leftTab {
      position: absolute;
      top: 50%;
      transform: translateY(calc(-50% + 18px));
      left: -70px;
      p {
        width: 126px;
        height: 26px;
        background: rgba(4, 41, 71, 0.6);
        border: 1px solid #6a9bff;
        border-radius: 4px;
        font-size: 13px;
        color: #ffa651;
        text-align: center;
        line-height: 24px;
        position: absolute;
        left: 50%;
        margin-left: -63px;
        &:nth-child(1) {
          top: -36px;
        }
        &:nth-child(2) {
          top: 76px;
        }
      }
      li {
        width: 147px;
        height: 46px;
        background: url("../../assets/img/handlebanner/异常左侧未选中@3x.png")
          no-repeat center center;
        margin-bottom: 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 18px;
        &:nth-child(1) {
          margin-bottom: 66px;
        }
        &:last-child {
          margin-bottom: 0;
        }
        span {
          display: inline-block;
          margin-left: 20px;
          font-size: 14px;
          font-weight: 400;
          text-shadow: 0px 3px 1px rgba(0, 1, 3, 0.5);
          color: rgba(125, 190, 216, 1);
          line-height: 46px;
          font-family: "Microsoft YaHei";
        }
      }
      .active {
        background: url("../../assets/img/handlebanner/异常左侧选中@3x.png")
          no-repeat center center;
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>
