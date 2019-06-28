<template>
  <div class="yichang_wrap">
    <div class="content_wrap box_back">
        <div class="leftTab">
            <ul>
                <li v-for="(item,ind) in leftMenu" :key="ind" :class="leftMenuInd==ind?'active':''" @click="switchTab(item,ind)">
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
  name: "abnormalData",
  data() {
    return {
      leftMenu: [
        { title: "非勤务时间执勤", link: "/abnormalData/overtimeEnforcement" },
        { title: "窗口处理异常", link: "/abnormalData/abnormalWindowHandle" },
        {
          title: "省际卡点执法异常",
          link: "/abnormalData/abnormalProvincialEnforcement"
        }
      ],
      leftMenuInd: 0
    };
  },
  methods: {
    switchTab(item, ind) {
      this.leftMenuInd = ind;
      this.$router.push({ path: item.link });
    }
  }
};
</script>
<style lang="scss" scoped>
.yichang_wrap {
  position: fixed;
  left: 92px;
  right: 92px;
  top: 104px;
  bottom: 62px;
  .content_wrap {
    width: 100%;
    height: 100%;
    .leftTab {
      position: absolute;
      top: 100px;
      left: -70px;
      li {
        width: 147px;
        height: 46px;
        background: url("../../assets/img/handlebanner/异常左侧未选中@3x.png")
          no-repeat center center;
        margin-bottom: 15px;
        cursor: pointer;
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
