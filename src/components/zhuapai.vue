<template>
    <div class="zhuapai-wp">
        <i class="ic">
            <img src="../assets/img/iconImg/icon12.png" alt="">违法抓拍 
        </i>
        <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide><img src="../assets/img/iconImg/p3.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/iconImg/p3.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/iconImg/p3.png" alt=""></swiper-slide>
            </swiper>
            <div class="swiper-button-prev swiper-button" slot="button-prev">
                <div><i class="el-icon-arrow-left"></i></div>
            </div>
            <div class="swiper-button-next swiper-button" slot="button-next">
                <div><i class="el-icon-arrow-right"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "zhuapai",
  props: ["detailData"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 40,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.zhuapai-wp {
  .ic {
    margin-right: 6px;
    font-size: 13px;
    color: #03d8ea;
    width: 40%;
    display: flex;
    align-items: center;
    img {
      display: block;
      margin-right: 10px;
    }
  }
  .swiper {
    height: 100px;
    margin-top: 20px;
    position: relative;
    .swiper-container {
      width: 60%;
      height: 100px;
      margin-left: 100px;
      box-sizing: border-box;
      .swiper-slide {
        background: #ffffff;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
  .swiper-button {
    background-image: none;
    top: 50%;
    margin-top: -22px;
    div {
      width: 40px;
      height: 40px;
      background: #2b4e72;
      border-radius: 50%;
      cursor: pointer;
      line-height: 40px;
      text-align: center;
      i {
        color: #b1bfce;
        font-size: 24px;
      }
    }
  }
  .swiper-button-next {
    right: 150px;
  }
}
</style>
