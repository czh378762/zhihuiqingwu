<template>
  <div class="box-wp box_back thin weifa b-yellow" v-bind:style="myStyle">
    <div class="box-content">
      <div class="detail">
        <p class="title">事故详情</p>
        <div class="content">
          <div class="line">
            <img src="../../assets/img/iconImg/divlines.png" alt>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon07.png" alt>
            </i>
            <span class="info-label">事故时间</span>
            <span class="infos">{{detailData.sgfssj || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon06.png" alt>
            </i>
            <span class="info-label">事故地点</span>
            <span class="infos">{{detailData.sgddms || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">事故内容</span>
            <span class="infos">{{detailData.sgss || "暂无数据"}}</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="info-label">事故责任</span>
            <span class="infos">{{responsibility || "暂无数据"}}</span>
          </div>
        </div>
      </div>
      <div class="relative">
        <p class="title">关联详情</p>
        <div class="content">
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="infos">-</span>
          </div>
          <div class="el">
            <i class="ic">
              <img src="../../assets/img/iconImg/icon04.png" alt>
            </i>
            <span class="infos">-</span>
          </div>
          <div class="video-w">
            <div class="v-h">
              <span>执法记录仪</span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "illegalcontent",
  props: ["getStyle", "detailData", "responsibility", "videoData"],
  components: {},
  mouted() {},
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
            "<video class='videoWrapper video-js' id='videoDom" +
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
            width: "228px",
            height: "128px",
            controls: true,
            preload: "auto"
          };
          let player = this.$video("videoDom" + index, options);
          this.players.push(player);
        });
      });
    }
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
          img {
            display: block;
          }
          &:last-child {
            margin-bottom: 0;
          }
          .ic {
            margin-right: 10px;
          }
          .info-label {
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
    .relative {
      width: calc(50% - 20px);
      height: 100%;
      float: right;
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
        width: 100%;
        height: calc(100% - 14px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 30px;
        .el {
          display: flex;
          .ic {
            margin-right: 10px;
          }
          .info-label {
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
        .video-w {
          width: 228px;
          height: 158px;
          margin: 0 auto;
          .v-h {
            width: 100%;
            height: 30px;
            background: #1a416a;
            padding: 0 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              font-size: 14px;
              color: #fff;
            }
            div {
              cursor: pointer;
            }
          }
          .video-content {
            width: 100%;
            height: calc(100% - 30px);
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
              background: url("../../assets/img/iconImg/la.png") no-repeat
                center;
            }
            .swiper-button-next {
              top: 50%;
              right: -60px;
              width: 50px;
              height: 50px;
              margin-top: -25px;
              background-color: #14334c;
              background: url("../../assets/img/iconImg/ra.png") no-repeat
                center;
            }
            .swiper-container {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
