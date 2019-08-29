<template>
  <div class="box-wp box_back thin minjing" v-bind:style="myStyle">
    <div class="box-header">
      <span class="box-tit">民警</span>
    </div>
    <div class="box-content">
      <div class="clearfix main-info">
        <el-row>
          <el-col :span="10">
            <div class="image-wrapper">
              <img src="../../assets/img/iconImg/p1.png" alt>
            </div>
          </el-col>
          <el-col :span="14" style="padding-top: 8px;">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon12.png" alt>
              </i>
              <span class="infos">{{detailData.mjxm || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon13.png" alt>
              </i>
              <span class="infos">{{detailData.mjjh || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon14.png" alt>
              </i>
              <span class="infos">{{detailData.bmmc || "暂无数据"}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="others">
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon07.png" alt>
          </i>
          <span class="info-label">{{type === 1 ? "违法" : (type === 2 ? "事故" : "核查检录")}}时间</span>
          <span class="infos">{{(type === 1 ? (detailData.wfsj) : (type === 2 ? (detailData.sgfssj) : (detailData.cjsj))) || "暂无数据"}}</span>
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon06.png" alt>
          </i>
          <span class="info-label">{{type === 1 ? "违法" : (type === 2 ? "事故" : "核查检录")}}地点</span>
          <span class="infos">{{(type === 1 ? (detailData.wzddMs) : (type === 2 ? (detailData.sgddms) : (detailData.jcddMs))) || "暂无数据"}}</span>
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon07.png" alt>
          </i>
          <span class="info-label">开单时间</span>
          <span class="infos">{{detailData.cjsj || "暂无数据"}}</span>
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon06.png" alt>
          </i>
          <span class="info-label">开单地点</span>
          <span class="infos">{{detailData.wzddMs || "暂无数据"}}</span>
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon06.png" alt>
          </i>
          <span class="info-label">巡逻车号</span>
          <span class="infos">-</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mj",
  props: ["getStyle", "type", "detailData"],
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
.image-wrapper {
  display: inline-block;
}
.image-wrapper img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.ic {
  margin-right: 8px;
}
.box-tit {
  font-size: 14px;
  color: rgba(255, 204, 102, 1);
  display: inline-block;
}
.infos {
  font-size: 14px;
  display: inline-block;
  color: rgba(255, 255, 255, 1);
}
.info-label {
  font-size: 13px;
  display: inline-block;
  font-weight: 400;
  margin-right: 10px;
  color: rgba(3, 216, 234, 1);
}
.minjing {
  width: 100%;
  height: 100%;
}
.box-tit {
  font-size: 14px;

  color: rgba(255, 204, 102, 1);
}
.minjing .l .image-wrapper {
  width: 100px;
  height: 120px;
}
.el {
  display: flex;
  img {
    display: block;
  }
  .infos {
    flex: 1;
    line-height: 18px;
    align-self: flex-start;
    overflow: hidden;
  }
  .info-label {
    line-height: 18px;
  }
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.main-info {
  margin-bottom: 15px;
}
.box-header {
  padding: 15px 10px 10px;
}
.box-content {
  padding: 10px 15px 10px;
  height: calc(100% - 41px);
}
.others {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: calc(100% - 137px);
  .el {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 0;
  }
}
</style>
