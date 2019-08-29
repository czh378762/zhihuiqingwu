<template>
  <div class="shigu flex">
    <div class="lf">
      <h6 style="margin-bottom:20px;">事故详情</h6>
      <div class="el flex">
        <div class="info flex-align-top flex flex-align-center">
          <img class="ic" src="../assets/img/iconImg/icon07.png" alt>
          <span class="info-label">事故时间</span>
        </div>
        <span class="infos">{{detailData.sgfssj || "暂无数据"}}</span>
      </div>
      <div class="el flex">
        <div class="info flex-align-top flex flex-align-center">
          <img class="ic" src="../assets/img/iconImg/icon06.png" alt>
          <span class="info-label">事故地点</span>
        </div>
        <span class="infos">{{detailData.sgddms || "暂无数据"}}</span>
      </div>
      <div class="el flex">
        <div class="info flex-align-top flex flex-align-center">
          <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
          <span class="info-label">事故内容</span>
        </div>
        <span class="infos">{{detailData.sgss || "暂无数据"}}</span>
      </div>
      <div class="el flex">
        <div class="info flex-align-top flex flex-align-center">
          <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
          <span class="info-label">事故责任</span>
        </div>
        <span class="infos">{{relativeCarList.length ? relativeCarList[0].sgzr : "暂无数据"}}</span>
      </div>
    </div>
    <div class="rg flex1">
      <div class="box_back">
        <div class="left_box">
          <ul>
            <li v-for="(item, index) in relativeCarList" :key="index" :class="activeIndex === index ? 'active' : ''" @click="selectCar(item, index)">
              {{item.hphm}}
            </li>
          </ul>
        </div>
        <div class="rg_cont flex">
          <div class="cont_lf">
            <div class="el" style="display: block;">
              <div class="flex">
                <div class="info flex flex-align-top">
                  <img class="ic" src="../assets/img/iconImg/icon03.png" alt>
                  <span class="info-label">号牌号码</span>
                </div>
                <span class="infos">{{activeData.hphm || "暂无数据"}}</span>
              </div>
              <img style="margin:4px 0 0 30px;" src="../assets/img/iconImg/card-pic.png" alt>
            </div>
            <div class="el flex">
              <div class="info flex flex-align-top">
                <img class="ic" src="../assets/img/iconImg/icon02.png" alt>
                <span class="info-label">车辆状态</span>
              </div>
              <span class="infos">{{activeData.clzt || "暂无数据"}}</span>
            </div>
            <div class="el flex">
              <div class="info flex flex-align-top">
                <img class="ic" src="../assets/img/iconImg/icon07.png" alt>
                <span class="info-label">年审期限</span>
              </div>
              <span class="infos">{{activeData.yxqz || "暂无数据"}}</span>
            </div>
            <div class="el flex">
              <div class="info flex flex-align-top">
                <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
                <span class="info-label">号牌种类</span>
              </div>
              <span class="infos">{{activeData.hpzl || "暂无数据"}}</span>
            </div>
            <div class="el flex">
              <div class="info flex flex-align-top">
                <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
                <span class="info-label">车身颜色</span>
              </div>
              <span class="infos">{{activeData.csys || "暂无数据"}}</span>
            </div>
            <div class="el flex">
              <div class="info flex flex-align-top">
                <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
                <span class="info-label">车辆类型</span>
              </div>
              <span class="infos">{{activeData.cllx || "暂无数据"}}</span>
            </div>
            <div class="el flex">
              <div class="info flex flex-align-top">
                <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
                <span class="info-label">车辆品牌</span>
              </div>
              <span class="infos">{{activeData.clpp1 || "暂无数据"}}</span>
            </div>
          </div>
          <div class="cont_rg flex1">
            <h6>当事人</h6>
            <div class="ds flex flex-align-center">
              <img src="../assets/img/iconImg/p2.png" alt>
              <div class="ds_cont flex1">
                <div class="el flex">
                  <div class="info flex flex-align-center flex-align-top">
                    <img class="ic" src="../assets/img/iconImg/icon12.png" alt>
                    <span class="info-label">当事人</span>
                  </div>
                  <span class="infos">{{activeData.xm || "暂无数据"}}</span>
                </div>
                <div class="el flex">
                  <div class="info flex flex-align-center flex-align-top">
                    <img class="ic" src="../assets/img/iconImg/icon09.png" alt>
                    <span class="info-label">身份证号码</span>
                  </div>
                  <span class="infos">{{activeData.sfzh || "暂无数据"}}</span>
                </div>
                <div class="el flex">
                  <div class="info flex flex-align-center flex-align-top">
                    <img class="ic" src="../assets/img/iconImg/icon08.png" alt>
                    <span class="info-label">联系方式</span>
                  </div>
                  <span class="infos">{{activeData.lxdh || "暂无数据"}}</span>
                </div>
                <div class="el flex">
                  <div class="info flex flex-align-center flex-align-top">
                    <img class="ic" src="../assets/img/iconImg/icon01.png" alt>
                    <span class="info-label">驾驶证档案编号</span>
                  </div>
                  <span class="infos">{{activeData.dabh || "暂无数据"}}</span>
                </div>
                <div class="el flex">
                  <div class="info flex flex-align-center flex-align-top">
                    <img class="ic" src="../assets/img/iconImg/icon13.png" alt>
                    <span class="info-label">准驾车型</span>
                  </div>
                  <span class="infos">{{activeData.zjcx || "暂无数据"}}</span>
                </div>
                <div class="el flex">
                  <div class="info flex flex-align-center flex-align-top">
                    <img class="ic" src="../assets/img/iconImg/icon05.png" alt>
                    <span class="info-label">计分情况</span>
                  </div>
                  <span class="infos">-</span>
                </div>
              </div>
            </div>
            <h6 style="margin:10px 0;">关联违法</h6>
            <div class="detail flex flex-align-center flex-align-top">
              <img style="margin-right:10px;" src="../assets/img/iconImg/icon04.png" alt>
              <span class="infos">-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "feiqinwushigu",
  props: {
    detailData: {
      default: () => {
        return {};
      }
    },
    relativeCarList: {
      default: () => {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {
      activeIndex: 0
    };
  },
  computed: {
    activeData() {
      if (this.relativeCarList.length) {
        return this.relativeCarList[this.activeIndex];
      } else {
        return {};
      }
    }
  },
  methods: {
    selectCar(item, index) {
      this.activeIndex = index;
      this.carDetail = item;
    }
  }
};
</script>
<style lang="scss" scoped>
.shigu {
  width: 100%;
  height: 100%;
  padding: 20px;
  h6 {
    font-size: 14px;
    color: #ffcc66;
    margin-bottom: 4px;
  }
  .lf {
    width: 310px;
    .info {
      width: 100px;
    }
  }
  .el {
    margin-bottom: 8px;
    display: flex;
    img {
      display: block;
    }
    .info {
      line-height: 18px;
      font-size: 14px;
      color: #03d8ea;
      margin-left: 14px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .infos {
    flex: 1;
    font-size: 14px;
    color: #ffffff;
    line-height: 18px;
  }
  .ic {
    margin-right: 10px;
  }
  .info-label {
    font-size: 14px;
    color: #03d8ea;
  }
  .rg {
    margin-left: 50px;
    > div {
      border: 1px solid #4266af;
      height: 100%;
      position: relative;
      .left_box {
        position: absolute;
        left: -40px;
        top: 50%;
        width: 80px;
        transform: translateY(-50%);
        li {
          height: 28px;
          line-height: 28px;
          cursor: pointer;
          text-align: center;
          font-size: 14px;
          color: #96d1e9;
          background: linear-gradient(
            -39deg,
            rgba(7, 34, 62, 1),
            rgba(32, 87, 144, 1)
          );
          border: 1px solid rgba(52, 113, 175, 1);
          opacity: 1;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .active {
          background: linear-gradient(
            90deg,
            rgba(24, 67, 113, 1),
            rgba(55, 196, 255, 1),
            rgba(24, 67, 113, 1)
          );
          border: 1px solid rgba(255, 117, 106, 1);
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
          font-weight: bold;
          color: #ffffff;
        }
      }
      .rg_cont {
        padding: 20px;
        padding-left: 40px;
        .cont_lf {
          .info {
            min-width: 100px;
          }
        }
        .cont_rg {
          margin-left: 10px;
          padding-left: 10px;
          .ds {
            border-bottom: solid 1px #366492;
            padding-bottom: 10px;
          }
          .ds_cont {
            margin-left: 10px;
            .info {
              width: 130px;
            }
            .el {
              margin-bottom: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
