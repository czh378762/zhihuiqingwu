<template>
  <div class="handle-banner-wp box_back">
    <div class="handle-banner">
      <ul class="clearfix">
        <li v-for="(item,ind) in list" :key="ind" @click="goto(item, ind)" :class="$route.meta.navActive === ind ? 'active' : ''">
          <i class="line"></i>
          <div class="el">
            <div class="image-wrapper">
              <img :src="$route.meta.navActive === ind ? item.iconActive: item.icon" alt>
            </div>
            <span class="tit-name">{{item.title}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "handlebanner",
  components: {},
  data() {
    return {
      list: [
        {
          title: "轨迹监督",
          link: "/locusMonitor",
          value: "车辆运行轨迹",
          isLink: true,
          icon: require("../assets/img/bannerImg/locusMonitor.png"),
          iconActive: require("../assets/img/bannerImg/locusMonitor_active.png")
        },
        {
          title: "执勤执法监督",
          link: "/enforcementMonitor",
          value: "执勤执法监督",
          isLink: true,
          icon: require("../assets/img/bannerImg/enforcement.png"),
          iconActive: require("../assets/img/bannerImg/enforcement_active.png")
        },
        {
          title: "异常数据",
          link: "/abnormalData",
          value: "异常数据",
          isLink: true,
          icon: require("../assets/img/bannerImg/abnormalData.png"),
          iconActive: require("../assets/img/bannerImg/abnormalData_active.png")
        }
        // {
        //   title: "预留模块模块",
        //   link: "",
        //   value: "",
        //   isLink: false,
        //   icon: require("../assets/img/handlebanner/yuliu.png")
        // },
        // {
        //   title: "预留模块模块",
        //   link: "",
        //   value: "",
        //   isLink: false,
        //   icon: require("../assets/img/handlebanner/yuliu.png")
        // },
        // {
        //   title: "预留模块模块",
        //   link: "",
        //   value: "",
        //   isLink: false,
        //   icon: require("../assets/img/handlebanner/yuliu.png")
        // }
      ]
    };
  },
  methods: {
    goto(item) {
      if (!item.isLink) return;
      this.$router.push({ path: item.link });
    }
  }
};
</script>
<style lang="scss" scoped>
.handle-banner-wp {
  z-index: 1;
  padding: 6px;
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  width: 600px;
  height: 88px;
  //background:#2664a0b8;
  border: 1px solid rgba(106, 155, 255, 1) !important;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  background: rgba(15, 61, 106, 0.93) !important;
  border-radius: 8px !important;
  .handle-banner {
    width: 100%;
    height: 100%;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      li {
        cursor: pointer;
        flex: 1;
        height: 100%;
        position: relative;
        &:last-child {
          i {
            display: none;
          }
        }
        i {
          position: absolute;
          right: -0.5px;
          top: 50%;
          width: 1px;
          height: 50px;
          margin-top: -25px;
          background: #3893e6;
        }
        &:hover {
          background: url("../assets/img/bannerImg/beseled.png") no-repeat
            center;
          background-size: 207px 78px;
          .tit-name {
            color: #fff;
            text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.8);
          }
        }
        &:last-child {
          border-right: none;
        }
        .el {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          .tit-name {
            color: rgb(218, 216, 216);
            text-shadow: 0px 0px 6px rgba(219, 219, 219, 0.8);
          }
        }
      }
      .active {
        background: url("../assets/img/bannerImg/beseled.png") no-repeat center;
        background-size: 207px 78px;
        .tit-name {
          color: #fff;
          text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
}
</style>
