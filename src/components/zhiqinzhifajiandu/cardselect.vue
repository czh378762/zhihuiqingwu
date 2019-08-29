<template>
  <div class="box-wp box_back cardselect thin b-red" v-bind:style="myStyle">
    <div class="imagewrapper"></div>
    <div class="btn-wp">
      <button
        type="button"
        :class="['m-b', 'box_back', oIndex === index ? 'activeBtn' : '']"
        v-for="(item, index) in accidentDetail"
        :key="index"
        @click="btnClick(item, index)"
      >
        <span>{{item.hphm}}</span>
      </button>
    </div>
    <el-row class="detail_content">
      <el-col :span="14" class="car_detail">
        <div class="box-content">
          <div class="clearfix main-info" style="margin-bottom:30px;">
            <el-row :gutter="10">
              <el-col :span="10">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon03.png" alt>
                  </i>
                  <span class="info-label">号牌号码</span>
                  <span class="infos">{{activeData.hphm || "暂无数据"}}</span>
                </div>
                <div class="el" style="margin-bottom: 15px;">
                  <div class="cardBox">
                    <card :platNum="activeData.hphm"></card>
                  </div>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon02.png" alt>
                  </i>
                  <span class="info-label">车辆状态</span>
                  <span class="infos">{{activeData.clzt || "暂无数据"}}</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon07.png" alt>
                  </i>
                  <span class="info-label">年审期限</span>
                  <span class="infos">{{activeData.yxqz || "暂无数据"}}</span>
                </div>
              </el-col>
              <el-col :span="14">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="info-label">号牌种类</span>
                  <span class="infos">{{activeData.hpzl || "暂无数据"}}</span>
                </div>
                <div class="el" style="height: 27px; align-items: center;">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="info-label">车身颜色</span>
                  <span class="infos">{{activeData.csys || "暂无数据"}}</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="info-label">车辆类型</span>
                  <span class="infos">{{activeData.cllx || "暂无数据"}}</span>
                </div>
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon04.png" alt>
                  </i>
                  <span class="info-label">车辆品牌</span>
                  <span class="infos">{{activeData.clpp1 || "暂无数据"}}</span>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="details">
            <el-row :gutter="0">
              <el-col :span="24">
                <div class="el">
                  <i class="ic">
                    <img src="../../assets/img/iconImg/icon12.png" alt>
                  </i>
                  <span class="info-label">车辆所有人</span>
                  <span class="infos">{{activeData.syr || "暂无数据"}}</span>
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
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="10" class="people_detail">
        <div class="box-content">
          <div class="clearfix main-info">
            <el-row>
              <el-col :span="24">
                <div class="dangshiren-pic">
                  <div class="image-wrapper">
                    <img src="../../assets/img/iconImg/p2.png" alt>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="others">
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon12.png" alt>
              </i>
              <span class="info-label">当事人</span>
              <span class="infos" style="flex: none;margin-right: 10px;">{{activeData.xm || "暂无数据"}}</span>
              <!-- <i class="ic">
                <img src="../../assets/img/icon/girl.png" alt>
              </i> -->
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon09.png" alt>
              </i>
              <span class="info-label">身份证号码</span>
              <span class="infos">{{activeData.sfzh || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon08.png" alt>
              </i>
              <span class="info-label">联系方式</span>
              <span class="infos">{{activeData.lxdh || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon01.png" alt>
              </i>
              <span class="info-label">驾驶证档案编号</span>
              <span class="infos">{{activeData.dabh || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon13.png" alt>
              </i>
              <span class="info-label">准驾车型</span>
              <span class="infos">{{activeData.zjcx || "暂无数据"}}</span>
            </div>
            <div class="el">
              <i class="ic">
                <img src="../../assets/img/iconImg/icon05.png" alt>
              </i>
              <span class="info-label">计分情况</span>
              <span class="infos">{{activeData.kffz || "暂无数据"}}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import card from "@/components/card";
export default {
  name: "cardselect",
  props: ["getStyle", "accidentDetail"],
  components: { card },
  mouted() {},
  data() {
    return {
      myStyle: this.getStyle,
      oIndex: 0
    };
  },
  computed: {
    activeData() {
      if (this.accidentDetail.length) {
        return this.accidentDetail[this.oIndex];
      } else {
        return {};
      }
    }
  },
  methods: {
    btnClick(item, index) {
      this.oIndex = index;
      this.$emit("change", item.sgzr);
    }
  }
};
</script>
<style lang="scss" scoped>
.activeBtn {
  background: url("../../assets/img/iconImg/btseled.png") no-repeat center;
  background-size: 200px !important;
}
.btn-wp span {
  color: #fff;
}
.btn-wp {
  width: 100%;
  position: absolute;
  top: -15px;
  margin: auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
.m-b {
  width: 120px;
  height: 30px;
  margin-right: 20px;
  background: #083152c9;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
}
.m-b:hover,
.activeBtn {
  background: url("../../assets/img/iconImg/btseled.png") no-repeat center;
  background-size: 200px !important;
}
.cardselect {
  padding-top: 35px;
  position: relative;
  /* margin-top: 100px; */
}
.dangshiren-pic {
  text-align: center;
}
.image-wrapper {
  display: inline-block;
}
.divline-pic {
  position: absolute;
  top: 218px;
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
  color: rgba(3, 216, 234, 1);
  margin-right: 10px;
}
.cardselect {
  width: 100%;
  height: 100%;
}
.box-tit {
  font-size: 14px;
  color: rgba(255, 204, 102, 1);
}
.el {
  margin-bottom: 15px;
  display: flex;
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
    flex: 1;
    line-height: 18px;
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
  width: 100%;
  height: 100%;
}
.detail_content {
  width: 100%;
  height: 100%;
  .car_detail {
    height: 100%;
    .details {
      width: 100%;
      height: calc(100% - 179px);
      .el-row {
        width: 100%;
        height: 100%;
        .el-col {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .people_detail {
    height: 100%;
  }
}
.others {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: calc(100% - 137px);
  .el {
    width: 100%;
    height: 21px;
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
}
.imagewrapper {
  position: absolute;
  left: 58.33%;
  top: 0;
  height: 340px;
  overflow: hidden;
  // transform: translateY(-50%);
  width: 1px;
  height: 100%;
  background: url(../../assets/img/iconImg/divlines.png);
}
</style>
