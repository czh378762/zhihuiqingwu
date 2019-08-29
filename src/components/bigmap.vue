<template>
    <div ref="allmap" class="allmap"></div>
</template>

<script>
import car from "../assets/img/locusImg/policeCar.png";
import pileImg from "../assets/img/locusImg/pile.png";
import { mapState } from "vuex";
import locusService from "@/api/locusService";

export default {
  name: "bigmap",
  components: {},
  data() {
    return {
      //  $mapstyle:mt.mapstyle()
      map: null,
      trafficLayer: null,
      lushu: null,
      pileData: []
    };
  },
  computed: {
    ...mapState({
      pileShow: state => state.pileShow,
      locusData: state => state.locusData,
      pantoData: state => state.pantoData,
      polylineData: state => state.polylineData,
      locusClear: state => state.locusClear
    })
  },
  watch: {
    // 公里桩显示/不显示
    pileShow(newval) {
      if (newval) {
        this.getPiles();
      } else {
        this.clearPiles();
      }
    },
    // 标记车辆数据
    locusData(newval) {
      this.markePoint(newval);
    },
    // 中心点
    pantoData(newval) {
      if (newval.length) {
        this.pantoCenter(newval);
      }
    },
    // 轨迹点
    polylineData: {
      deep: true,
      handler() {
        this.drawPolyline();
      }
    },
    // 清空标记点和轨迹
    locusClear(newval) {
      if (newval) {
        let allOverlay = this.map.getOverlays();
        allOverlay.forEach(item => {
          item.enableMassClear();
        });
        this.map.clearOverlays();
        this.$store.commit("setLocusState", false);
      }
    }
  },
  mounted() {
    if (typeof BMap === "undefined") {
      return false;
    }
    // 地图瓦片层
    var layer = new BMap.TileLayer();
    layer["getTilesUrl"] = function(tileCoord, zoom) {
      var x = (tileCoord.x + "").replace(/-/gi, "M");
      var y = (tileCoord.y + "").replace(/-/gi, "M");
      var z = zoom;
      return (
        "http://41.189.223.204:8802/custom-maptile/" +
        z +
        "/" +
        ~~(x / 10) +
        "/" +
        ~~(y / 10) +
        "/" +
        x +
        "_" +
        y +
        ".png"
      );
    };
    // 地图类型
    var maptype = new BMap.MapType("地图", layer, {
      tips: "显示普通地图",
      maxZoom: 15
    });
    // 实例化地图
    this.map = new BMap.Map(this.$refs.allmap, {
      mapType: maptype,
      enableMapClick: false
    });
    // 创建图层
    this.trafficLayer = new BMap.TrafficLayer();
    this.map.centerAndZoom(new BMap.Point(120.16014, 30.273483), 12);

    this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    if (this.pileShow) {
      this.getPiles();
    }
    // 监听地图层级缩放
    this.map.addEventListener("zoomend", () => {
      if (this.pileShow) {
        this.getPiles();
      }
    });
    // 监听地图移动
    this.map.addEventListener("moveend", () => {
      if (this.pileShow) {
        this.getPiles();
      }
    });
  },
  methods: {
    // 获取公里桩
    getPiles() {
      let zoom = this.map.getZoom();
      // 地图层级低于11不显示公里桩
      if (zoom < 11) {
        this.pileData = [];
        this.clearPiles();
        return false;
      }
      let center = this.map.getCenter();
      let bounds = this.map.getBounds();
      let s = bounds.getSouthWest();
      let n = bounds.getNorthEast();
      let origin = [s.lng, n.lat];
      let params = {
        zoom: zoom,
        center: center,
        origin: origin
      };
      locusService.getPiles(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          this.pileData = res.data || [];
          this.drawPiles();
        }
      });
    },
    // 画公里桩
    drawPiles() {
      this.clearPiles();
      let data = this.pileData || [];
      let icon = new BMap.Icon(pileImg, new BMap.Size(37, 42), {
        anchor: new BMap.Size(18.5, 21)
      });
      data.forEach(item => {
        let point = item.location || {};
        let marker = new BMap.Marker(new BMap.Point(point.lng, point.lat), {
          icon: icon
        });
        // 给公里桩标记点添加标识
        marker.name = "pile";
        let label = new BMap.Label(item.pileNum, {
          offset: new BMap.Size(0, 8)
        });
        label.setStyle({
          display: "block",
          width: "33px",
          color: "#fff",
          background: "transparent",
          border: 0,
          textAlign: "center"
        });
        marker.setLabel(label);
        this.map.addOverlay(marker);
      });
    },
    // 清除公里桩
    clearPiles() {
      let allOverlay = this.map.getOverlays();
      allOverlay.forEach(item => {
        // 清除公里桩，标识为pile
        if (item.name === "pile") {
          this.map.removeOverlay(item);
        }
      });
    },
    // 标记车辆
    markePoint(data) {
      let allOverlay = this.map.getOverlays();
      allOverlay.forEach(item => {
        item.enableMassClear();
      });
      this.map.clearOverlays();
      let icon = new BMap.Icon(car, new BMap.Size(60, 40), {
        anchor: new BMap.Size(30, 20)
      });
      let marker = [];
      let label = [];
      data.forEach((item, index) => {
        if (
          item.point[0] &&
          item.point[1] &&
          item.point[0] !== "0.000000000000" &&
          item.point[1] !== "0.000000000000"
        ) {
          let p0 = item.point[0];
          let p1 = item.point[1];
          console.log(p0);
          console.log(p1);
          marker[index] = new BMap.Marker(new BMap.Point(p0, p1), {
            icon: icon
          });
          label[index] = new BMap.Label(item.title, {
            offset: new BMap.Size(0, 35)
          });
          label[index].setStyle({
            color: "#fff",
            background: "transparent",
            border: 0,
            textAlign: "center"
          });
          marker[index].setLabel(label[index]);
          this.map.addOverlay(marker[index]);
          marker[index].disableMassClear();
          marker[index].addEventListener("click", () => {
            let point = new BMap.Point(
              data[index].point[0],
              data[index].point[1]
            );
            this.map.panTo(point);
            this.$eventBus.$emit("getLocusInfo", index);
          });
        }
      });
    },
    // 移动中心点
    pantoCenter(data) {
      if (
        data[0] &&
        data[1] &&
        data[0] !== "0.000000000000" &&
        data[1] !== "0.000000000000"
      ) {
        let point = new BMap.Point(data[0], data[1]);
        this.map.panTo(point);
        this.map.setZoom(12);
      }
    },
    // 画车辆运行轨迹
    drawPolyline() {
      console.log(1234);
      this.map.clearOverlays();
      // 理论运行轨迹
      if (this.polylineData.lilun.length) {
        let data;
        data = this.polylineData.lilun;
        let trackPoint = [];
        let options = {
          strokeWeight: 3,
          setStrokeStyle: "dashed",
          strokeColor: "#0092fe",
          strokeOpacity: 1
        };
        data.forEach(item => {
          if (item.jd && item.wd) {
            trackPoint.push(new BMap.Point(item.jd, item.wd));
          }
        });
        let polyline = new BMap.Polyline(trackPoint, options);
        this.map.addOverlay(polyline);
      }
      // 实际运行轨迹
      if (this.polylineData.shiji.length) {
        if (
          !(
            this.polylineData.center[0] &&
            this.polylineData.center[1] &&
            this.polylineData.center[0] !== "0.000000000000" &&
            this.polylineData.center[1] !== "0.000000000000"
          )
        ) {
          let point = new BMap.Point(
            this.polylineData.shiji[0].jd,
            this.polylineData.shiji[0].wd
          );
          this.map.panTo(point);
          this.map.setZoom(12);
        }
        let data;
        data = this.polylineData.shiji;
        let options = {
          strokeWeight: 3,
          setStrokeStyle: "dashed",
          strokeOpacity: 1
        };
        data.forEach((item, index, list) => {
          let trackPoint = [];
          options.strokeColor = "#39d68d";
          // 越界
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
      this.markerArr.forEach(item => {
        trackPoint.push(new BMap.Point(item.point[0], item.point[1]));
      });
      this.lushu = new BMapLib.LuShu(this.map, trackPoint, {
        autoView: true,
        icon: icon,
        speed: 10000,
        enableRotation: true
      });
      this.lushu.start();
    }
  }
};
</script>
<style lang="scss" scoped>
.allmap {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}
</style>
