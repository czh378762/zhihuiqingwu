<template>
  <div class="polylinePlay" >
    <div class="map" ref="polylinePlay">

    </div>
    <i class="close el-icon-close" @click="close"></i>
  </div>
</template>

<script>
import car from "../assets/img/locusImg/policeCar.png";
export default {
  name: "polylinePlay",
  props: ["polylineData", "speed"],
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.map = new BMap.Map(this.$refs.polylinePlay, {
        enableMapClick: false
      });
      if (this.polylineData.length) {
        // 地图中心点
        this.map.centerAndZoom(
          new BMap.Point(this.polylineData[0].jd, this.polylineData[0].wd),
          14
        );
        this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        this.playPolyline();
        this.drawPolyline();
      } else {
        // 地图中心点
        this.map.centerAndZoom(new BMap.Point(120.16014, 30.273483), 11);
        this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      }
    });
  },
  methods: {
    // 关闭
    close() {
      this.$emit("close");
    },
    // 画车辆运行轨迹
    drawPolyline() {
      if (this.polylineData.length) {
        let data;
        data = this.polylineData;
        let options = {
          strokeWeight: 3,
          setStrokeStyle: "dashed",
          strokeOpacity: 1
        };
        data.forEach((item, index, list) => {
          let trackPoint = [];
          options.strokeColor = "#39d68d";
          if (item.yj === "1") {
            options.strokeColor = "#ff0000";
          }
          trackPoint.push(new BMap.Point(item.jd, item.wd));
          if (index + 1 === list.length) {
            trackPoint.push(new BMap.Point(list[index].jd, list[index].wd));
          } else {
            trackPoint.push(
              new BMap.Point(list[index + 1].jd, list[index + 1].wd)
            );
          }
          let polyline = new BMap.Polyline(trackPoint, options);
          this.map.addOverlay(polyline);
        });
      }
    },
    // 播放运行轨迹
    playPolyline() {
      let icon = new BMap.Icon(car, new BMap.Size(60, 40), {
        anchor: new BMap.Size(30, 20)
      });
      let trackPoint = [];
      this.polylineData.forEach(item => {
        trackPoint.push(new BMap.Point(item.jd, item.wd));
      });
      this.lushu = new BMapLib.LuShu(this.map, trackPoint, {
        autoView: true,
        icon: icon,
        speed: 2000 * this.speed,
        enableRotation: true
      });
      this.lushu.start();
    },
    // 回放
    replay() {
      this.lushu.stop();
      this.map.clearOverlays();
      this.playPolyline();
      this.drawPolyline();
    }
  }
};
</script>

<style lang="scss" scoped>
.polylinePlay {
  width: 100%;
  height: 100%;
  position: relative;
  .map {
    width: 100%;
    height: 100%;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #000;
    cursor: pointer;
  }
}
</style>
