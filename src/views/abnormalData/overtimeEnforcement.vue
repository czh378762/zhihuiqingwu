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
            <el-collapse v-model="activeName" accordion @change="change">
              <el-collapse-item title="非勤务时间处理违法" name="1">
                <tables :tableData="tableData" :tableColumns="tableColumns1" @change="rowChange1"></tables>
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
              <el-collapse-item title="非勤务时间处理事故" name="2">
                <tables :tableData="tableData" :tableColumns="tableColumns2" @change="rowChange2"></tables>
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
              <el-collapse-item title="非勤务时间检查核录" name="3">
                <tables :tableData="tableData" :tableColumns="tableColumns3" @change="rowChange3"></tables>
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
        <div class="c_rg_top">
          <calendar ref="policeCalendar" v-model="choseDate" :policeData="policeData"></calendar>
        </div>
        <div class="c_rg_bot">
          <feiqinwuTime v-if="tabName == '1'" :detailData="illegalData"></feiqinwuTime>
          <el-scrollbar style="height: 100%;" ref="scrollBox">
            <feiqinwuShigu v-if="tabName == '2'" ref="scrollItem" :detailData="accidentData" :relativeCarList="relativeCarList"></feiqinwuShigu>
            <feiqinwuJiancha v-if="tabName == '3'" ref="scrollItem" :detailData="checkData"></feiqinwuJiancha>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import weifa from "@/components/weifa";
