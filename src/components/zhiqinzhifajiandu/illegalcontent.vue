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
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">违法代码</span>
            <span class="infos">{{detailData.wfxw || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">违法类别</span>
            <span class="infos">{{detailData.wfxwDesc || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">违法时间</span>
            <span class="infos">{{detailData.wfsj || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">违法地点</span>
            <span class="infos">{{detailData.wzddMs || "暂无数据"}}</span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="video-w">
            <div class="v-h">
              <span>执法记录仪</span>
              <!-- <div class="image-wrapper pull-right" style="padding: 6px 9px 0 0;">
                <img src="../../assets/img/iconImg/zoom.png" alt>
              </div> -->
            </div>
            <div class="video-content">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
              <swiper :options="swiperOption" class="swiper-no-swiping">
                <swiper-slide :class="'videoSlide' + index" v-for="(item, index) in cVideoData" :key="index">
                  <!-- <video class="videoWrapper video-js" :id="'videoWrapper' + index" :poster="item.poster">
                    <source :src="item.src" type="video/mp4">
                  </video> -->
                </swiper-slide>
              </swiper>
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
  props: ["getStyle", "detailData", "videoData"],
  components: {},
  data() {
    return {
      myStyle: this.getStyle,
      players: [],
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    cVideoData() {
      if (this.videoData.length) {
        let arr = [];
        this.videoData.forEach(item => {
          let url = item.url;
          let src;
          if (url.indexOf(".MOV") !== -1) {
            src = `${process.env.VUE_APP_url}/FoundVido/zmxz?url=${encodeURI(
              url
            )}`;
          } else {
            src = url;
          }
          arr.push({
            src: src,
            poster: item.thumbUrl
          });
        });
        return arr;
      } else {
        return [];
      }
    }
  },
  watch: {
    cVideoData(newval) {
      this.disposePlayers();
      if (newval.length) {
        this.initPlayer();
      }
    }
  },
  methods: {
    // 获取所有已经实例化的player，并销毁
    disposePlayers() {
      let allPlayers = this.$video.getPlayers();
      for (let key in allPlayers) {
        if (allPlayers[key]) {
          allPlayers[key].pause();
          allPlayers[key].dispose();
        }
      }
      this.players = [];
    },
    // 初始化播放器
    initPlayer() {
      this.$nextTick(() => {
        this.cVideoData.forEach((item, index) => {
          // 每组执法记录仪视频个数动态，每次重新实例化的时候先销毁（销毁后video标签会被删除），然后重新创建video标签，重新实例化
          let html =
            "<video class='videoWrapper video-js' id='videoWrapper" +
            index +
            "' poster='" +
            item.poster +
            "'><source src='" +
            item.src +
            "' type='video/mp4'></video>";
          let videoSlide = document.getElementsByClassName(
            "videoSlide" + index
          )[0];
          videoSlide.innerHTML = html;
          let options = {
            width: "303px",
            height: "170px",
            controls: true,
            preload: "auto"
          };
          let player = this.$video("videoWrapper" + index, options);
          this.players.push(player);
        });
      });
    }
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
  width: 303px;
  height: 200px;
  float: right;
  margin-right: 66px;
}
.video-w .v-h {
  width: 303px;
  background: #1a416a;
  height: 30px;
}
.video-w .v-h span {
  color: #fff;
  display: inline-block;
  padding: 6px;
}
.video-content {
  height: 170px;
  width: 303px;
  position: relative;
  .videoWrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev {
    top: 50%;
    left: -60px;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    background-color: #14334c;
    background: url("../../assets/img/iconImg/la.png") no-repeat center;
  }
  .swiper-button-next {
    top: 50%;
    right: -60px;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    background-color: #14334c;
    background: url("../../assets/img/iconImg/ra.png") no-repeat center;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
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
