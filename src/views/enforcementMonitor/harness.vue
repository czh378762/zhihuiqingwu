<template>
  <div class="yichangQinwu_wrap">
    <div class="top">
      <div class="top_lf">
        <img src="../../assets/img/iconImg/data.png" alt>勤务驾驶未系安全带
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
              placeholder="请输入车号"
              v-model="cardNum"
              class="common-focus"
              @keyup.enter.native="toSearch">
              <i 
                slot="suffix"
                class="el-input_icon el-icon-search"
                style="line-height: 30px;margin-right: 2px;cursor: pointer;"
                @click="toSearch">
              </i>
            </el-input>
          </div>
        </div>
        <div class="select_wrap" style="margin:10px 0;">
          <dateTime :defaultstart="defaultstart" :defaultend="defaultend" v-model="searchTime" @change="dateChange"></dateTime>
        </div>
        <div class="cont box_back">
          <tables :tableData="tableData" :tableColumns="tableColumns" @change="rowChange"></tables>
          <div class="pageBox" style="margin-bottom: 15px;padding: 0 20px;">
            <el-pagination
              background
              small
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="10"
              layout="total, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="c_rg">
        <zhuapai :detailData="activeData"></zhuapai>
      </div>
    </div>
  </div>
</template>
<script>
import tables from "@/components/tables";
import zhuapai from "@/components/zhiqinzhifajiandu/zhuapai";
import dateTime from "@/components/dateTime";
import enforcementService from "@/api/enforcementService";

export default {
  data() {
    return {
      selectOrg: "",
      cardNum: "",
      defaultstart: "",
      defaultend: "",
      searchTime: "",
      currentPage: 1,
      total: 0,
      tableData: [],
      tableColumns: [
        {
          title: "车号",
          key: "plateNo",
          width: "12%"
        },
        {
          title: "机构",
          key: "orgCodeName",
          width: "23%"
        },
        {
          title: "违法类型",
          key: "illegalType",
          width: "20%"
        },
        {
          title: "时间",
          key: "illegalTime",
          width: "20%"
        },
        {
          title: "地点",
          key: "illegalAddr",
          width: "25%"
        }
      ],
      activeData: {}
    };
  },
  components: {
    zhuapai,
    tables,
    dateTime
  },
  created() {
    // 设置默认时间
    let moment = this.$moment().format("YYYY-MM-DD");
    this.defaultstart = moment + " 00:00:00";
    this.defaultend = moment + " 23:59:59";
    this.searchTime = `${this.defaultstart}&${this.defaultend}`;
    this.getHarnessList();
  },
  methods: {
    // 获取安全带列表
    getHarnessList() {
      let timeArr = this.searchTime.split("&");
      let params = {
        startRow: (this.currentPage - 1) * 10,
        endRow: 10,
        startTime: timeArr[0],
        endTime: timeArr[1]
      };
      if (this.selectOrg) {
        params.jgbm = this.selectOrg[1];
      }
      if (this.cardNum) {
        params.plateNum = `浙O${this.cardNum}警`;
      }
      enforcementService.getHarnessList(params).then(res => {
        console.log(res);
        if (res.code === "0") {
          let data = res.data.safety || [];
          this.total = res.data.counts || 0;
          data.forEach(item => {
            let arr = [];
            let list = item.carImgUrlList || [];
            list.forEach(listItem => {
              if (listItem) {
                arr.push(listItem);
              }
            });
            item.carImgUrlList = arr;
          });
          this.tableData = data;
          this.activeData = this.tableData[0];
        } else {
          this.tableData = [];
          this.activeData = {};
        }
      });
    },
    // 机构选择改变
    selectOrgChange() {
      this.currentPage = 1;
      this.getHarnessList();
    },
    // 按车号查找
    toSearch() {
      this.currentPage = 1;
      this.getHarnessList();
    },
    // 时间改变
    dateChange() {
      this.currentPage = 1;
      this.getHarnessList();
    },
    // 页码变化
    handleCurrentChange(page) {
      this.currentPage = page;
      this.getHarnessList();
    },
    // 列表点击切换
    rowChange(item) {
      this.activeData = item;
    }
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
    padding-right: 20px;
    height: calc(100% - 98px);
    .c_lf {
      float: left;
      width: 54%;
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
      width: calc(46% - 20px);
      display: flex;
      flex-direction: column;
      height: 100%;
      //   overflow: hidden;
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
        margin-top: 10px;
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
.pageBox {
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
