<template>
  <div class="box-wp box_back carinitem thin b-red" v-bind:style="myStyle">
    <div class="box-header">
      <span class="box-tit">当事车辆</span>
    </div>
    <div class="box-content">
      <div class="clearfix main-info">
        <el-row>
          <el-col :span="12" style="margin-bottom: 15px;">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon03.png" alt>
              </i>
              <span class="info-label">号牌号码</span>
              <span class="infos">{{detailData.hphm || "暂无数据"}}</span>
            </div>
            <div class="el" style="height: 27px;">
              <div class="cardBox">
                <card :platNum="detailData.hphm"></card>
              </div>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon02.png" alt>
              </i>
              <span class="info-label">车辆状态</span>
              <span class="infos">{{detailData.clzt || "暂无数据"}}</span>
            </div>
            <div class="el" style="margin-bottom: 15px;">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon07.png" alt>
              </i>
              <span class="info-label">年审期限</span>
              <span class="infos">{{detailData.yxqz || "暂无数据"}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon04.png" alt>
              </i>
              <span class="info-label">号牌种类</span>
              <span class="infos">{{detailData.hpzl || "暂无数据"}}</span>
            </div>
            <div class="el" style="height: 27px;">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon04.png" alt>
              </i>
              <span class="info-label">车身颜色</span>
              <span class="infos">{{detailData.csys || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon04.png" alt>
              </i>
              <span class="info-label">车辆类型</span>
              <span class="infos">{{detailData.cllx || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon04.png" alt>
              </i>
              <span class="info-label">车辆品牌</span>
              <span class="infos">{{detailData.clpp1 || "暂无数据"}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="image-wrapper divline-pic">
        <img src="../../assets/img/iconImg/divline.png" alt>
      </div>
      <div class="details">
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon12.png" alt>
          </i>
          <span class="info-label">车辆所有人</span>
          <span class="infos" style="flex: none; margin-right: 10px;">{{detailData.syr || "暂无数据"}}</span>
          <!-- <i class="ic">
            <img src="../../assets/img/icon/boy.png" alt>
          </i> -->
        </div>
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon09.png" alt>
          </i>
          <span class="info-label">身份证号码</span>
          <span class="infos">-</span>
        </div>
        <!-- <div class="el">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon10.png" alt>
          </i>
          <span class="info-label">手机号码</span>
          <span class="infos">-</span>
        </div> -->
        <div class="el">
          <i class="ic">
            <img src="../../assets/img/iconImg/icon08.png" alt>
          </i>
          <span class="info-label">联系方式</span>
          <span class="infos">-</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import card from "@/components/card";
export default {
  name: "carinitem",
  props: ["getStyle", "detailData"],
  components: { card },
  data() {
    return {
      myStyle: this.getStyle
    };
  },
  filters: {
    timeFormatter(time) {
      if (time) {
        let date = new Date(time);
        return this.$moment(date).format("YYYY-MM-DD");
      } else {
        return "-";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.image-wrapper {
  display: inline-block;
}
.divline-pic {
  position: absolute;
  top: 233px;
}
.image-wrapper img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.carnum-pic {
  width: 138px;
  height: 27px;
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
.carinitem {
  width: 100%;
  height: 100%;
}
.box-tit {
  font-size: 14px;
}
.el {
  margin-bottom: 20px;
  height: 18px;
  display: flex;
  align-items: center;
  .cardBox {
    width: 138px;
    height: 27px;
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
  &:last-child {
    margin-bottom: 0;
  }
}
.box-header {
  padding: 15px 10px 10px;
}
.box-content {
  padding: 10px 15px 10px;
}
</style>
