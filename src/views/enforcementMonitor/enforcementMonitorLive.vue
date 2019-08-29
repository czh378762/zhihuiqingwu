<template>
  <div class="yichangQinwu_wrap">
    <div class="top">
      <div class="top_lf">
        <img src="../../assets/img/iconImg/data.png" alt>
        执勤执法数据
      </div>
    </div>
    <div class="content clearfix">
      <div class="c_lf">
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
              placeholder="请输入民警姓名或警号"
              v-model="police"
              class="common-focus"
              @keyup.enter.native="changeSearch">
              <i 
                slot="suffix"
                class="el-input_icon el-icon-search"
                style="line-height: 30px;margin-right: 2px;cursor: pointer;"
                @click="changeSearch">
              </i>
            </el-input>
          </div>
        </div>
        <div class="select_wrap" style="margin:10px 0;">
          <dateTime :defaultstart="defaultstart" :defaultend="defaultend" v-model="searchTime" @change="dateChange"></dateTime>
        </div>
        <div class="cont box_back">
          <el-scrollbar style="height: 100%;">
            <el-collapse v-model="activeName" accordion @change="changes">
              <el-collapse-item title="违法" name="weifa">
                <tables :tableData="tableData" :tableColumns="tableColumns1" @change="illegalChange"></tables>
                <div class="pageBox">
                  <el-pagination
                    background
                    small
                    @current-change="handleCurrentChange1"
                    :current-page="currentPage1"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total="totalCount1"
                    :pager-count="5">
                  </el-pagination>
                </div>
              </el-collapse-item>
              <el-collapse-item title="事故" name="shigu">
                <tables :tableData="tableData" :tableColumns="tableColumns2" @change="accidentChange"></tables>
                <div class="pageBox">
                  <el-pagination
                    background
                    small
                    @current-change="handleCurrentChange2"
                    :current-page="currentPage2"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total="totalCount2"
                    :pager-count="5">
                  </el-pagination>
                </div>
              </el-collapse-item>
              <el-collapse-item title="检查核录" name="jiancha">
                <tables :tableData="tableData" :tableColumns="tableColumns3" @change="checkChange"></tables>
                <div class="pageBox">
                  <el-pagination
                    background
                    small
                    @current-change="handleCurrentChange3"
                    :current-page="currentPage3"
                    :page-size="10"
                    layout="total, prev, pager, next, jumper"
                    :total="totalCount3"
                    :pager-count="5">
                  </el-pagination>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-scrollbar>
        </div>
      </div>
      <div class="c_rg">
        <div v-if="showtype === 'weifa'" class="weifa_detail">
          <div class="c_rg_top">
            <div class="police">
              <mingjin :getStyle="mjStyle" :type="1" :detailData="illegalData"></mingjin>
            </div>
            <div class="car">
              <carinitem :getStyle="ciStyle" :detailData="illegalData"></carinitem>
            </div>
            <div class="people">
              <illegalperson :getStyle="dsrStyle" :detailData="illegalData"></illegalperson>
            </div>
          </div>
          <div class="c_rg_bot">
            <illegalcontent :getStyle="icStyle" :detailData="illegalData" :videoData="videoData"></illegalcontent>
          </div>
        </div>
        <div v-if="showtype === 'shigu'" class="shigu_detail">
          <div class="c_rg_top">
            <div class="police">
              <mingjin :getStyle="mjStyle" :type="2" :detailData="accidentData"></mingjin>
            </div>
            <div class="relative_car">
              <cardselect :getStyle="xcStyle" :accidentDetail="accidentDetail" @change="accidentCarChange"></cardselect>
            </div>
          </div>
          <div class="c_rg_bot">
            <shiguxiangqing :getStyle="sgStyle" :detailData="accidentData" :responsibility="responsibility" :videoData="videoData"></shiguxiangqing>
          </div>
        </div>
        <div v-if="showtype === 'jiancha'" class="jiancha">
          <div class="c_rg_top">
            <div class="police">
              <mingjin :getStyle="mjStyle" :type="3" :detailData="checkData"></mingjin>
            </div>
            <div class="car">
              <carinitem :getStyle="ciStyle" :detailData="checkData"></carinitem>
            </div>
            <div class="people">
              <illegalperson :getStyle="dsrStyle" :detailData="checkData"></illegalperson>
            </div>
          </div>
          <div class="c_rg_bot">
            <heluneirong :getStyle="hlStyle" :detailData="checkData"></heluneirong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import weifa from "@/components/weifa";
