<template>
  <div class="box-wp box_back thin weifa b-yellow" v-bind:style="myStyle">
    <div class="box-header">
      <span class="box-tit">违法内容</span>
    </div>
    <div class="box-content">
      <el-row>
        <el-col :span="12">
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="info-label">违法代码</span>
            <span class="infos">{{detailData.wfxw}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="info-label">违法类别</span>
            <span class="infos">-</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="info-label">违法时间</span>
            <span class="infos">{{detailData.wfsj}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/icon/common.png" alt>
            </i>
            <span class="info-label">违法地点</span>
            <span class="infos">{{detailData.wzddMs}}</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="video-w">
            <div class="v-h">
              <span>执法记录仪</span>
              <div class="image-wrapper pull-right" style="padding: 6px 9px 0 0;">
                <img src="../../assets/img/icon/zoom.png" alt>
              </div>
            </div>
            <div class="video-content">
              <div class="image-wrapper">
                <img src="../../assets/img/minjing/p3.png" alt>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "illegalcontent",
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
.dangshiren-pic {
  text-align: center;
}
.image-wrapper {
  display: inline-block;
}
.image-wrapper img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.ic {
  margin-right: 6px;
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
  margin-right: 7px;
  color: rgba(3, 216, 234, 1);
}
.weifa {
  width: 1098px;
  height: 321px;
}
.box-tit {
  font-size: 14px;

  color: rgba(255, 204, 102, 1);
}
.video-w {
  border-radius: 5px;
  overflow: hidden;
  margin-left: 60px;
  width: 420px;
  height: 180px;
}
.video-w .v-h {
  width: 420px;
  background: #1a416a;
  height: 30px;
}
.video-w .v-h span {
  color: #fff;
  display: inline-block;
  padding: 6px;
}
.video-content {
  height: 230px;
  width: 420px;
}
.el {
  display: flex;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  img {
    display: block;
  }
  .info-label {
    line-height: 18px;
  }
  .infos {
    line-height: 18px;
    flex: 1;
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
}
</style>
