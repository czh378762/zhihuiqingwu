<template>
  <div class="box-wp box_back thin dangshiren b-red" v-bind:style="myStyle">
    <div class="box-header">
      <span class="box-tit">当事人</span>
    </div>
    <div class="box-content">
      <div class="clearfix main-info">
        <el-row>
          <el-col :span="24">
            <div class="dangshiren-pic">
              <div class="image-wrapper">
                <img src="../../assets/img/minjing/p2.png" alt>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="others">
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/icon/usrname.png" alt>
          </i>
          <span class="info-label">当事人</span>
          <span class="infos" style="flex: none; margin-right: 10px;">{{detailData.dsr}}</span>
          <!-- <i class="ic">
            <img src="../../assets/img/icon/girl.png" alt>
          </i> -->
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/icon/idcard.png" alt>
          </i>
          <span class="info-label">身份证号码</span>
          <span class="infos">{{detailData.jszh}}</span>
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/icon/tel2.png" alt>
          </i>
          <span class="info-label">联系方式</span>
          <span class="infos">{{detailData.lxfs}}</span>
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/icon/cardnumber.png" alt>
          </i>
          <span class="info-label">驾驶证档案编号</span>
          <span class="infos">-</span>
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/icon/haopaihaoma.png" alt>
          </i>
          <span class="info-label">准驾车型</span>
          <span class="infos">{{detailData.zjcx}}</span>
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/icon/time.png" alt>
          </i>
          <span class="info-label">积分情况</span>
          <span class="infos">-</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "illegalperson",
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
.dangshiren {
  width: 100%;
  height: 100%;
}
.box-tit {
  font-size: 14px;

  color: rgba(255, 204, 102, 1);
}
//   .minjing .l .image-wrapper{
//       width:100px;
//       height:120px;
//   }
.el {
  margin-bottom: 13px;
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
    align-items: center;
    margin-bottom: 0;
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
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
