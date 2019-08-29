<template>
  <div class="box-wp box_back thin heluneirong b-yellow" v-bind:style="myStyle">
    <div class="box-content">
      <div class="detail">
        <p class="title">核录内容</p>
        <div class="content">
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">是否为“两客一危”</span>
            <span class="infos">-</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">荷载</span>
            <span class="infos">{{detailData.hdzzl || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">实载</span>
            <span class="infos">-</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">本月检查次数</span>
            <span class="infos">-</span>
          </div>
        </div>
      </div>
      <div class="detail detail2">
        <p class="title"></p>
        <div class="content">
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">车辆路线</span>
            <span class="infos">-</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "heluneirong",
  props: ["getStyle", "detailData"],
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
          &:last-child {
            margin-bottom: 0;
          }
          img {
            display: block;
          }
          .ic {
            margin-right: 10px;
          }
          .info-label {
            width: 118px;
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
    .detail2 {
      .info-label {
        width: auto !important;
        margin-right: 30px !important;
      }
    }
  }
}
</style>
