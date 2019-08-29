<template>
  <div class="home_wrap">
    <div class="data_wrap box_back">
      <div class="top">
        <div class="lf">
          <div class="switch_item">
            <span class="title">异常停车</span>
            <el-switch v-model="value1" active-color="#2ea4da" inactive-color="#999999" @change="searchChange"></el-switch>
          </div>
          <div class="switch_item">
            <span class="title">越界巡逻</span>
            <el-switch v-model="value2" active-color="#2ea4da" inactive-color="#999999" @change="searchChange"></el-switch>
          </div>
          <div class="switch_item">
            <span class="title">超速行驶</span>
            <el-switch v-model="value3" active-color="#2ea4da" inactive-color="#999999" @change="searchChange"></el-switch>
          </div>
        </div>
      </div>
      <div class="selectTime">
        <div class="timeSelect">
          <el-date-picker
            class="common-focus"
            :clearable="false"
            :editable="false"
            size="small"
            v-model="filterTime"
            type="date"
            @change="dateChange"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
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
            placeholder="请选择机构"
            clearable
            separator="-"
            style="width: 100%;">
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
          <span class="zt">行驶异常</span>
          <span class="line"></span>
          <span class="cz">操作</span>
        </div>
        <div class="table_bd">
          <ul>
            <li :class="index === listActive ? 'active' : ''" v-for="(item, index) in tableData" :key="index" @click="focusCar(item, index)">
              <span class="ch ellipsis" :title="item.plateNo">{{item.plateNo}}</span>
              <span class="jg ellipsis" :title="item.orgCodeName">{{item.orgCodeName}}</span>
              <span class="zt red ellipsis" :title="item.count">{{item.count}}</span>
              <span class="cz">
                <img title="轨迹回放" src="../../assets/img/locusImg/play.png" alt @click="handleClick(item, index)">
              </span>
            </li>
          </ul>
        </div>
        <div class="noData" v-if="!tableData.length">暂无数据！</div>
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
            <div :class="['item', speed === 1 ? 'active' : '']" @click="speed = 1">x1</div>
            <div :class="['item', speed === 2 ? 'active' : '']" @click="speed = 2">x2</div>
            <div :class="['item', speed === 4 ? 'active' : '']" @click="speed = 4">x4</div>
            <div :class="['item', speed === 8 ? 'active' : '']" @click="speed = 8">x8</div>
            <div :class="['item', speed === 16 ? 'active' : '']" @click="speed = 16">x16</div>
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
import locusService from "@/api/locusService";
import dateTime from "@/components/dateTime";
import polylinePlay from "@/components/polylinePlay";
export default {
  name: "current",
  data() {
    return {
      filterTime: "",
      selectOrg: "",
      card: "",
      listActive: 0,
      tableData: [],
      currentPage: 1,
      totalCount: 0,
      value1: true,
      value2: true,
      value3: true,
      value4: false,
      showDetail: true,
      activeData: {},
      locusDetail: {},
      defaultstart: "",
      defaultend: "",
      searchTime: "",
      polylineData: [],
      showPlay: false,
      speed: 1
    };
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
    this.getLocusList();
  },
  mounted() {
    // 监听地图车辆点击
    this.$eventBus.$on("getLocusInfo", index => {
      this.showDetail = true;
      this.defaultstart = this.filterTime + " 00:00:00";
      this.defaultend = this.filterTime + " 23:59:59";
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
      this.getLocusList();
    },
    // 获取轨迹列表
    getLocusList() {
      let params = {
        startTime: `${this.filterTime} 00:00:00`,
        endTime: `${this.filterTime} 23:59:59`,
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
      locusService.getLocusList(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          this.tableData = res.data.wfjcList || [];
          this.totalCount = res.data.count || 0;
          if (res.data.wfjcList[0]) {
            this.activeData = res.data.wfjcList[0];
            this.$store.commit("setPantoData", [
              res.data.wfjcList[0].lon,
              res.data.wfjcList[0].lat
            ]);
          }
          let arr = [];
          this.tableData.forEach(item => {
            arr.push({
              title: item.plateNo,
              point: [item.lon, item.lat]
            });
          });
          this.$store.commit("setLocusData", arr);
        } else {
          this.tableData = [];
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
    // 查找时间改变
    dateChange(date) {
      this.getLocusList();
      this.defaultstart = date + " 00:00:00";
      this.defaultend = date + " 23:59:59";
      this.searchTime = `${this.defaultstart}&${this.defaultend}`;
    },
    // 选择机构改变
    selectOrgChange() {
      this.searchChange();
    },
    // 根据车号查询
    searchByCard() {
      this.searchChange();
    },
    // 页码改变
    handleCurrentChange(page) {
      this.currentPage = page;
      this.getLocusList();
    },
    // 列表点击
    focusCar(item, index) {
      this.listActive = index;
      this.activeData = item;
      this.$store.commit("setPantoData", [item.lon, item.lat]);
    },
    // 显示轨迹详情
    handleClick(item, index) {
      this.showDetail = true;
      this.defaultstart = this.filterTime + " 00:00:00";
      this.defaultend = this.filterTime + " 23:59:59";
      this.searchTime = `${this.defaultstart}&${this.defaultend}`;
      if (this.listActive === index && this.locusDetail.gps) {
        return false;
      }
      this.listActive = index;
      this.getLocusDetail(item);
    },
    // 轨迹查询时间改变
    dateTimeChange() {},
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
<style lang="scss">
.el-cascader .el-input .el-input__inner:focus,
.el-cascader .el-input.is-focus .el-input__inner {
  border-color: #409eff !important;
}
.selectTime {
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .timeSelect {
    width: 193px;
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 72px;
      background: #042947 !important;
      border-color: #3471af;
    }
    .el-date-editor.el-input {
      .el-input__inner {
        background: #042947 !important;
        border-color: #3471af;
      }
      input {
        color: #ffcc66;
        border: 1px solid #6a9bff;
      }
    }
  }
  .rg {
    .switch_item {
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.playBox {
  position: absolute;
  width: 600px;
  height: 400px;
  right: -620px;
  top: 0;
}
.home_wrap {
  position: absolute;
  left: 30px;
  top: 156px;
  width: 550px;
  height: auto;
  .data_wrap {
    width: 100%;
    .top {
      padding: 0 20px;
      overflow: hidden;
      margin: 16px 0 16px 0;
      .lf {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .switch_item {
          display: flex;
          align-items: center;
          margin-right: 30px;
          .title {
            margin-right: 10px;
          }
          &:last-child {
            margin-right: 0;
          }
        }
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
    .selectTime {
      width: 100%;
      height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 20px;
      .timeSelect {
        width: 193px;
        .el-date-editor.el-input,
        .el-date-editor.el-input__inner {
          width: 193px;
          background: #042947 !important;
        }
        .el-date-editor.el-input {
          .el-input__inner {
            background: #042947 !important;
          }
          input {
            border: 2px solid #6a9bff;
          }
        }
      }
      .rg {
        .switch_item {
          margin-right: 30px;
          display: flex;
          align-items: center;
          &:last-child {
            margin-right: 0;
          }
        }
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
        width: 193px;
        /deep/ input {
          color: #ffcc66;
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
    margin-top: 20px;
    padding: 0 20px;
    .ch {
      width: 22%;
    }
    .jg {
      width: 42%;
    }
    .zt {
      width: 20%;
    }
    .cz {
      flex: 1;
    }
    .table_hd {
      width: 100%;
      height: 32px;
      background: rgba(52, 84, 117, 0.6);
      border-radius: 4px;
      margin-bottom: 6px;
      line-height: 32px;
      display: flex;
      align-items: center;
      display: flex;
      border: 1px solid transparent;
      .line {
        display: block;
        width: 1px;
        height: 16px;
        background: #5f8baf;
      }
      span {
        font-size: 14px;
        color: #11ebff;
        text-align: center;
        font-family: "Microsoft YaHei";
        font-weight: 400;
        text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
        line-height: 22px;
      }
    }
    .table_bd {
      margin-bottom: 15px;
      li {
        height: 30px;
        width: 100%;
        margin-bottom: 6px;
        cursor: pointer;
        border: 1px solid transparent;
        display: flex;
        align-items: center;
        margin-right: 1px;
        &:last-child {
          margin-right: 0;
          margin-bottom: 0;
        }
        span {
          font-size: 14px;
          font-family: "Microsoft YaHei";
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 30px;
          text-shadow: 0px 3px 3px rgba(18, 8, 116, 0.5);
          display: inline-block;
          text-align: center;
          margin-right: 1px;
          &:last-child {
            margin-right: 0;
          }
        }
        img {
          vertical-align: middle;
        }
        .zt {
          color: #ff4545 !important;
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
        .zt {
          color: rgba(255, 204, 102, 1) !important;
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
      margin-bottom: 15px;
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
          margin-top: 20px;
          height: 98px;
          display: flex;
          .c_lf {
            display: inline-block;
            width: 200px;
            height: 100%;
            div {
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
            div {
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
      float: right;
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
            line-height: 26px;
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