import tables from "@/components/tables";
// import zhuapai from "@/components/zhuapai";
// import pagination from "@/components/pagination";
// import timeSwiper from "@/components/timeSwiper";
//民警
import mingjin from "@/components/zhiqinzhifajiandu/mingjin";
//当前车辆
import carinitem from "@/components/zhiqinzhifajiandu/carinitem";
//当事人
import illegalperson from "@/components/zhiqinzhifajiandu/illegalperson";
//多牌照
import cardselect from "@/components/zhiqinzhifajiandu/cardselect";
//事故详情
import shiguxiangqing from "@/components/zhiqinzhifajiandu/shiguxiangqing";
//违法内容
import illegalcontent from "@/components/zhiqinzhifajiandu/illegalcontent";
//核录内容
import heluneirong from "@/components/zhiqinzhifajiandu/heluneirong";
import dateTime from "@/components/dateTime.vue";
import enforcementService from "@/api/enforcementService";
export default {
  data() {
    return {
      selectOrg: [],
      police: "",
      searchTime: "",
      defaultstart: "",
      defaultend: "",
      activeName: "weifa",
      showtype: "weifa",
      mjStyle: {
        padding: "0",
        height: "100%",
        "margin-bottom": "0"
      },
      ciStyle: {
        height: "100%"
      },
      dsrStyle: {
        height: "100%"
      },
      icStyle: {
        width: "100%",
        height: "100%"
      },
      xcStyle: {
        height: "100%"
      },
      sgStyle: {
        height: "100%"
      },
      hlStyle: {
        width: "100%",
        height: "100%"
      },
      tableData: [],
      tableColumns1: [
        {
          title: "民警",
          key: "mjxm",
          width: "20%"
        },
        {
          title: "机构",
          key: "bmmc",
          width: "40%"
        },
        {
          title: "时间",
          key: "wfsj",
          width: "40%"
        }
      ],
      tableColumns2: [
        {
          title: "民警",
          key: "mjxm",
          width: "20%"
        },
        {
          title: "机构",
          key: "bmmc",
          width: "40%"
        },
        {
          title: "时间",
          key: "sgfssj",
          width: "40%"
        }
      ],
      tableColumns3: [
        {
          title: "民警",
          key: "mjxm",
          width: "20%"
        },
        {
          title: "机构",
          key: "bmmc",
          width: "40%"
        },
        {
          title: "时间",
          key: "cjsj",
          width: "40%"
        }
      ],
      currentPage1: 1,
      totalCount1: 0,
      illegalData: {},
      currentPage2: 1,
      totalCount2: 0,
      accidentData: {},
      accidentDetail: [],
      responsibility: "",
      currentPage3: 1,
      totalCount3: 0,
      checkData: {},
      videoData: []
    };
  },
  created() {
    // 设置默认时间
    let moment = this.$moment().format("YYYY-MM-DD");
    this.defaultstart = moment + " 00:00:00";
    this.defaultend = moment + " 23:59:59";
    this.searchTime = `${this.defaultstart}&${this.defaultend}`;
    this.changeSearch();
  },
  components: {
    tables,
    cardselect,
    heluneirong,
    shiguxiangqing,
    mingjin,
    carinitem,
    illegalcontent,
    illegalperson,
    dateTime
  },
  methods: {
    // 查询改变
    changeSearch() {
      if (this.activeName === "weifa") {
        this.currentPage1 = 1;
        this.getIllegalList();
      } else if (this.activeName === "shigu") {
        this.currentPage2 = 1;
        this.getAccidentList();
      } else if (this.activeName === "jiancha") {
        this.currentPage3 = 1;
        this.getCheckList();
      }
    },
    // 查询违法列表
    getIllegalList() {
      let timeArr = this.searchTime.split("&");
      let params = {
        startTime: timeArr[0],
        endTime: timeArr[1],
        startRow: 10 * (this.currentPage1 - 1),
        endRow: 10
      };
      if (this.selectOrg[1]) {
        params.department = this.selectOrg[1];
      }
      if (this.police) {
        params.police = this.police;
      }
      enforcementService.getIllegalList(params).then(res => {
        if (res.code === "0") {
          this.tableData = res.data.illegal || [];
          this.totalCount1 = res.data.count || 0;
          // let data = res.data.illegal;
          // let arr = [];
          // data.forEach(item => {
          //   if (item.type === "2") {
          //     arr.push(item);
          //   }
          // });
          // this.tableData = arr;
          if (res.data.illegal[0]) {
            let type = res.data.illegal[0].type;
            if (type === "1") {
              this.getIllegalDetail1(res.data.illegal[0].id);
            } else if (type === "2") {
              this.getIllegalDetail2(res.data.illegal[0].id);
            }
          }
        } else {
          this.tableData = [];
          this.totalCount1 = 0;
        }
      });
    },
    // 获取违法详情1
    getIllegalDetail1(id) {
      enforcementService
        .getIllegalDetail1({
          id: id
        })
        .then(res => {
          if (res.code === "0") {
            this.illegalData = res.data || {};
            this.getVideoRecord(res.data);
          }
        });
    },
    // 获取违法详情2
    getIllegalDetail2(id) {
      enforcementService
        .getIllegalDetail2({
          id: id
        })
        .then(res => {
          if (res.code === "0") {
            this.illegalData = res.data || {};
            this.getVideoRecord(res.data);
          }
        });
    },
    // 违法列表点击
    illegalChange(item) {
      if (item.type === "1") {
        this.getIllegalDetail1(item.id);
      } else if (item.type === "2") {
        this.getIllegalDetail2(item.id);
      }
    },
    // 获取事故列表
    getAccidentList() {
      let timeArr = this.searchTime.split("&");
      let params = {
        startTime: timeArr[0],
        endTime: timeArr[1],
        startRow: 10 * (this.currentPage2 - 1),
        endRow: 10
      };
      if (this.selectOrg[1]) {
        params.department = this.selectOrg[1];
      }
      if (this.police) {
        params.police = this.police;
      }
      enforcementService.getAccidentList(params).then(res => {
        if (res.code === "0") {
          this.tableData = res.data.accident || [];
          this.totalCount2 = res.data.count || 0;
          if (res.data.accident[0]) {
            this.accidentData = res.data.accident[0] || {};
            this.getAccidentDetail(res.data.accident[0].sgbh);
            this.getVideoRecord(res.data.accident[0]);
          }
        } else {
          this.tableData = [];
          this.totalCount2 = 0;
        }
      });
    },
    // 获取事故详情
    getAccidentDetail(id) {
      enforcementService
        .getAccidentDetail({
          sgbh: id
        })
        .then(res => {
          if (res.code === "0") {
            this.accidentDetail = res.data || [];
            this.responsibility = res.data[0].sgzr || "";
          }
        });
    },
    // 事故车辆切换
    accidentCarChange(value) {
      this.responsibility = value;
    },
    // 事故列表点击
    accidentChange(item) {
      this.accidentData = item;
      this.getAccidentDetail(item.sgbh);
      this.getVideoRecord(item);
    },
    // 获取核录列表
    getCheckList() {
      let timeArr = this.searchTime.split("&");
      let params = {
        startTime: timeArr[0],
        endTime: timeArr[1],
        startRow: 10 * (this.currentPage3 - 1),
        endRow: 10
      };
      if (this.selectOrg[1]) {
        params.department = this.selectOrg[1];
      }
      if (this.police) {
        params.police = this.police;
      }
      enforcementService.getCheckList(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          this.tableData = res.data.kkjc || [];
          this.totalCount3 = res.data.count || 0;
          if (res.data.kkjc[0]) {
            this.checkData = res.data.kkjc[0];
          }
        }
      });
    },
    // 检查核录列表点击
    checkChange(item) {
      this.checkData = item;
    },
    // 选择机构改变
    selectOrgChange() {
      this.changeSearch();
    },
    // 查询时间改变
    dateChange() {
      this.changeSearch();
    },
    // 执法数据类型改变
    changes(value) {
      if (!value) return;
      this.showtype = value;
      this.changeSearch();
    },
    // 违法翻页
    handleCurrentChange1(page) {
      this.currentPage1 = page;
      this.getIllegalList();
    },
    // 事故翻页
    handleCurrentChange2(page) {
      this.currentPage2 = page;
      this.getAccidentList();
    },
    // 检查核录翻页
    handleCurrentChange3(page) {
      this.currentPage3 = page;
      this.getCheckList();
    },
    // 获取执法记录仪
    getVideoRecord(item) {
      let time = item.wfsj || item.sgfssj;
      let date = new Date(time);
      let date1 = new Date(date.getTime() - 10 * 60 * 1000);
      let date2 = new Date(date.getTime() + 10 * 60 * 1000);
      let startTime = this.$moment(date1).format("YYYY-MM-DD HH:mm:ss");
      let endTime = this.$moment(date2).format("YYYY-MM-DD HH:mm:ss");
      enforcementService
        .getVideoRecord({
          page: 1,
          policeno: item.mjjh,
          starttime: startTime,
          endtime: endTime,
          authority: "guangxin"
        })
        .then(res => {
          console.log(res);
          this.videoData = res.data.data || [];
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.pageBox {
  margin-bottom: 15px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
}
.yichangQinwu_wrap {
  height: 100%;
  box-sizing: border-box;
  .top {
    padding: 10px 20px 0 86px;
    .top_lf {
      color: #ffcc66;
      font-size: 14px;
      font-weight: 400;
      display: flex;
      align-items: center;
      img {
        display: block;
        margin-right: 10px;
      }
    }
  }
  .content {
    margin-top: 10px;
    padding-left: 86px;
    padding-right: 20px;
    height: calc(100% - 98px);
    .c_lf {
      float: left;
      width: 30%;
      height: 100%;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      .cont {
        flex: 1;
        border: 1px solid #4266af;
        overflow: hidden;
      }
      .select_wrap {
        display: flex;
      }
      .select {
        flex: 1;
        &:first-child {
          margin-right: 16px;
        }
      }
    }
    .c_rg {
      float: left;
      width: calc(70% - 20px);
      display: flex;
      flex-direction: column;
      height: 100%;
      //   overflow: hidden;
      .weifa_detail {
        width: 100%;
        height: 100%;
        .c_rg_top {
          width: 100%;
          height: 55%;
          display: flex;
          margin-bottom: 20px;
          justify-content: space-between;
          .police {
            width: 29%;
            height: 100%;
          }
          .car {
            width: 38%;
            height: 100%;
          }
          .people {
            width: 29%;
            height: 100%;
          }
        }
        .c_rg_bot {
          width: 100%;
          height: calc(45% - 20px);
        }
      }
      .shigu_detail {
        width: 100%;
        height: 100%;
        .c_rg_top {
          width: 100%;
          height: 55%;
          display: flex;
          margin-bottom: 20px;
          justify-content: space-between;
          .police {
            width: 29%;
            height: 100%;
            margin-right: 20px;
          }
          .relative_car {
            flex: 1;
            height: 100%;
          }
        }
        .c_rg_bot {
          width: 100%;
          height: calc(45% - 20px);
        }
      }
      .jiancha {
        width: 100%;
        height: 100%;
        .c_rg_top {
          width: 100%;
          height: 55%;
          display: flex;
          margin-bottom: 20px;
          justify-content: space-between;
          .police {
            width: 29%;
            height: 100%;
          }
          .car {
            width: 38%;
            height: 100%;
          }
          .people {
            width: 29%;
            height: 100%;
          }
        }
        .c_rg_bot {
          width: 100%;
          height: calc(45% - 20px);
        }
      }
      .rb {
        padding: 20px;
        border: 1px solid #4266af;
        flex: 1;
        margin-top: 20px;
        .rb_detail {
          .line {
            width: 1px;
            height: 280px;
            background: linear-gradient(
              0deg,
              rgba(7, 33, 62, 1) 0%,
              rgba(73, 175, 208, 1) 28.000000000000004%,
              rgba(110, 103, 232, 1) 71%,
              rgba(19, 35, 77, 1) 100%
            );
            margin: 0 30px 0 0;
          }
          .rb_det {
            flex: 1;
          }
          h6 {
            font-size: 14px;
            color: #ffcc66;
          }
          .image-wrapper {
            width: 100px;
            margin-right: 50px;
            img {
              width: 100px;
            }
          }
        }
      }
      .ic {
        margin-right: 6px;
        font-size: 13px;
        color: #03d8ea;
        display: inline-block;
        img {
          margin-right: 10px;
        }
      }
      .el {
        margin-top: 13px;
      }
      .infos {
        font-size: 14px;
        display: inline-block;
        color: rgba(255, 255, 255, 1);
        width: 50%;
      }
      .info-label {
        font-size: 13px;
        display: inline-block;
        font-weight: 400;
        margin-right: 7px;
        color: rgba(3, 216, 234, 1);
      }
      .minjing {
        padding: 20px 40px;
        border: 1px solid #4266af;
        margin-bottom: 20px;
      }
      .minjing .l .image-wrapper {
        width: 100px;
        height: 120px;
      }
      .ts {
        margin-top: 20px;
        display: flex;
        align-items: flex-start;
        .ic {
          width: auto;
          img {
            vertical-align: top;
          }
        }
        span {
          line-height: 20px;
          small {
            display: inline-block;
            padding: 0 10px;
            margin: 2px 2px 0 2px;
            border-bottom: solid 1px #ffffff;
            text-align: center;
          }
        }
      }
    }
  }
  /deep/ .el-select {
    width: 100%;
  }
  /deep/ .el-input__inner {
    background: #06243d;
    height: 30px;
    border: 1px solid rgba(52, 113, 175, 1);
    color: #ffcc66;
  }
  /deep/ .el-input__icon {
    line-height: 20px;
  }
  /deep/ .el-select-dropdown {
    background-color: #06243d;
  }
  /deep/ .el-collapse-item {
    &:last-child {
      .el-collapse-item__wrap {
        border-bottom: 0 !important;
      }
    }
  }
  /deep/ .el-collapse-item__content {
    padding-bottom: 0;
    border: none;
  }
  /deep/ .el-collapse-item__header {
    background: none;
    border-bottom: 1px solid #366492;
    color: #ffcc66;
    padding-left: 20px;
  }
  /deep/ .el-collapse-item__wrap {
    background: none;
    border-bottom: 1px solid #366492;
  }
  /deep/ input {
    background: none;
  }
  /deep/ .el-date-editor--datetimerange.el-input__inner {
    width: 100%;
  }
  /deep/ .el-date-editor .el-range-input {
    color: #ffcc66;
  }
  /deep/ .el-date-editor .el-range-separator {
    color: #ffffff;
    line-height: 20px;
  }
}
</style>
