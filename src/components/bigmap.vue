<template>
    <div ref="allmap" style=" width: 100%;
  height: 100%;position:absolute;z-index:0"></div>
</template>

<script>
//  import mt from '../assets/js/mapsty'
import SM from "../assets/js/mapsty";

export default {
  name: "bigmap",
  components: {},
  data() {
    return {
      //  $mapstyle:mt.mapstyle()
      map: null,
      trafficLayer: null,
      mapstyle: SM.customData()
    };
  },
  methods: {},
  mounted() {
    // var map = new BMap.Map("allmap"); // 创建Map实例

    // var st = this.mapstyle;

    // map.centerAndZoom(new BMap.Point(120.22205, 30.273981), 16); // 初始化地图,设置中心点坐标和地图级别
    // //添加地图类型控件
    // map.addControl(
    //   new BMap.MapTypeControl({
    //     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    //   })
    // );
    // // map.setCurrentCity("杭州");          // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    // // map.setMapStyle({ styleJson: st });
    // // map.setMapStyle({ style: "dark" });
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
    var maptype = new BMap.MapType("地图", layer, {
      tips: "显示普通地图",
      maxZoom: 15
    });
    // 百度地图api功能
    this.map = new BMap.Map(this.$refs.allmap, {
      mapType: maptype,
      enableMapClick: false
    });
    // 创建图层
    this.trafficLayer = new BMap.TrafficLayer();
    this.map.centerAndZoom(new BMap.Point(120.16014, 30.273483), 10);

    this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }
};
</script>
<style lang="scss" scoped>
</style>
