<template>
  <div class="box-wp box_back thin weifa b-yellow" v-bind:style="myStyle">
    <div class="box-content">
      <div class="detail">
        <p class="title">事故详情</p>
        <div class="content">
          <div class="line">
            <img src="../../assets/img/minjing/divlines.png" alt>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="info-label">事故时间</span>
            <span class="infos">{{detailData.sgfssj}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="info-label">事故地点</span>
            <span class="infos">{{detailData.sgddms}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="info-label">事故内容</span>
            <span class="infos">{{detailData.sgss}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="info-label">事故责任</span>
            <span class="infos">{{responsibility}}</span>
          </div>
        </div>
      </div>
      <div class="relative">
        <p class="title">关联详情</p>
        <div class="content">
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="infos">-</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="infos">-</span>
          </div>
          <div class="video-w">
            <div class="v-h">
              <span>执法记录仪</span>
              <div class="image-wrapper pull-right">
                <img src="../../assets/img/icon/zoom.png" alt>
              </div>
            </div>
            <div class="video-content">
              <div class="image-wrapper">
                <img src="../../assets/img/minjing/p3.png" alt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "illegalcontent",
  props: ["getStyle", "detailData", "responsibility"],
  components: {},
  mouted() {},
  data() {
    return {
      myStyle: this.getStyle
    };
  }
};
</script>
<style lang="scss" scoped>
.box-wp {
  width: 100%;
  height: 100%;
  .box-content {
    height: 100%;
    padding: 20px 16px;
    .detail {
      width: calc(50% - 20px);
      float: left;
      height: 100%;
      .title {
        width: 100%;
        height: 14px;
        font-size: 14px;
        line-height: 14px;
        color: #fc6;
        text-shadow: 0 3px 3px rgba(18, 8, 116, 0.5);
      }
      .content {
        width: 100%;
        height: calc(100% - 14px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        position: relative;
        .line {
          height: 100%;
          position: absolute;
          top: 0;
          right: -20px;
          width: 1px;
          img {
            width: 1px;
            height: 100%;
          }
        }
        .el {
          margin-bottom: 20px;
          display: flex;
          img {
            display: block;
          }
          &:last-child {
            margin-bottom: 0;
          }
          .ic {
            margin-right: 10px;
          }
          .info-label {
            font-size: 13px;
            line-height: 18px;
            color: #03d8ea;
            margin-right: 20px;
          }
          .infos {
            flex: 1;
            font-size: 14px;
            color: #fff;
            line-height: 18px;
          }
        }
      }
    }
    .relative {
      width: calc(50% - 20px);
      height: 100%;
      float: right;
      .title {
        width: 100%;
        height: 14px;
        font-size: 14px;
        line-height: 14px;
        color: #fc6;
        text-shadow: 0 3px 3px rgba(18, 8, 116, 0.5);
      }
      .content {
        width: 100%;
        height: calc(100% - 14px);
        width: 100%;
        height: calc(100% - 14px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 30px;
        .el {
          display: flex;
          .ic {
            margin-right: 10px;
          }
          .info-label {
            font-size: 13px;
            line-height: 18px;
            color: #03d8ea;
            margin-right: 20px;
          }
          .infos {
            flex: 1;
            font-size: 14px;
            color: #fff;
            line-height: 18px;
          }
        }
        .video-w {
          width: 100%;
          height: 158px;
          .v-h {
            width: 100%;
            height: 30px;
            background: #1a416a;
            padding: 0 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              font-size: 14px;
              color: #fff;
            }
            div {
              cursor: pointer;
            }
          }
          .video-content {
            width: 100%;
            height: calc(100% - 30px);
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
