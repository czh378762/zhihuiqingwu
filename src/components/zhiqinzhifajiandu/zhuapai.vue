<template>
  <div class="box-wp box_back thin heluneirong">
    <el-row>
      <el-col :span="24">
        <div class="box-header">
          <i class="ic">
            <img src="../../assets/img/iconImg/pliceCar.png" alt>
          </i>
          <span class="box-tit">警车</span>
        </div>
      </el-col>
      <!-- <el-col :span="12">
        <div class="box-header box-header2">
          <i class="ic">
            <img src="../../assets/img/iconImg/pliceCar.png" alt>
          </i>
          <span class="box-tit">驾驶人员</span>
        </div>
      </el-col> -->
    </el-row>
    <div class="box-content">
      <el-row>
        <el-col :span="24" :offset="1">
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon07.png" alt>
            </i>
            <span class="info-label">抓拍时间</span>
            <span class="infos">{{detailData.illegalTime || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon06.png" alt>
            </i>
            <span class="info-label">抓拍地点</span>
            <span class="infos">{{detailData.illegalAddr || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon15.png" alt>
            </i>
            <span class="info-label">所属机构</span>
            <span class="infos">{{detailData.orgCodeName || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">巡逻车号</span>
            <span class="infos">{{detailData.plateNo || "暂无数据"}}</span>
          </div>
          <div class="el" style="margin-bottom: 15px;">
            <div class="image-wrapper carnum-pic">
              <img :src="detailData.plateNoImg" alt>
            </div>
          </div>
        </el-col>
        <!-- <el-col :span="12" :offset="3">
          <el-row style="margin-top:36px; padding-left: 25px;">
            <el-col :span="12">
              <div class="image-wrapper u-pic">
                <img src="../../assets/img/iconImg/p1.png" alt>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="el">
                <i class="ic">
                  <img src="../../assets/img/iconImg/icon12.png" alt>
                </i>
                <span class="infos">张全单</span>
              </div>
              <div class="el">
                <i class="ic">
                  <img src="../../assets/img/iconImg/icon13.png" alt>
                </i>
                <span class="infos">001123</span>
              </div>
              <div class="el">
                <i class="ic">
                  <img src="../../assets/img/iconImg/icon14.png" alt>
                </i>
                <span class="infos">杭州支队</span>
              </div>
            </el-col>
          </el-row>
        </el-col> -->
      </el-row>
    </div>
    <div class="div-line"></div>
    <el-row>
      <el-col :span="12">
        <div class="box-header">
          <i class="ic">
            <img src="../../assets/img/iconImg/zp.png" alt>
          </i>
          <span class="box-tit">抓拍</span>
        </div>
      </el-col>
    </el-row>
    <div class="slide-wp swiper-inner" v-show="btnShow">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in detailData.carImgUrlList" :key="index">
          <div class="image-wrapper s-pic">
            <img :src="item" alt>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <div class="slide-wp swiper-inner" v-show="!btnShow">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in detailData.carImgUrlList" :key="index">
          <div class="image-wrapper s-pic">
            <img :src="item" alt>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "zhuapai",
  components: {},
  props: {
    detailData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mouted() {},
  data() {
    return {
      // swiper配置
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    btnShow() {
      if (this.detailData.carImgUrlList) {
        if (this.detailData.carImgUrlList.length > 1) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.carnum-pic {
  display: block;
  height: 44px;
  img {
    width: auto !important;
    height: 100% !important;
    display: block;
  }
}
.s-pic {
  display: block;
  height: 250px;
  img {
    width: auto !important;
    height: 100% !important;
    display: block;
  }
}
.swiper-container {
  cursor: default !important;
}
/deep/ .swiper-wrapper {
  cursor: pointer !important;
}
.box-wp {
  padding-top: 15px;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: orange;
}
.swiper-pagination .swiper-pagination-bullet {
  width: 12px !important;
  height: 12px !important;
  display: inline-block;
  border-radius: 100%;
  opacity: 0.2;
  background: transparent;
  border: 1px solid #6a9bff;
  margin: 0 5px;
}
.swiper-pagination {
  width: 100%;
  position: absolute;
  left: 0;
  top: calc(50% + 145px);
}
.swiper-button-prev {
  top: 50%;
  left: 22px;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  background-color: #14334c;
  background: url("../../assets/img/iconImg/la.png") no-repeat center;
}
.swiper-button-next {
  top: 50%;
  right: 22px;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  background-color: #14334c;
  background: url("../../assets/img/iconImg/ra.png") no-repeat center;
}
.swiper-inner {
  position: relative;
  width: 100%;
  padding: 0 47px;
  height: calc(100% - 340px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 430px;
  height: 250px;
}
/* .slide-wp{
    padding: 20px 30px;
} */
.dangshiren-pic {
  text-align: center;
}
.u-pic {
  width: 100px;
  height: 120px;
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
  margin-right: 15px;
  color: rgba(3, 216, 234, 1);
}
.heluneirong {
  width: 100%;
  height: 100%;
}
.box-tit {
  font-size: 14px;

  color: rgba(255, 204, 102, 1);
}
.video-w {
  border-radius: 5px;
  overflow: hidden;

  width: 420px;
  height: 156px;
  margin-top: 27px;
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
  margin: 16px 0;
  display: flex;
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
  // padding: 0 45px;
  padding-left: 45px;
  padding-right: 0;
  height: 18px;
  display: flex;
  i {
    display: block;
    height: 18px;
  }
  span {
    line-height: 18px;
  }
}
.box-header2 {
  padding-left: 0;
  padding-right: 45px;
}
.box-content {
  padding: 0 70px;
}
.div-line {
  height: 5px;
  border-top: 1px dashed #ccc;
  margin: 15px 47px;
}
</style>
