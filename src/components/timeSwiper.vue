<template>
    <div class="timeSwiper">
        <div class="bg"></div>
        <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide><div class="slide active"><span>2019-4-30 赵西西 2分</span></div></swiper-slide>
                <swiper-slide><div class="slide"><span>2019-4-30 赵西西 2分</span></div></swiper-slide>
                <swiper-slide><div class="slide"><span>2019-4-30 赵西西 2分</span></div></swiper-slide>
                <swiper-slide><div class="slide active"><span>2019-4-30 赵西西 2分</span></div></swiper-slide>
                <swiper-slide><div class="slide"><span>2019-4-30 赵西西 2分</span></div></swiper-slide>
                <swiper-slide><div class="slide"><span>2019-4-30 赵西西 2分</span></div></swiper-slide>
                <swiper-slide><div class="slide active"><span>2019-4-30 赵西西 2分</span></div></swiper-slide>
                <swiper-slide><div class="slide"><span>2019-4-30 赵西西 2分</span></div></swiper-slide>
                <swiper-slide><div class="slide"><span>2019-4-30 赵西西 2分</span></div></swiper-slide>
            </swiper>
            <div class="swiper-button-up swiper-button">
                <div><i class="el-icon-arrow-up"></i></div>
            </div>
            <div class="swiper-button-down swiper-button">
                <div><i class="el-icon-arrow-down"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "timeSwiper",
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        navigation: {
          nextEl: ".swiper-button-down",
          prevEl: ".swiper-button-up"
        },
        slidesPerView: 6,
        spaceBetween: 10
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.timeSwiper {
  position: relative;
  .swiper {
    position: relative;
    padding: 50px 0;
  }
  .swiper-button {
    background-image: none;
    position: absolute;
    div {
      width: 20px;
      height: 20px;
      background: #2b4e72;
      border-radius: 50%;
      cursor: pointer;
      line-height: 20px;
      text-align: center;
      overflow: hidden;
      i {
        color: #b1bfce;
        font-size: 12px;
      }
    }
  }
  .swiper-container {
    height: 250px;
  }
  .swiper-button-up {
    top: 15px;
    left: 40px;
  }
  .swiper-button-down {
    top: 320px;
    left: 40px;
  }
  .bg {
    position: absolute;
    width: 30px;
    height: 370px;
    background: url("../assets/img/icon/lunbo.png") no-repeat left center;
    background-size: contain;
    left: 50px;
  }
  .slide {
    width: 180px;
    height: 30px;
    background: linear-gradient(
      -39deg,
      rgba(7, 34, 62, 1),
      rgba(32, 87, 144, 1)
    );
    border: 1px solid rgba(52, 113, 175, 1);
    opacity: 1;
    border-radius: 4px;
    margin-bottom: 10px;
    text-align: center;
    cursor: pointer;
    span {
      font-size: 14px;
      font-weight: 400;
      color: rgba(150, 209, 233, 1);
      line-height: 30px;
      text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
    }
  }
  .active {
    background: linear-gradient(
      90deg,
      rgba(24, 67, 113, 1),
      rgba(55, 196, 255, 1),
      rgba(24, 67, 113, 1)
    );
    border: 1px solid rgba(255, 117, 106, 1);
  }
}
</style>
