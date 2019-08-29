<template>
  <div class="jiancha">
    <div class="left">
      <p class="title">核录内容</p>
      <div class="el">
        <i>
          <img class="ic" src="../assets/img/iconImg/icon06.png" alt>
        </i>
        <span class="label">核录地点</span>
      </div>
      <p class="location">{{detailData.jcddMs}}</p>
    </div>
    <div class="center">
      <p class="title">当事车辆</p>
      <div class="el">
        <i>
          <img class="ic" src="../assets/img/iconImg/icon03.png" alt>
        </i>
        <span class="label">号牌号码</span>
        <span class="infos">{{detailData.hphm || "暂无数据"}}</span>
      </div>
      <div class="img">
        <img class="ic" src="../assets/img/iconImg/card-pic.png" alt>
      </div>
      <div class="el">
        <i>
          <img class="ic" src="../assets/img/iconImg/icon02.png" alt>
        </i>
        <span class="label">车辆状态</span>
        <span class="infos">{{detailData.clzt || "暂无数据"}}</span>
      </div>
      <div class="el">
        <i>
          <img class="ic" src="../assets/img/iconImg/icon07.png" alt>
        </i>
        <span class="label">年审期限</span>
        <span class="infos">{{detailData.yxqz || "暂无数据"}}</span>
      </div>
      <div class="el">
        <i>
          <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
        </i>
        <span class="label">号牌种类</span>
        <span class="infos">{{detailData.hpzl || "暂无数据"}}</span>
      </div>
      <div class="el">
        <i>
          <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
        </i>
        <span class="label">车身颜色</span>
        <span class="infos">{{detailData.csys || "暂无数据"}}</span>
      </div>
      <div class="el">
        <i>
          <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
        </i>
        <span class="label">车辆类型</span>
        <span class="infos">{{detailData.cllx || "暂无数据"}}</span>
      </div>
      <div class="el">
        <i>
          <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
        </i>
        <span class="label">车辆品牌</span>
        <span class="infos">{{detailData.clpp1 || "暂无数据"}}</span>
      </div>
    </div>
    <div class="right">
      <p class="title">当事车辆</p>
      <div class="top">
        <div class="t_l">
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="label">是否为"两客一危"</span>
            <span class="infos">-</span>
          </div>
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="label">荷载</span>
            <span class="infos">{{detailData.hdzzl || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="label">实载</span>
            <span class="infos">-</span>
          </div>
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="label">本月检查次数</span>
            <span class="infos">-</span>
          </div>
        </div>
        <div class="t_c">
          <img class="ic" src="../assets/img/iconImg/p2.png" alt>
        </div>
        <div class="t_r">
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon12.png" alt>
            </i>
            <span class="label">当事人</span>
            <span class="infos">{{detailData.dsr || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon09.png" alt>
            </i>
            <span class="label">身份证号码</span>
            <span class="infos">{{detailData.jszh || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon08.png" alt>
            </i>
            <span class="label">联系方式</span>
            <span class="infos">{{detailData.lxfs || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon01.png" alt>
            </i>
            <span class="label">驾驶证档案编号</span>
            <span class="infos">{{detailData.dabh || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon13.png" alt>
            </i>
            <span class="label">准驾车型</span>
            <span class="infos">{{detailData.zjcx || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i>
              <img class="ic" src="../assets/img/iconImg/icon05.png" alt>
            </i>
            <span class="label">计分情况</span>
            <span class="infos">{{detailData.kffz || "暂无数据"}}</span>
          </div>
        </div>
      </div>
      <div class="bot">
        <div class="b_t">
          <span>车辆路线</span>
          <i class="line"></i>
        </div>
        <div class="address">-</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "feiqinwujiancha",
  props: {
    detailData: {
      default: () => {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.jiancha {
  width: 100%;
  padding: 20px;
  // 清楚浮动
  &:after {
    display: block;
    overflow: hidden;
    clear: both;
    content: "";
    height: 0;
  }
  .left {
    width: 120px;
    float: left;
    .title {
      width: 100%;
      height: 14px;
      font-size: 14px;
      color: #fc6;
      line-height: 14px;
      margin-bottom: 20px;
    }
    .el {
      display: flex;
      img {
        display: block;
      }
      .label {
        line-height: 18px;
        font-size: 14px;
        color: #03d8ea;
        margin-left: 14px;
      }
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .location {
      line-height: 18px;
      font-size: 14px;
      color: #fff;
    }
  }
  .center {
    width: 200px;
    float: left;
    margin: 0 20px;
    .title {
      width: 100%;
      height: 14px;
      font-size: 14px;
      color: #fc6;
      line-height: 14px;
      margin-bottom: 20px;
    }
    .img {
      margin-bottom: 15px;
      padding-left: 46px;
      img {
        display: block;
      }
    }
    .el {
      padding-left: 20px;
      display: flex;
      img {
        display: block;
      }
      .label {
        line-height: 18px;
        font-size: 14px;
        color: #03d8ea;
        margin-left: 8px;
        margin-right: 15px;
      }
      .infos {
        flex: 1;
        line-height: 18px;
        font-size: 14px;
        color: #fff;
      }
      margin-bottom: 13px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .right {
    width: calc(100% - 360px);
    float: right;
    .title {
      width: 100%;
      height: 14px;
      font-size: 14px;
      color: #fc6;
      line-height: 14px;
    }
    .top {
      width: 100%;
      height: 176px;
      display: flex;
      .t_l {
        width: 240px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .el {
          padding-left: 20px;
          display: flex;
          img {
            display: block;
          }
          .label {
            line-height: 18px;
            font-size: 14px;
            color: #03d8ea;
            margin-left: 8px;
            margin-right: 15px;
            width: 112px;
          }
          .infos {
            flex: 1;
            line-height: 18px;
            font-size: 14px;
            color: #fff;
          }
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .t_c {
        width: 101px;
        height: 100%;
        display: flex;
        align-items: center;
        margin: 0 20px;
        img {
          display: block;
        }
      }
      .t_r {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .el {
          display: flex;
          img {
            display: block;
          }
          .label {
            width: 100px;
            line-height: 18px;
            font-size: 14px;
            color: #03d8ea;
            margin-left: 8px;
            margin-right: 15px;
          }
          .infos {
            flex: 1;
            line-height: 18px;
            font-size: 14px;
            color: #fff;
          }
          // margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    .bot {
      width: 100%;
      margin-top: 8px;
      .b_t {
        width: 100%;
        height: 14px;
        display: flex;
        padding-left: 20px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        span {
          font-size: 14px;
          line-height: 14px;
          color: #03d8ea;
        }
        .line {
          display: block;
          width: calc(100% - 240px);
          height: 1px;
          background: #366492;
        }
      }
      .address {
        font-size: 14px;
        color: #fff;
        line-height: 18px;
        padding-left: 20px;
      }
    }
  }
}
</style>