import tables from "@/components/tables";
// import zhuapai from "@/components/zhuapai";
// import timeSwiper from "@/components/timeSwiper";
import calendar from "@/components/zhiqinzhifajiandu/calendar.vue";
import feiqinwuTime from "@/components/feiqinwuTime";
import feiqinwuShigu from "@/components/feiqinwuShigu";
import feiqinwuJiancha from "@/components/feiqinwuJiancha";
import dateTime from "@/components/dateTime";
import abnormalDataService from "@/api/abnormalDataService";
import enforcementService from "@/api/enforcementService";
export default {
  name: "overtimeEnforcement",
  data() {
    return {
      markArr: [],
      choseDate: "",
      selectOrg: "",
      police: "",
      defaultstart: "",
      defaultend: "",
      activeName: "1",
      tabName: "1",
      searchTime: "",
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
      policeData: {},
      currentPage1: 1,
      totalCount1: 0,
      illegalData: {},
      currentPage2: 1,
      totalCount2: 0,
      accidentData: {},
      relativeCarList: [],
      currentPage3: 1,
      totalCount3: 0,
      checkData: {}
    };
  },
  watch: {
    // 选择日期改变
    choseDate() {
      // console.log(newval);
    }
  },
  components: {
    tables,
    calendar,
    feiqinwuTime,
    feiqinwuShigu,
    dateTime,
    feiqinwuJiancha
  },
  created() {
    // 设置默认时间
    let moment = this.$moment().format("YYYY-MM-DD");
    this.defaultstart = moment + " 00:00:00";
    this.defaultend = moment + " 23:59:59";
    this.searchTime = `${this.defaultstart}&${this.defaultend}`;
    this.getIllegalList();
    // this.getAccidentList();
    // this.getCheckList();
  },
  mounted() {
    window.addEventListener("resize", this.calcStyle);
  },
  methods: {
    // 处理滚动条bug
    calcStyle() {
      this.$nextTick(() => {
        let dom1 = this.$refs.scrollBox.$el;
        let dom2 = this.$refs.scrollItem.$el;
        let dom3 = dom1.getElementsByClassName("el-scrollbar__thumb")[1];
        if (dom1.offsetHeight > dom2.offsetHeight) {
          dom3.style.height = 0;
        } else {
          dom3.style.height =
            (dom1.offsetHeight / dom2.offsetHeight) * 100 + "%";
        }
      });
    },
    // 查询改变
    changeSearch() {
      if (this.activeName === "1") {
        this.currentPage1 = 1;
        this.getIllegalList();
      } else if (this.activeName === "2") {
        this.currentPage2 = 1;
        this.getAccidentList();
      } else if (this.activeName === "3") {
        this.currentPage3 = 1;
        this.getCheckList();
      }
    },
    // 获取违法列表
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
      abnormalDataService.getIllegalList(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          this.tableData = res.data.accident || [];
          this.totalCount1 = res.data.counts || 0;
          this.policeData = res.data.accident[0] || {};
          this.policeData.typeName = "违法";
          this.policeData.occurTime = this.policeData.wfsj;
          this.choseDate = this.$moment(res.data.accident[0].wfsj).format(
            "YYYY-MM-DD"
          );
          this.$refs.policeCalendar.toChoseMonth();
          if (res.data.accident[0]) {
            let type = res.data.accident[0].type;
            if (type === "1") {
              this.getIllegalDetail1(res.data.accident[0].id);
            } else if (type === "2") {
              this.getIllegalDetail2(res.data.accident[0].id);
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
            console.log(this.illegalData);
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
            console.log(this.illegalData);
          }
        });
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
      abnormalDataService.getAccidentList(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          this.tableData = res.data.accident || [];
          this.totalCount2 = res.data.counts || 0;
          this.policeData = res.data.accident[0] || {};
          this.policeData.typeName = "事故";
          this.policeData.occurTime = this.policeData.sgfssj;
          this.choseDate = this.$moment(res.data.accident[0].sgfssj).format(
            "YYYY-MM-DD"
          );
          this.$refs.policeCalendar.toChoseMonth();
          this.accidentData = res.data.accident[0];
          this.getAccidentDetail(res.data.accident[0].sgbh);
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
            this.relativeCarList = res.data || [];
          }
        });
    },
    // 获取核查检录列表
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
      abnormalDataService.getCheckList(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          this.tableData = res.data.accident || [];
          this.totalCount3 = res.data.counts || 0;
          this.policeData = res.data.accident[0] || {};
          this.policeData.typeName = "核查检录";
          this.policeData.occurTime = this.policeData.cjsj;
          this.choseDate = this.$moment(res.data.accident[0].cjsj).format(
            "YYYY-MM-DD"
          );
          this.$refs.policeCalendar.toChoseMonth();
          this.checkData = res.data.accident[0];
        } else {
          this.tableData = [];
          this.totalCount3 = 0;
        }
      });
    },
    // 选择机构改变
    selectOrgChange() {
      this.changeSearch();
    },
    // 查找时间改变
    dateChange() {
      this.changeSearch();
    },
    // 执法类型切换
    change(value) {
      if (this.activeName === "1") {
        this.tableData = [];
        this.currentPage1 = 1;
        this.totalCount1 = 0;
      } else if (this.activeName === "2") {
        this.tableData = [];
        this.currentPage2 = 1;
        this.totalCount2 = 0;
      } else if (this.activeName === "3") {
        this.tableData = [];
        this.currentPage3 = 1;
        this.totalCount3 = 0;
      }
      if (!value) return;
      this.tabName = value;
      this.changeSearch();
    },
    // 违法分页切换
    handleCurrentChange1(page) {
      this.currentPage1 = page;
      this.getIllegalList();
    },
    // 违法列表高亮切换
    rowChange1(row) {
      this.policeData = row;
      this.policeData.typeName = "违法";
      this.policeData.occurTime = this.policeData.wfsj;
      this.choseDate = this.$moment(row.wfsj).format("YYYY-MM-DD");
      this.$refs.policeCalendar.toChoseMonth();
      if (row.type === "1") {
        this.getIllegalDetail1(row.id);
      } else if (row.type === "2") {
        this.getIllegalDetail2(row.id);
      }
    },
    // 事故分页切换
    handleCurrentChange2(page) {
      this.currentPage2 = page;
      this.getAccidentList();
    },
    // 事故列表高亮切换
    rowChange2(row) {
      this.policeData = row;
      this.policeData.typeName = "事故";
      this.policeData.occurTime = this.policeData.sgfssj;
      this.choseDate = this.$moment(row.sgfssj).format("YYYY-MM-DD");
      this.$refs.policeCalendar.toChoseMonth();
      this.accidentData = row;
      this.getAccidentDetail(row.sgbh);
    },
    // 检查核录分页切换
    handleCurrentChange3(page) {
      this.currentPage3 = page;
      this.getCheckList();
    },
    // 检查核录列表高亮切换
    rowChange3(row) {
      this.policeData = row;
      this.policeData.typeName = "核查检录";
      this.policeData.occurTime = this.policeData.cjsj;
      this.choseDate = this.$moment(row.cjsj).format("YYYY-MM-DD");
      this.$refs.policeCalendar.toChoseMonth();
      this.checkData = row;
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.calcStyle);
  }
};
</script>
<style lang="scss" scoped>
.yichangQinwu_wrap {
  height: 100%;
  box-sizing: border-box;
  .top {
    padding: 10px 0 0 86px;
    .top_lf {
      width: 13%;
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
          margin-right: 20px;
        }
      }
    }
    .c_rg {
      float: left;
      width: calc(70% - 40px);
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      .c_rg_top {
        width: 100%;
        height: 360px;
        margin-bottom: 20px;
      }
      .c_rg_bot {
        width: 100%;
        height: calc(100% - 380px);
        border: 1px solid #4266af;
        border-radius: 4px;
      }
      .rb {
        padding: 20px;
        border: 1px solid #4266af;
        flex: 1;
        margin-top: 20px;
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
