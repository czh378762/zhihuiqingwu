<template>
  <div class="home_wrap">
    <div class="data_wrap box_back">
      <div class="top">
        <div class="lf">
          <div class="switch_item">
            <span>异常停车</span>
            <el-switch v-model="value1" active-color="#2ea4da" inactive-color="#999999" @change="searchChange"></el-switch>
          </div>
          <div class="switch_item">
            <span>越界巡逻</span>
            <el-switch v-model="value2" active-color="#2ea4da" inactive-color="#999999" @change="searchChange"></el-switch>
          </div>
          <div class="switch_item">
            <span>超速行驶</span>
            <el-switch v-model="value3" active-color="#2ea4da" inactive-color="#999999" @change="searchChange"></el-switch>
          </div>
        </div>
        <div class="rg">
          <div class="switch_item">
            <span>公里桩</span>
            <el-switch v-model="value4" active-color="#30d8a4" inactive-color="#999999" @change="showHidePiles"></el-switch>
          </div>
        </div>
      </div>
      <div class="select_wrap">
        <div class="select">
          <el-cascader
            v-model="selectOrg"
            :options="orgList"
            :props="{expandTrigger: 'hover'}"
            @change="selectOrgChange"
            clearable
            separator="-"
            placeholder="请选择机构">
          </el-cascader>
        </div>
        <div class="select">
          <el-input
            placeholder="请输入车号"
            v-model="card"
            class="common-focus"
            @keyup.enter.native="searchByCard">
            <i 
              slot="suffix"
              class="el-input_icon el-icon-search"
              style="line-height: 30px;margin-right: 2px;cursor: pointer;"
              @click="searchByCard">
            </i>
          </el-input>
        </div>
      </div>
      <div class="table_wrap">
        <div class="table_hd">
          <span class="ch">车号</span>
          <span class="line"></span>
          <span class="jg">机构</span>
          <span class="line"></span>
          <span class="zt">行驶状态</span>
          <span class="line"></span>
          <span class="dd">地点</span>
          <span class="line"></span>
          <span class="cz">操作</span>
        </div>
        <div class="table_bd">
          <ul>
            <li :class="index === listActive ? 'active' : ''" v-for="(item, index) in currentData" :key="index" @click="focusCar(item, index)">
              <span class="ch ellipsis" :title="item.plateNo">{{item.plateNo}}</span>
              <span class="jg ellipsis" :title="item.orgName">{{item.orgName}}</span>
              <span :class="['zt', 'red', 'ellipsis']" :title="item.illegalType">{{item.illegalType}}</span>
              <span class="dd ellipsis" :title="item.illegalAddr">{{item.illegalAddr}}</span>
              <span class="cz ellipsis">
                <img src="../../assets/img/locusImg/play.png" alt @click="handleClick(item, index)">
              </span>
            </li>
          </ul>
        </div>
        <div class="noData" v-if="!currentData.length">暂无数据！</div>
        <div class="pageBox">
          <el-pagination
            background
            small
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="5"
            layout="total, prev, pager, next, jumper"
            :total="totalCount"
            :pager-count="5">
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="detail_wrap box_back" v-show="showDetail">
      <div class="top">
        <div class="out">
          轨迹查询
          <div class="export_btn">
            <a :href="exportUrl">
              <img src="../../assets/img/locusImg/export.png" alt>
              <span>导出</span>
            </a>
          </div>
        </div>
        <div class="close_btn el-icon-close" @click="showDetail = false"></div>
      </div>
      <div class="lf">
        <div class="mid">
          <span>{{activeData.plateNo}}</span>
          <span class="ellipsis" :title="activeData.orgName" style="width: 135px;">{{activeData.orgName}}</span>
          <div class="timeSelecBox">
            <dateTime :defaultstart="defaultstart" :defaultend="defaultend" v-model="searchTime" @change="dateTimeChange"></dateTime>
          </div>
          <img src="../../assets/img/locusImg/search.png" @click="getLocusDetail(activeData)" alt>
        </div>
        <div class="cont">
          <div class="cl">
            <div class="c_lf">
              <div>
                <span>起点终点</span>
                <p>-</p>
              </div>
              <div>
                <span>最大车速</span>
                <p>{{locusDetail.gps ? locusDetail.gps.maxSpeed : 0}} km/h</p>
              </div>
              <div>
                <span>累计停车</span>
                <p>{{locusDetail.gps ? locusDetail.gps.tccs : 0}} 次</p>
              </div>
            </div>
            <div class="c_md">
              <div>
                <span>里程</span>
                <p>-</p>
              </div>
              <div>
                <span>均速</span>
                <p>-</p>
              </div>
              <div>
                <span>超速</span>
                <p>{{locusDetail.overspeedCount || 0}}次</p>
              </div>
            </div>
            <div class="c_rg">
              <el-scrollbar style="height: 100%;">
                <ul>
                  <li v-for="(item, index) in locusDetail.wfjcList" :key="index">
                    <span class="tit">{{item.illegalType}}</span>
                    <span class="ct">{{item.illegalTime}}&nbsp;&nbsp;&nbsp;{{item.speed}}</span>
                  </li>
                </ul>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </div>
      <div class="rg">
        <div class="rl">
          <h6>播放速度</h6>
          <div class="speed">
            <div class="item" v-for="(item, index) in speedList" :key="index" :class="speedActive === index ? 'active' : ''" @click="selectSpeed(index)">{{item}}</div>
          </div>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="50"></el-progress>
          <div class="cz_btn">
            <div class="item" @click="toPlay">
              <img src="../../assets/img/locusImg/play.png" alt>
              <span>播放</span>
            </div>
            <div class="item" @click="replay">
              <img src="../../assets/img/locusImg/replay.png" alt>
              <span>回放</span>
            </div>
          </div>
        </div>
        <div class="rr">
          <div class="rr_hd">
            <span>民警</span>
            <span>现场纠违</span>
            <span>简易事故</span>
            <span>检查核录</span>
          </div>
          <div class="policeList">
            <el-scrollbar style="height: 100%;">
              <ul>
                <li v-for="(item, index) in locusDetail.mjList" :key="index">
                  <span>{{item.xm}}({{item.police}})</span>
                  <span>{{item.finEmforCementCount.counts}}</span>
                  <span>{{item.accidentCount.counts}}</span>
                  <span>{{item.kkjcCount.counts}}</span>
                </li>
              </ul>
            </el-scrollbar>
          </div>
        </div>
      </div>
    </div>
    <div class="playBox" v-if="showPlay">
      <polylinePlay ref="playDom" :speed="speed" :polylineData="polylineData" @close="showPlay = false"></polylinePlay>
    </div>
  </div>
