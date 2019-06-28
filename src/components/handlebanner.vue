<template>
  <div class="handle-banner-wp box_back">
    <div class="handle-banner">
      <ul class="clearfix">
        <li v-for="(item,ind) in list" :key="ind" @click="goto(item, ind)" :class="$route.meta.navActive === ind ? 'active' : ''">
          <div class="el">
            <div class="image-wrapper">
              <img :src="item.icon" alt>
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
          icon: require("../assets/img/handlebanner/car-small.png")
        },
        {
          title: "执勤执法监督",
          link: "/enforcementMonitor",
          value: "执勤执法监督",
          isLink: true,
          icon: require("../assets/img/handlebanner/dunpai.png")
        },
        {
          title: "异常数据",
          link: "/abnormalData",
          value: "异常数据",
          isLink: true,
          icon: require("../assets/img/handlebanner/yichang.png")
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
  padding: 7px;
  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  width: 600px;
  height: 72px;
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
        padding: 5px 23px;
        flex: 1;
        height: 100%;
        border-right: 1px solid #3893e6;
        &:hover {
          background: url("../assets/img/handlebanner/beseled.png") no-repeat
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
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          .tit-name {
            color: rgb(218, 216, 216);
            text-shadow: 0px 0px 6px rgba(219, 219, 219, 0.8);
          }
        }
      }
      .active {
        background: url("../assets/img/handlebanner/beseled.png") no-repeat
          center;
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