</template>
<script>
import dateTime from "@/components/dateTime";
import polylinePlay from "@/components/polylinePlay";
import locusService from "@/api/locusService";
export default {
  name: "current",
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: false,
      selectOrg: "",
      card: "",
      value7: null,
      listActive: 0,
      showDetail: false,
      currentPage: 1,
      totalCount: 0,
      currentData: [],
      defaultstart: "",
      defaultend: "",
      searchTime: "",
      locusDetail: {},
      activeData: {},
      showPlay: false,
      speedList: ["x1", "x2", "x4", "x8", "x16"],
      speedActive: 0,
      speed: 1,
      polylineData: {}
    };
  },
  filters: {
    // 行车状态过滤
    formatterStatus(value) {
      if (value === 0) {
        return "行车异常";
      } else if (value === 1) {
        return "行车正常";
      }
    }
  },
  components: {
    dateTime,
    polylinePlay
  },
  computed: {
    exportUrl() {
      let timeArr = this.searchTime.split("&");
      return `${
        process.env.VUE_APP_url
      }/tblPoliceCarIllegalInfo/export?startTime=${timeArr[0]}&endTime=${
        timeArr[1]
      }&plateNo=${this.activeData.plateNo}`;
    }
  },
  created() {
    let moment = "2019-08-02";
    // let moment = this.$moment().format("YYYY-MM-DD");
    this.filterTime = moment;
    this.defaultstart = moment + " 00:00:00";
    this.defaultend = moment + " 23:59:59";
    this.searchTime = `${this.defaultstart}&${this.defaultend}`;
    this.getCurrentList();
  },
  mounted() {
    // 监听地图车辆点击
    this.$eventBus.$on("getLocusInfo", index => {
      this.showDetail = true;
      let moment = "2019-08-02";
      // let moment = this.$moment().format("YYYY-MM-DD");
      this.filterTime = moment;
      this.defaultstart = moment + " 00:00:00";
      this.defaultend = moment + " 23:59:59";
      this.searchTime = `${this.defaultstart}&${this.defaultend}`;
      if (this.listActive === index && this.locusDetail.gps) {
        return false;
      }
      this.listActive = index;
      this.activeData = this.currentData[index];
      this.getLocusDetail(this.currentData[index]);
    });
  },
  methods: {
    // 搜索改变
    searchChange() {
      this.currentPage = 1;
      this.getCurrentList();
    },
    // 选择机构改变
    selectOrgChange() {
      this.searchChange();
    },
    // 根据车号查找
    searchByCard() {
      this.searchChange();
    },
    // 获取实时列表
    getCurrentList() {
      let params = {
        startRow: (this.currentPage - 1) * 5,
        endRow: 5
      };
      if (this.value1) {
        params.stopCar = "异常停车";
      }
      if (this.value2) {
        params.crossingPatrol = "越界巡逻";
      }
      if (this.value3) {
        params.speedDing = "超速";
        params.lowSpeed = "低速";
      }
      if (this.card) {
        params.plateNo = this.card;
      }
      if (this.selectOrg[1]) {
        params.orgCode = this.selectOrg[1];
      }
      this.listActive = 0;
      this.showDetail = false;
      this.locusDetail = {};
      locusService.getCurrentList(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          this.currentData = res.data.returnTblPoliceCarIllegalList || [];
          this.totalCount = res.data.counts || 0;
          if (res.data.returnTblPoliceCarIllegalList[0]) {
            this.activeData = res.data.returnTblPoliceCarIllegalList[0];
            this.$store.commit("setPantoData", [
              res.data.returnTblPoliceCarIllegalList[0].lon,
              res.data.returnTblPoliceCarIllegalList[0].lat
            ]);
          }
          let arr = [];
          this.currentData.forEach(item => {
            arr.push({
              title: item.plateNo,
              point: [item.lon, item.lat]
            });
          });
          this.$store.commit("setLocusData", arr);
        } else {
          this.currentData = [];
          this.totalCount = 0;
        }
      });
    },
    // 获取轨迹详情
    getLocusDetail(locusData) {
      let timeArr = this.searchTime.split("&");
      let params = {
        startTime: timeArr[0],
        endTime: timeArr[1],
        plateNo: locusData.plateNo,
        gpsId: locusData.plateNo,
        jgbm: locusData.orgCode
      };
      locusService.getLocusDetail(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          let count = 0;
          res.data.wfjcList.forEach(item => {
            if (item.illegalType === "超速") {
              count++;
            }
          });
          res.data.overspeedCount = count;
          this.locusDetail = res.data || {};
          if (res.data.gps) {
            this.$store.commit("setPolylineData", {
              center: [locusData.lon, locusData.lat],
              shiji: res.data.gps.gps || [],
              lilun: res.data.xlGps.GzfwList || []
            });
            this.polylineData = res.data.gps.gps;
          }
        } else {
          this.locusDetail = {};
        }
      });
    },
    // 页码切换
    handleCurrentChange(page) {
      this.currentPage = page;
      this.getCurrentList();
    },
    // 定位至车辆
    focusCar(item, index) {
      this.listActive = index;
      this.activeData = item;
      this.$store.commit("setPantoData", [item.lon, item.lat]);
    },
    // 显示轨迹详情
    handleClick(item, index) {
      this.showDetail = true;
      let moment = "2019-08-02";
      // let moment = this.$moment().format("YYYY-MM-DD");
      this.filterTime = moment;
      this.defaultstart = moment + " 00:00:00";
      this.defaultend = moment + " 23:59:59";
      this.searchTime = `${this.defaultstart}&${this.defaultend}`;
      if (this.listActive === index && this.locusDetail.gps) {
        return false;
      }
      this.listActive = index;
      this.getLocusDetail(item);
    },
    // 查询时间改变
    dateTimeChange() {},
    // 选择速度
    selectSpeed(index) {
      this.speedActive = index;
      if (index === 0) {
        this.speed = 1;
      } else if (index === 1) {
        this.speed = 2;
      } else if (index === 2) {
        this.speed = 4;
      } else if (index === 3) {
        this.speed = 8;
      } else if (index === 4) {
        this.speed = 16;
      }
    },
    // 播放
    toPlay() {
      this.showPlay = true;
    },
    // 回放
    replay() {
      this.$refs.playDom.replay();
    },
    // 显示/隐藏公里桩
    showHidePiles(value) {
      this.$store.commit("setPileShow", value);
    }
  },
  // 页面销毁清空地图车辆标记和轨迹
  destroyed() {
    this.$store.commit("setLocusState", true);
  }
};
</script>
<style lang="scss" scoped>
.playBox {
  position: absolute;
  width: 600px;
  height: 390px;
  right: -620px;
  top: 0;
}
.home_wrap {
  width: 0;
  height: 0;
  position: absolute;
  left: 30px;
  top: 156px;
  width: 690px;
  height: auto;
  .data_wrap {
    width: 100%;
    padding-bottom: 15px;
    .top {
      padding: 0 20px;
      overflow: hidden;
      margin: 30px 0 15px 0;
      .lf {
        float: left;
      }
      .rg {
        float: right;
      }
      .switch_item {
        display: inline-block;
        margin-right: 30px;
      }
      span {
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
        display: inline-block;
        margin-right: 10px;
      }
      /deep/ .el-switch__core {
        width: 32px !important;
        height: 14px;
      }
      /deep/ .el-switch__core:after {
        width: 14px;
        height: 13px;
        top: 0;
      }
      /deep/ .el-switch.is-checked .el-switch__core::after {
        margin-left: -14px;
      }
    }
    .select_wrap {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      .select {
        width: 220px;
        /deep/ input {
          color: #fc6;
        }
      }
      /deep/ .el-select {
        width: 100%;
      }
      /deep/ .el-input__inner {
        background: #06243d;
        height: 30px;
        border: 1px solid rgba(52, 113, 175, 1);
      }
      /deep/ .el-input__icon {
        line-height: 30px;
      }
      /deep/ .el-select-dropdown {
        background-color: #06243d;
      }
    }
  }
  .table_wrap {
    .ch {
      width: 116px;
      padding: 0 5px;
    }
    .jg {
      width: 160px;
      padding: 0 5px;
    }
    .zt {
      width: 86px;
      padding: 0 5px;
    }
    .dd {
      width: 215px;
      padding: 0 5px;
    }
    .cz {
      width: 60px;
      height: 100%;
      padding: 0 5px;
    }
    .table_hd {
      width: 651px;
      height: 32px;
      background: rgba(52, 84, 117, 0.6);
      border-radius: 4px;
      margin: 10px auto 0;
      line-height: 32px;
      display: flex;
      align-items: center;
      border: 1px solid transparent;
      span {
        font-size: 14px;
        color: #11ebff;
        display: inline-block;
        text-align: center;
        font-family: "Microsoft YaHei";
        font-weight: 400;
        text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
        line-height: 22px;
      }
      .line {
        width: 1px;
        height: 16px;
        background: #11ebff;
        display: block;
        margin: 0 1px;
      }
    }
    .table_bd {
      margin-bottom: 15px;
      li {
        height: 30px;
        width: 651px;
        margin: 6px auto;
        cursor: pointer;
        border: 1px solid transparent;
        display: flex;
        span {
          font-size: 14px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 28px;
          text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
          display: block;
          text-align: center;
          line-height: 28px;
          margin-right: 3px;
          height: 28px;
          img {
            display: block;
            margin: 0 auto;
            margin-top: 6px;
          }
          &:last-child {
            margin-right: 0;
          }
        }
        .green {
          color: green;
        }
        .red {
          color: #ff4545;
        }
      }
      li:nth-child(even) {
        background: rgba(230, 225, 225, 0.12);
        border-radius: 4px;
      }
      .active {
        background: rgba(25, 42, 60, 0.78) !important;
        border: 1px solid rgba(52, 113, 175, 1);
        border-radius: 4px;
        span {
          color: rgba(255, 204, 102, 1);
        }
      }
    }
    .noData {
      width: 100%;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #c5d4e3;
      margin-bottom: 15px;
    }
    .pageBox {
      width: 100%;
      padding-left: 20px;
      display: flex;
      justify-content: flex-end;
      padding: 0 20px;
    }
  }
  .detail_wrap {
    position: absolute;
    left: 30;
    top: calc(100% + 10px);
    width: 1440px;
    height: 220px;
    box-shadow: 0px 2px 68px 0px rgba(0, 0, 0, 0.82);
    .top {
      padding: 10px 20px;
      overflow: hidden;
      .out {
        float: left;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        font-weight: 400;
        color: rgba(255, 204, 102, 1);
        line-height: 22px;
        text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
        .export_btn {
          margin: 0 0 0 20px;
          display: inline-block;
          img {
            vertical-align: middle;
            margin-right: 5px;
          }
          span {
            font-size: 14px;
            font-family: "Microsoft YaHei";
            font-weight: 400;
            color: rgba(153, 204, 255, 1);
            line-height: 22px;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .close_btn {
        float: right;
        width: 14px;
        height: 14px;
        color: #99ccff;
        cursor: pointer;
      }
    }
    .lf {
      float: left;
      .mid {
        padding: 0 20px;
        display: flex;
        align-items: center;
        img {
          cursor: pointer;
          vertical-align: middle;
          margin-left: 20px;
        }
        .timeSelecBox {
          width: 412px;
          /deep/ .el-input__inner {
            color: rgba(255, 204, 102, 1);
          }
        }
        span {
          font-size: 15px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
          color: rgba(255, 204, 102, 1);
          line-height: 22px;
          text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
          margin-right: 20px;
        }
        /deep/ .el-input__inner {
          height: 30px;
          background: rgba(6, 36, 61, 1);
          border: 1px solid rgba(52, 113, 175, 1);
        }
        /deep/ .el-range-editor.el-input__inner {
          padding: 0 5px;
        }
        /deep/ input {
          background: none;
        }
        /deep/ .el-date-editor .el-range-input {
          color: #ffcc66;
        }
        /deep/ .el-date-editor .el-range-separator {
          color: #ffcc66;
        }
      }
      .cont {
        padding: 0 20px;
        .cl {
          height: 98px;
          display: flex;
          margin-top: 20px;
          .c_lf {
            display: inline-block;
            width: 200px;
            > div {
              margin: 8px 0;
              span {
                font-size: 13px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                color: rgba(153, 204, 255, 1);
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
                margin-right: 10px;
              }
              p {
                display: inline;
                font-size: 14px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
              }
            }
          }
          .c_md {
            display: inline-block;
            width: 170px;
            height: 100%;
            > div {
              margin: 8px 0;
              span {
                font-size: 13px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                color: rgba(153, 204, 255, 1);
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
                margin-right: 10px;
              }
              p {
                display: inline;
                font-size: 14px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
              }
            }
          }
          .c_rg {
            display: inline-block;
            width: 300px;
            height: 100%;
            li {
              margin: 8px 0;
              span {
                font-size: 14px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
                line-height: 22px;
                text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
              }
              .tit {
                margin-right: 20px;
                color: rgba(255, 69, 69, 1);
              }
              .ct {
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
    }
    .rg {
      float: left;
      display: flex;
      .rl {
        width: 320px;
        height: 140px;
        h6 {
          font-size: 14px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
          color: rgba(153, 204, 255, 1);
          line-height: 22px;
          text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
          margin-bottom: 10px;
        }
        .speed {
          width: 300px;
          height: 26px;
          background: rgba(41, 81, 121, 1);
          border: 1px solid rgba(89, 139, 190, 1);
          border-radius: 4px;
          margin-bottom: 20px;
          .item {
            display: inline-block;
            width: 20%;
            text-align: center;
            line-height: 24px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            text-shadow: 0px 1px 1px rgba(18, 8, 116, 0.8);
            border-right: 1px solid rgba(89, 139, 190, 1);
            box-sizing: border-box;
            cursor: pointer;
            &:last-child {
              border-right: none;
            }
          }
          .active {
            background: rgba(153, 204, 255, 1);
          }
        }
        /deep/ .el-progress-bar {
          width: 300px;
        }
        /deep/ .el-progress-bar__outer {
          border-radius: 5px;
          background: #598bbe;
        }
        .cz_btn {
          margin-top: 20px;
          text-align: center;
          .item {
            display: inline-block;
            img {
              vertical-align: middle;
              margin-right: 5px;
            }
            span {
              font-size: 14px;
              font-family: "Microsoft YaHei";
              font-weight: 400;
              color: rgba(153, 204, 255, 1);
              line-height: 22px;
              text-decoration: underline;
              cursor: pointer;
            }
            &:first-child {
              margin-right: 20px;
            }
          }
        }
      }
      .rr {
        display: inline-block;
        width: 350px;
        .rr_hd {
          margin-bottom: 10px;
          span {
            font-size: 14px;
            font-family: "Microsoft YaHei";
            font-weight: 400;
            color: rgba(153, 204, 255, 1);
            line-height: 22px;
            text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
            width: 70px;
            display: inline-block;
            text-align: center;
            &:first-child {
              width: 110px;
              text-align: left;
            }
          }
        }
        .policeList {
          width: 100%;
          height: 124px;
          overflow: hidden;
        }
        li {
          margin-bottom: 10px;
          &:last-child {
            margin-bottom: 0;
          }
          span {
            font-size: 14px;
            font-family: "Microsoft YaHei";
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 22px;
            text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
            width: 70px;
            display: inline-block;
            text-align: center;
            &:first-child {
              width: 110px;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
/deep/ .el-select-dropdown__item.hover {
  background: none;
}
</style>
